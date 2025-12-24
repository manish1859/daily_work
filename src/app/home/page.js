"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import './home.css'; // CSS File Import

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
    const fields = ['time', 'day', 'week', 'task', 'notes'];
    const currentField = fields[step - 1];
    
    if (!formData[currentField] || formData[currentField].trim() === "") {
      alert("Please fill the input"); 
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
    <div className="home-container">
      <motion.div layout className="form-card">
        {/* Progress Bar */}
        <div className="progress-container">
          <motion.div 
            className="progress-bar"
            animate={{ width: `${(step / 5) * 100}%` }} 
          />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" {...slideVariants} className="step-content">
              <h2 className="step-title">🕒 Time?</h2>
              <input type="time" className="step-input" value={formData.time} onChange={(e) => updateField('time', e.target.value)} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" {...slideVariants} className="step-content">
              <h2 className="step-title">📅 Din?</h2>
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
              <h2 className="step-title">🗓️ Week</h2>
              <input type="week" className="step-input" value={formData.week} onChange={(e) => updateField('week', e.target.value)} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" {...slideVariants} className="step-content">
              <h2 className="step-title">🎯 Kya Work Kiya</h2>
              <input type="text" placeholder="Ex: Gym, Study..." className="step-input" value={formData.task} onChange={(e) => updateField('task', e.target.value)} />
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" {...slideVariants} className="step-content">
              <h2 className="step-title">📝 Notes / Info</h2>
              <textarea 
                placeholder="Important details likhein..." 
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
          {step === 5 ? "Add to Schedule 🚀" : "Next →"}
        </motion.button>
      </motion.div>
    </div>
  );
}