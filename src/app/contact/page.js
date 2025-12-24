"use client";
import { motion } from 'framer-motion';
import './contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We will get back to you soon.");
  };

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
                    <a href='mailto:manishsinghkushwah612@gmail.com' style={{textDecoration:'none',color:'white'}}>manishsinghkushwah612@gmail.com</a>
                  </div>
                  
                  <div>
                    <div className="info-icon">📍 Location</div>
                    <p>India (Digital Office)</p>
                  </div>
                </div>

                <div className="col-md-7">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control contact-input" placeholder="Your Name" required />
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control contact-input" placeholder="name@example.com" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea className="form-control contact-input" rows="4" placeholder="How can we help?" required></textarea>
                    </div>

                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      type="submit" 
                      className="submit-btn w-100 mt-3"
                    >
                      Send Message 🚀
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}