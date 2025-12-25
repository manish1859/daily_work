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

  try {
    const formData = new FormData(event.target);
    formData.append("access_key", "5f692161-b167-44c2-9f21-a25eb0ec5ceb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true);




      // ✅ Auto reset success state
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      event.target.reset(); // form clear
    } else {
      alert("Something went wrong. Please try again ❌");
    }
  } catch (error) {
    alert("Network error. Please try again later ❌");
  } finally {
    setLoading(false);
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
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 }}
  >
    <h1 className="display-5 fw-bold mb-4 gradient-text">Get in Touch</h1>
    <p className="text-secondary mb-5">
      Have questions about ProPlanner? Humse kabhi bhi sampark karein, hum aapki madad ke liye taiyar hain.
    </p>
  </motion.div>

  <div className="contact-info-stack">
    {/* Email Card */}
    <motion.div className="info-item-card" whileHover={{ x: 10 }}>
      <div className="icon-wrapper">📧</div>
      <div className="info-content">
        <label>Email Us</label>
        <a href='mailto:manishsinghkushwah612@gmail.com'>
          manishsinghkushwah612@gmail.com
        </a>
      </div>
    </motion.div>

    {/* Location Card */}
    <motion.div className="info-item-card" whileHover={{ x: 10 }}>
      <div className="icon-wrapper">📍</div>
      <div className="info-content">
        <label>Location</label>
        <p>Jaipur, India (Digital Office)</p>
      </div>
    </motion.div>

    {/* Response Time Card */}
    <motion.div className="info-item-card" whileHover={{ x: 10 }}>
      <div className="icon-wrapper">⚡</div>
      <div className="info-content">
        <label>Response Time</label>
        <p>Within 24 Hours</p>
      </div>
    </motion.div>
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
                          Thanks for contacting ProPlanner. We’ve successfully received your details and one of our experts will contact you shortly.
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