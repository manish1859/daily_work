"use client";
import { useState, useEffect } from 'react';
import { ImPower } from "react-icons/im";
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { GrSchedules } from "react-icons/gr";
import { FaRocket } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";


import './home.css';

export default function Home() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState(''); // 'timetable' or 'schedule'
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    time: '',
    day: '',
    task: '',
    notes: '',
    type: '', // To distinguish between Timetable and Daily Schedule
    id: Date.now()
  });

  useEffect(() => {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setFormData(prev => ({ ...prev, time: currentTime }));
  }, []);

  const startPlanning = (type) => {
    setCategory(type);
    setFormData(prev => ({ ...prev, type: type }));
    setShowForm(true);
  };

  const nextStep = () => {
    const fields = ['time', 'day', 'task', 'notes'];
    const currentField = fields[step - 1];
    
    if (!formData[currentField] || formData[currentField].trim() === "") {
      alert("Please fill the input to proceed"); 
      return;
    }

    if (step < 4) {
      setStep(step + 1);
    } else {
      const existingSchedules = JSON.parse(localStorage.getItem('userScheduleList') || "[]");
      const updatedList = [formData, ...existingSchedules];
      localStorage.setItem('userScheduleList', JSON.stringify(updatedList));
      router.push('/about');
    }
  };

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="home-container">
      {!showForm ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="hero-content container text-center"
        >
          <h1 className="main-heading">Master Your Time with <span className="gradient-text">ProPlanner</span></h1>
          
          <div className="content-rich-text text-start mt-5">
            <h3>Why Time Management Matters in 2026?</h3>
            <p>
              In an era dominated by digital distractions, staying focused is the ultimate superpower. 
              <strong> ProPlanner</strong> is not just a tool; it is a psychological framework designed to help 
              high-achievers, students, and professionals reclaim their hours. Time management is the process 
              of organizing and planning how to divide your time between specific activities. Good time management 
              enables you to work smarter – not harder – so that you get more done in less time, even when 
              pressures are high and decisions are complex.
            </p>

            <h3>Timetable vs. Daily Schedule: What’s the Difference?</h3>
            <p>
              Most people confuse a <strong>Timetable</strong> with a <strong>Daily Schedule</strong>. 
              A Timetable is a fixed structure—a repetitive cycle like a school or university routine. 
              It provides a foundation. On the other hand, a Daily Schedule is dynamic; it adapts to the 
              specific demands of today. Whether you have an urgent meeting or a spontaneous study session, 
              your schedule helps you navigate through the day's unique challenges.
            </p>

<div className="container features-grid my-5">
  <div className="row g-4 justify-content-center">
    
    {/* Card 1: Productivity */}
    <div className="col-lg-4 col-md-6 col-sm-12">
      <motion.div whileHover={{ y: -10 }} className="feature-card h-100">
        <div className="icon-badge rocket-bg">
          <FaRocket />
        </div>
        <h4>Productivity Boost</h4>
        <p>Scientific studies prove that documenting tasks digitally or on paper increases your success rate by up to 42%.</p>
        <div className="card-glow"></div>
      </motion.div>
    </div>

    {/* Card 2: Mental Clarity */}
    <div className="col-lg-4 col-md-6 col-sm-12">
      <motion.div whileHover={{ y: -10 }} className="feature-card h-100">
        <div className="icon-badge brain-bg">
          <FaBrain />
        </div>
        <h4>Mental Clarity</h4>
        <p>Offload your daily stress. ProPlanner acts as your external brain, letting you focus on execution, not memorization.</p>
        <div className="card-glow"></div>
      </motion.div>
    </div>

    {/* Card 3: Privacy */}
    <div className="col-lg-4 col-md-6 col-sm-12">
      <motion.div whileHover={{ y: -10 }} className="feature-card h-100">
        <div className="icon-badge lock-bg">
          <FaLock />
        </div>
        <h4>Privacy First</h4>
        <p>Your data is yours. We use client-side encryption and LocalStorage so your routines never touch any external server.</p>
        <div className="card-glow"></div>
      </motion.div>
    </div>

  </div>
</div>

            <h3>How to use ProPlanner effectively?</h3>
            <p>
              To get the most out of this tool, start by identifying your "Deep Work" hours. These are the times 
              when your energy is highest. Use the <strong>Timetable</strong> feature to set your recurring 
              responsibilities and use the <strong>Daily Schedule</strong> for one-time urgent tasks. By balancing 
              both, you create a life of discipline and flexibility. ProPlanner helps you visualize your day 
              before it starts, giving you a roadmap to success.
            </p>
          </div>

          <div className="action-selection mt-5">
            <h2 className="mb-4">Choose Your Planning Style</h2>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <button className="category-btn timetable-btn" onClick={() => startPlanning('Timetable')}>
                <GrSchedules/> Create Timetable
              </button>
              <button className="category-btn schedule-btn" onClick={() => startPlanning('Daily Schedule')}>
              <ImPower /> Daily Schedule
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        /* --- FORM SECTION --- */
<motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="form-card interactive-card">
  {/* Progress Header */}
  <div className="progress-wrapper mb-4">
    <div className="progress-info">
       <span className="step-count">Step {step} of 4</span>
       <span className="badge-mode">{category === 'Timetable' ? '📅 Timetable' : '⚡ Schedule'}</span>
    </div>
    <div className="progress-container">
      <motion.div className="progress-bar" animate={{ width: `${(step / 4) * 100}%` }} />
    </div>
  </div>

  <AnimatePresence mode="wait">
    <motion.div 
      key={`${category}-${step}`}
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      exit={{ y: -20, opacity: 0 }}
      className="step-content"
    >
      {/* Icon Showcase Area */}
      <div className={`icon-showcase ${category === 'Timetable' ? 'purple-glow' : 'pink-glow'}`}>
        {step === 1 && <CiClock2 />}
        {step === 2 && <GrSchedules />}
        {step === 3 && (category === 'Timetable' ? <FaBookOpen /> : <FaTasks />)}
        {step === 4 && (category === 'Timetable' ? <FaMapMarkerAlt /> : <FaStickyNote />)}
      </div>

      <h2 className="step-title-new">
        {step === 1 && (category === 'Timetable' ? 'Routine Time' : 'Task Time')}
        {step === 2 && 'Select Day'}
        {step === 3 && (category === 'Timetable' ? 'Subject Name' : 'What is the task?')}
        {step === 4 && (category === 'Timetable' ? 'Location/Room' : 'Extra Notes')}
      </h2>

      {/* Inputs */}
      {step === 1 && (
        <input type="time" className="step-input-new" style={{ colorScheme: 'dark' }} value={formData.time} onChange={(e) => updateField('time', e.target.value)} />
      )}

      {step === 2 && (
        <select className="step-input-new" value={formData.day} onChange={(e) => updateField('day', e.target.value)}>
          <option value="">Choose Day</option>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      )}

      {step === 3 && (
        <input 
          type="text" 
          placeholder={category === 'Timetable' ? "e.g. Computer Science" : "e.g. Go to Gym"} 
          className="step-input-new" 
          value={formData.task} 
          onChange={(e) => updateField('task', e.target.value)} 
        />
      )}

      {step === 4 && (
        <textarea 
          placeholder={category === 'Timetable' ? "Room 203 or Lab..." : "Bring headphones..."} 
          className="step-input-new textarea-new" 
          value={formData.notes} 
          onChange={(e) => updateField('notes', e.target.value)} 
        />
      )}
    </motion.div>
  </AnimatePresence>

  <div className="btn-footer">
    <button onClick={nextStep} className="action-button-glow">
      {step === 4 ? "Finalize Plan ✨" : "Continue →"}
    </button>
    <button className="back-link" onClick={() => {setShowForm(false); setStep(1);}}>
      ← Restart
    </button>
  </div>
</motion.div>
      )}
    </div>
  );
}