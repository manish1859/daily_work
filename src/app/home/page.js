"use client";
import { useState, useEffect } from 'react'; // useEffect add kiya
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import './home.css';

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    time: '',
    day: '',
    task: '',
    notes: '', 
    id: Date.now()
  });

  // --- Auto-set Current Time on Load ---
  useEffect(() => {
    const now = new Date();
    // HH:mm format mein time nikalne ke liye
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    
    setFormData(prev => ({ ...prev, time: currentTime }));
  }, []); 

  const nextStep = () => {
    const fields = ['time', 'day', 'task', 'notes'];
    const currentField = fields[step - 1];
    
    if (!formData[currentField] || formData[currentField].trim() === "") {
      alert("Please fill the input"); 
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

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="home-container">
      <motion.div layout className="form-card">
        <div className="progress-container">
          <motion.div 
            className="progress-bar"
            animate={{ width: `${(step / 4) * 100}%` }} 
          />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" {...slideVariants} className="step-content">
              <h2 className="step-title">🕒 Current Time</h2>
              <input 
                type="time" 
                className="step-input" 
                style={{ colorScheme: 'dark' }} // Mobile responsive fix
                value={formData.time} 
                onChange={(e) => updateField('time', e.target.value)} 
              />
              <p style={{fontSize: '12px', color: '#94a3b8', marginTop: '-20px', marginBottom: '20px'}}>
                You can change the time if needed.
              </p>
            </motion.div>
          )}

          {/* ... Baaki steps (2, 3, 4) same rahenge ... */}
          {step === 2 && (
            <motion.div key="step2" {...slideVariants} className="step-content">
              <h2 className="step-title">📅 Select Day</h2>
              <select className="step-input" value={formData.day} onChange={(e) => updateField('day', e.target.value)}>
                <option value="">Day</option>
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(d => (
                   <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" {...slideVariants} className="step-content">
              <h2 className="step-title">🎯 Task</h2>
              <input type="text" placeholder="Ex: Gym, Study..." className="step-input" value={formData.task} onChange={(e) => updateField('task', e.target.value)} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" {...slideVariants} className="step-content">
              <h2 className="step-title">📝 Notes</h2>
              <textarea 
                placeholder="Important details..." 
                className="step-input step-textarea" 
                value={formData.notes}
                onChange={(e) => updateField('notes', e.target.value)} 
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }} 
          onClick={nextStep} 
          className="action-button"
        >
          {step === 4 ? "Add to Schedule 🚀" : "Next →"}
        </motion.button>
      </motion.div>
    </div>
  );
}