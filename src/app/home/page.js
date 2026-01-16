"use client";
import { useState, useEffect } from 'react';
import { ImPower } from "react-icons/im";
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { GrSchedules } from "react-icons/gr";
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
        /* --- HERO SECTION WITH 700+ WORDS CONTENT --- */
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

            <div className="features-grid row my-5">
              <div className="col-md-4 feature-card">
                <h4>🚀 Productivity Boost</h4>
                <p>Studies show that writing down tasks increases completion rates by 42%.</p>
              </div>
              <div className="col-md-4 feature-card">
                <h4>🧠 Mental Clarity</h4>
                <p>Reduce the cognitive load on your brain by outsourcing your memory to ProPlanner.</p>
              </div>
              <div className="col-md-4 feature-card">
                <h4>🔒 Privacy First</h4>
                <p>Your data stays on your device. We don't store your personal routines on our servers.</p>
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
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="form-card">
          <div className="progress-container">
            <motion.div className="progress-bar" animate={{ width: `${(step / 4) * 100}%` }} />
          </div>
          
          <div className="form-header mb-4">
            <span className="badge-category">{category} Mode</span>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="step-content">
                <h2 className="step-title">🕒 Set Time</h2>
                <input type="time" className="step-input" style={{ colorScheme: 'dark' }} value={formData.time} onChange={(e) => updateField('time', e.target.value)} />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="step-content">
                <h2 className="step-title">📅 Select Day</h2>
                <select className="step-input" value={formData.day} onChange={(e) => updateField('day', e.target.value)}>
                  <option value="">Choose Day</option>
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="step-content">
                <h2 className="step-title">🎯 Your Task</h2>
                <input type="text" placeholder="e.g., Morning Yoga, Project Sync..." className="step-input" value={formData.task} onChange={(e) => updateField('task', e.target.value)} />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="step-content">
                <h2 className="step-title">📝 Final Notes</h2>
                <textarea placeholder="Any specific details or sub-tasks?" className="step-input step-textarea" value={formData.notes} onChange={(e) => updateField('notes', e.target.value)} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="btn-group-nav">
             <button onClick={nextStep} className="action-button">
              {step === 4 ? "Save Plan ✨" : "Next Step →"}
            </button>
            <button className="btn-link mt-3" style={{color: '#94a3b8', background: 'none', border: 'none'}} onClick={() => setShowForm(false)}>
              Cancel & Go Back
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}