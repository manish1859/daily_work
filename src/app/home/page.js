"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    time: '',
    day: '',
    week: '',
    task: '',
    notes: '', 
    id: Date.now()
  });

  const nextStep = () => {
    const currentField = ['time', 'day', 'week', 'task', 'notes'][step - 1];
    
    if (!formData[currentField] || formData[currentField].trim() === "") {
      alert("Fiil the input"); 
      return;
    }

    if (step < 5) {
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

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div style={containerStyle}>
      <motion.div layout style={cardStyle}>
        <div style={progressContainer}>
          <motion.div animate={{ width: `${(step / 5) * 100}%` }} style={progressBar} />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" {...slideVariants}>
              <h2 style={titleStyle}>🕒 Time?</h2>
              <input type="time" style={inputStyle} value={formData.time} onChange={(e) => updateField('time', e.target.value)} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" {...slideVariants}>
              <h2 style={titleStyle}>📅 Din?</h2>
              <select style={inputStyle} value={formData.day} onChange={(e) => updateField('day', e.target.value)}>
                <option value="">Day</option>
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(d => (
                   <option key={d} value={d} style={{color: 'black'}}>{d}</option>
                ))}
              </select>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" {...slideVariants}>
              <h2 style={titleStyle}>🗓️ Week</h2>
              <input type="week" style={inputStyle} value={formData.week} onChange={(e) => updateField('week', e.target.value)} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" {...slideVariants}>
              <h2 style={titleStyle}>🎯 Kya Work Kiya</h2>
              <input type="text" placeholder="Ex: Gym, Study..." style={inputStyle} value={formData.task} onChange={(e) => updateField('task', e.target.value)} />
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" {...slideVariants}>
              <h2 style={titleStyle}>📝 Notes / Info</h2>
              <textarea 
                placeholder="Important details likhein..." 
                style={{...inputStyle, height: '100px', resize: 'none'}} 
                value={formData.notes}
                onChange={(e) => updateField('notes', e.target.value)} 
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={nextStep} style={buttonStyle}>
          {step === 5 ? "Add to Schedule 🚀" : "Next →"}
        </motion.button>
      </motion.div>
    </div>
  );
}

// Styles with Fixes
const containerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'radial-gradient(circle, #2e1065, #000000)', fontFamily: 'sans-serif' };
const cardStyle = { background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', width: '400px', color: 'white' };
const titleStyle = { marginBottom: '20px', fontSize: '24px' };

// Added boxSizing: 'border-box' to ensure padding doesn't break width
const inputStyle = { 
  width: '100%', 
  padding: '15px', 
  marginBottom: '30px', 
  borderRadius: '12px', 
  border: 'none', 
  background: 'rgba(255,255,255,0.1)', 
  color: 'white', 
  fontSize: '16px', 
  outline: 'none',
  boxSizing: 'border-box' // Fix for width matching
};

const buttonStyle = { 
  width: '100%', 
  padding: '15px', 
  borderRadius: '12px', 
  border: 'none', 
  background: 'linear-gradient(90deg, #8b5cf6, #d946ef)', 
  color: 'white', 
  fontWeight: 'bold', 
  fontSize: '18px', 
  cursor: 'pointer',
  boxSizing: 'border-box'
};

const progressContainer = { width: '100%', height: '6px', background: '#333', borderRadius: '10px', marginBottom: '30px', overflow: 'hidden' };
const progressBar = { height: '100%', background: '#d946ef' };