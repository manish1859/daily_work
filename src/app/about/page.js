"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [schedules, setSchedules] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem('userScheduleList');
    if (saved) setSchedules(JSON.parse(saved));

    const now = new Date();
    setCurrentDate(now.toLocaleDateString('en-GB'));
    setCurrentDay(now.toLocaleDateString('en-GB', { weekday: 'long' }));
  }, []);

  const deleteCurrentCard = () => {
    const updatedList = schedules.filter((_, index) => index !== currentIndex);
    setSchedules(updatedList);
    localStorage.setItem('userScheduleList', JSON.stringify(updatedList));
    
    if (currentIndex > 0 && currentIndex >= updatedList.length - 1) {
      setCurrentIndex(updatedList.length - 1);
    }
  };

  const nextCard = () => {
    if (currentIndex < schedules.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevCard = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const currentItem = schedules[currentIndex];

  return (
    <div style={containerStyle}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        style={paperStyle}
      >
        {/* Header Section */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Daily Schedule</h1>
          <div style={metaDataRow}>
            <div style={metaField}>Date: <span style={dottedText}>{currentDate}</span></div>
            <div style={metaField}>Day: <span style={dottedText}>{currentDay}</span></div>
          </div>
        </div>

        {/* Card Display Area */}
        <div style={listContainer}>
          <AnimatePresence mode="wait">
            {schedules.length > 0 ? (
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                style={rowStyle}
              >
                <div style={timeBox}>{currentItem.time}</div>
                <div style={taskBox}>
                  <span style={taskText}>{currentItem.task}</span>
                  <span style={dayTagBadge}>{currentItem.day}</span>
                </div>
              </motion.div>
            ) : (
              <p style={{ textAlign: 'center', padding: '20px', color: '#94a3b8' }}>No records found.</p>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        {schedules.length > 1 && (
          <div style={navStyle}>
            <button onClick={prevCard} disabled={currentIndex === 0} style={navBtn}>← Prev</button>
            <span style={pageIndicator}>{currentIndex + 1} / {schedules.length}</span>
            <button onClick={nextCard} disabled={currentIndex === schedules.length - 1} style={navBtn}>Next →</button>
          </div>
        )}

        {/* Notes Section */}
        <div style={notesSection}>
          <div style={notesHeader}>Notes / Information</div>
          <div style={notesContent}>
            {currentItem?.notes ? (
              <p style={notesText}>{currentItem.notes}</p>
            ) : (
              <div style={{padding: '10px'}}>
                {[1, 2, 3].map(i => <div key={i} style={lineStyle}></div>)}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={buttonArea}>
          <button onClick={() => window.location.href='/'} style={addBtn}>+ New Task</button>
          <button 
            onClick={deleteCurrentCard} 
            disabled={schedules.length === 0}
            style={deleteBtn}
          >
            Delete This
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// --- Dark Theme Styles (Matched with your App's Theme) ---

const containerStyle = { 
  minHeight: '100vh', 
  background: 'radial-gradient(circle, #1a1a2e, #0f0f1b)', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  padding: '20px', 
  fontFamily: 'sans-serif' 
};

const paperStyle = { 
  background: 'rgba(255, 255, 255, 0.03)', 
  width: '100%', 
  maxWidth: '500px', 
  padding: '40px', 
  borderRadius: '24px', 
  boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
  border: '1px solid rgba(139, 92, 246, 0.2)',
  backdropFilter: 'blur(12px)'
};

const headerStyle = { textAlign: 'center', marginBottom: '30px' };
const titleStyle = { fontSize: '28px', color: '#8b5cf6', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' };

const metaDataRow = { display: 'flex', justifyContent: 'space-between', marginTop: '20px' };
const metaField = { flex: 1, display: 'flex', fontSize: '14px', color: '#cbd5e1', fontWeight: 'bold' };
const dottedText = { flex: 1, borderBottom: '1px dashed #444', marginLeft: '8px', paddingLeft: '5px', color: '#94a3b8' };

const listContainer = { borderTop: '1px solid #333', borderBottom: '1px solid #333', minHeight: '100px', display: 'flex', alignItems: 'center', margin: '20px 0' };
const rowStyle = { display: 'flex', width: '100%', minHeight: '70px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' };

const timeBox = { 
  width: '90px', 
  background: 'linear-gradient(135deg, #8b5cf6, #d946ef)', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  fontWeight: 'bold', 
  color: '#fff',
  fontSize: '18px'
};

const taskBox = { 
  flex: 1, 
  padding: '15px 20px', 
  display: 'flex', 
  justifyContent: 'space-between', 
  background: 'rgba(255,255,255,0.05)', 
  alignItems: 'center' 
};

const taskText = { color: '#fff', fontSize: '20px', fontWeight: 'bold' };
const dayTagBadge = { background: 'rgba(139, 92, 246, 0.2)', color: '#d946ef', padding: '4px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' };

const navStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' };
const navBtn = { background: 'transparent', border: '1px solid #444', color: '#94a3b8', padding: '6px 15px', cursor: 'pointer', borderRadius: '8px', fontSize: '13px' };
const pageIndicator = { color: '#8b5cf6', fontWeight: 'bold', fontSize: '14px' };

const notesSection = { marginTop: '10px' };
const notesHeader = { background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', textAlign: 'center', padding: '8px', fontWeight: 'bold', borderRadius: '8px 8px 0 0', fontSize: '14px' };
const notesContent = { minHeight: '120px', border: '1px solid #333', borderTop: 'none', borderRadius: '0 0 8px 8px', background: 'rgba(0,0,0,0.2)' };
const notesText = { padding: '15px', color: '#cbd5e1', fontSize: '15px', lineHeight: '1.6' };
const lineStyle = { height: '35px', borderBottom: '1px solid #222' };

const buttonArea = { marginTop: '35px', display: 'flex', gap: '15px' };
const addBtn = { flex: 2, padding: '14px', background: 'linear-gradient(90deg, #8b5cf6, #d946ef)', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' };
const deleteBtn = { flex: 1, padding: '14px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' };