"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './about.css'; // CSS Import

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
    <div className="about-container">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="paper-card"
      >
        <div className="header-section">
          <h1 className="title-text">Daily Schedule</h1>
          <div className="meta-row">
            <div className="meta-field">Date: <span className="dotted-line">{currentDate}</span></div>
            <div className="meta-field">Day: <span className="dotted-line">{currentDay}</span></div>
          </div>
        </div>

        <div className="schedule-display">
          <AnimatePresence mode="wait">
            {schedules.length > 0 ? (
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="card-row"
              >
                <div className="time-box">{currentItem.time}</div>
                <div className="task-box">
                  <span className="task-name">{currentItem.task}</span>
                  <span className="day-badge">{currentItem.day}</span>
                </div>
              </motion.div>
            ) : (
              <p style={{ textAlign: 'center', width: '100%', color: '#94a3b8' }}>No records found.</p>
            )}
          </AnimatePresence>
        </div>

        {schedules.length > 1 && (
          <div className="nav-controls">
            <button onClick={prevCard} disabled={currentIndex === 0} className="nav-btn">← Prev</button>
            <span className="page-info">{currentIndex + 1} / {schedules.length}</span>
            <button onClick={nextCard} disabled={currentIndex === schedules.length - 1} className="nav-btn">Next →</button>
          </div>
        )}

        <div className="notes-area">
          <div className="notes-head">Notes / Information</div>
          <div className="notes-body">
            {currentItem?.notes ? (
              <p className="notes-txt">{currentItem.notes}</p>
            ) : (
              <div style={{padding: '10px'}}>
                <div className="line-dec"></div>
                <div className="line-dec"></div>
              </div>
            )}
          </div>
        </div>

        <div className="btn-group">
          <button onClick={() => window.location.href='/'} className="btn-add">+ New Task</button>
          <button 
            onClick={deleteCurrentCard} 
            disabled={schedules.length === 0}
            className="btn-del"
          >
            Delete This
          </button>
        </div>
      </motion.div>
    </div>
  );
}