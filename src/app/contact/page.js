"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './contact.css';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    // Web3Forms Access Key (Aap https://web3forms.com/ se free le sakte hain)
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    
    const result = await response.json();
    if (result.success) {
      setLoading(false);
      setIsSubmitted(true);
      // 5 second baad form wapas lane ke liye (optional)
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  }

  return (
    <div className="contact-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="contact-card p-4 p-md-5"
            >
              <div className="row g-5">
                {/* Left Side: Information */}
                <div className="col-md-5">
                  <h1 className="display-5 fw-bold mb-4" style={{ color: '#8b5cf6' }}>Get in Touch</h1>
                  <p className="text-secondary mb-5">
                    Have questions about ProPlanner? Humse kabhi bhi sampark karein, hum aapki madad ke liye taiyar hain.
                  </p>
                  
                  <div className="mb-4">
                    <div className="info-icon">📧 Email Us</div>
                    <a href='mailto:manishsinghkushwah612@gmail.com' style={{textDecoration:'none',color:'white'}}>
                      manishsinghkushwah612@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <div className="info-icon">📍 Location</div>
                    <p>India (Digital Office)</p>
                  </div>
                </div>

                {/* Right Side: Form or Success Message */}
                <div className="col-md-7 d-flex align-items-center">
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form 
                        key="contact-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="w-100"
                      >
                        <div className="mb-3">
                          <label className="form-label">Full Name</label>
                          <input name="name" type="text" className="form-control contact-input" placeholder="Your Name" required />
                        </div>
                        
                        <div className="mb-3">
                          <label className="form-label">Email Address</label>
                          <input name="email" type="email" className="form-control contact-input" placeholder="name@example.com" required />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Message</label>
                          <textarea name="message" className="form-control contact-input" rows="4" placeholder="How can we help?" required></textarea>
                        </div>

                        <motion.button 
                          whileTap={{ scale: 0.95 }}
                          type="submit" 
                          className="submit-btn w-100 mt-3"
                          disabled={loading}
                        >
                          {loading ? "Sending..." : "Send Message 🚀"}
                        </motion.button>
                      </motion.form>
                    ) : (
                      <motion.div 
                        key="success-message"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center w-100 p-4"
                        style={{ border: '1px dashed #8b5cf6', borderRadius: '15px' }}
                      >
                        <h2 style={{ color: '#d946ef' }}>Success! ✨</h2>
                        <p className="text-light mt-3">
                          Aapka message <strong>manishsinghkushwah612@gmail.com</strong> par bhej diya gaya hai. 
                          Hum jald hi aapse sampark karenge.
                        </p>
                        <button 
                          className="btn btn-sm btn-outline-info mt-3" 
                          onClick={() => setIsSubmitted(false)}
                        >
                          Send another message
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}