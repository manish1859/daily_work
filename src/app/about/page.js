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
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={paperStyle}>
        
        <div style={headerStyle}>
          <h1 style={titleStyle}>Daily Schedule Template</h1>
          <div style={metaDataRow}>
            <div style={metaField}>Date: <span style={dottedText}>{currentDate}</span></div>
            <div style={metaField}>Day: <span style={dottedText}>{currentDay}</span></div>
          </div>
        </div>

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
                  <span style={dayTag}>{currentItem.day}</span>
                </div>
              </motion.div>
            ) : (
              <p style={{ textAlign: 'center', padding: '20px', color: '#888' }}>No records found.</p>
            )}
          </AnimatePresence>
        </div>

        {schedules.length > 1 && (
          <div style={navStyle}>
            <button onClick={prevCard} disabled={currentIndex === 0} style={navBtn}>← Prev</button>
            <span style={{color: '#555'}}>{currentIndex + 1} / {schedules.length}</span>
            <button onClick={nextCard} disabled={currentIndex === schedules.length - 1} style={navBtn}>Next →</button>
          </div>
        )}

        <div style={notesSection}>
          <div style={notesHeader}>Notes / Information</div>
          <div style={notesContent}>
            {currentItem?.notes ? (
              <p style={{margin: '10px', color: '#333'}}>{currentItem.notes}</p>
            ) : (
              [1, 2, 3].map(i => <div key={i} style={lineStyle}></div>)
            )}
          </div>
        </div>

        <div style={buttonArea}>
          <button onClick={() => window.location.href='/'} style={addBtn}>+ New</button>
          <button 
            onClick={deleteCurrentCard} 
            disabled={schedules.length === 0}
            style={{...clearBtn, color: 'white', background: '#ff4757', border: 'none'}}
          >
            Delete This
          </button>
        </div>
      </motion.div>
    </div>
  );
}

const containerStyle = { minHeight: '100vh', background: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', fontFamily: 'serif' };
const paperStyle = { background: '#ffffff', width: '100%', maxWidth: '500px', padding: '30px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' };
const headerStyle = { textAlign: 'center', marginBottom: '30px' };
const titleStyle = { fontSize: '24px', fontStyle: 'italic', color: '#333' };
const metaDataRow = { display: 'flex', justifyContent: 'space-between', marginTop: '20px' };
const metaField = { flex: 1, display: 'flex', fontSize: '14px', fontWeight: 'bold' };
const dottedText = { flex: 1, borderBottom: '1px solid #333', marginLeft: '5px', paddingLeft: '5px', color: '#555' };
const listContainer = { borderTop: '2px solid #333', borderBottom: '2px solid #333', minHeight: '80px', display: 'flex', alignItems: 'center' };
const rowStyle = { display: 'flex', width: '100%', minHeight: '60px' };
const timeBox = { width: '80px', background: '#dcd3d1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' };
const taskBox = { flex: 1, padding: '15px', display: 'flex', justifyContent: 'space-between', background: '#f9f9f9', alignItems: 'center' };
const taskText = { color: '#000', fontSize: '18px', fontWeight: 'bold' };
const dayTag = { color: '#888', fontSize: '12px' };
const navStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', padding: '0 10px' };
const navBtn = { background: 'none', border: '1px solid #ccc', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px', fontSize: '12px' };
const notesSection = { marginTop: '20px' };
const notesHeader = { background: '#dcd3d1', textAlign: 'center', padding: '5px', fontWeight: 'bold' };
const notesContent = { minHeight: '100px', border: '1px solid #eee', marginTop: '5px', background: '#fff' };
const lineStyle = { height: '30px', borderBottom: '1px solid #ccc' };
const buttonArea = { marginTop: '30px', display: 'flex', gap: '10px' };
const addBtn = { flex: 1, padding: '12px', background: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };
const clearBtn = { flex: 1, padding: '12px', cursor: 'pointer', borderRadius: '4px' };