"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './about.css'; 

export default function About() {
  const [schedules, setSchedules] = useState([]);
  const [activeTab, setActiveTab] = useState('Timetable'); // 'Timetable' or 'Daily Schedule'
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

  // Filter data based on Tab
  const filteredData = schedules.filter(item => item.type === activeTab);

  // Tab change hone par index reset karein
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const deleteCurrentCard = () => {
    const itemToDelete = filteredData[currentIndex];
    const updatedGlobalList = schedules.filter(item => item.id !== itemToDelete.id);
    
    setSchedules(updatedGlobalList);
    localStorage.setItem('userScheduleList', JSON.stringify(updatedGlobalList));
    
    if (currentIndex > 0 && currentIndex >= filteredData.length - 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextCard = () => {
    if (currentIndex < filteredData.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevCard = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const currentItem = filteredData[currentIndex];

  return (
    <div className="about-container">
      {/* --- TABS SYSTEM --- */}
      <div className="tabs-wrapper">
        <button 
          className={`tab-btn ${activeTab === 'Timetable' ? 'active' : ''}`}
          onClick={() => handleTabChange('Timetable')}
        >
          🗓️ Time Table
        </button>
        <button 
          className={`tab-btn ${activeTab === 'Daily Schedule' ? 'active' : ''}`}
          onClick={() => handleTabChange('Daily Schedule')}
        >
          ⚡ Daily Schedule
        </button>
      </div>

      <motion.div 
        key={activeTab} // Tab badalne par animation restart hogi
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="paper-card"
      >
        <div className="header-section">
          <h1 className="title-text">{activeTab} View</h1>
          <div className="meta-row">
            <div className="meta-field">Date: <span className="dotted-line">{currentDate}</span></div>
            <div className="meta-field">Day: <span className="dotted-line">{currentDay}</span></div>
          </div>
        </div>

        <div className="schedule-display">
          <AnimatePresence mode="wait">
            {filteredData.length > 0 ? (
              <motion.div 
                key={currentItem?.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="card-row"
              >
                <div className={`time-box ${activeTab === 'Timetable' ? 'bg-purple' : 'bg-pink'}`}>
                  {currentItem.time}
                </div>
                <div className="task-box">
                  <span className="task-name">{currentItem.task}</span>
                  <span className="day-badge">{currentItem.day}</span>
                </div>
              </motion.div>
            ) : (
              <div className="empty-state">
                <p style={{color:' #cbd5e1'}}>No records found in {activeTab}.</p>
                <button onClick={() => window.location.href='/'} className="btn-small">Add Now</button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {filteredData.length > 1 && (
          <div className="nav-controls">
            <button onClick={prevCard} disabled={currentIndex === 0} className="nav-btn">← Prev</button>
            <span className="page-info">{currentIndex + 1} / {filteredData.length}</span>
            <button onClick={nextCard} disabled={currentIndex === filteredData.length - 1} className="nav-btn">Next →</button>
          </div>
        )}

        <div className="notes-area">
          <div className="notes-head">Specific Information</div>
          <div className="notes-body">
            {currentItem?.notes ? (
              <p className="notes-txt">{currentItem.notes}</p>
            ) : (
              <p className="notes-txt  text-center">No additional notes for this task.</p>
            )}
          </div>
        </div>

        <div className="btn-group">
          <button onClick={() => window.location.href='/'} className="btn-add">+ New {activeTab === 'Timetable' ? 'Routine' : 'Task'}</button>
          {filteredData.length > 0 && (
            <button onClick={deleteCurrentCard} className="btn-del">Delete</button>
          )}
        </div>
      </motion.div>
    </div>
  );
}