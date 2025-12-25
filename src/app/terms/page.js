"use client";
import { motion } from 'framer-motion';
import './terms.css';

export default function TermsAndConditions() {
  return (
    <div className="terms-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="terms-card p-4 p-md-5"
            >
              <header className="text-center mb-5">
                <h1 className="terms-title mb-2">Terms & Conditions</h1>
                <p className="text-muted">Last Updated: December 25, 2025</p>
                <div style={{height: '2px', background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)', width: '60%', margin: '20px auto'}}></div>
              </header>

              <section>
                <h2 className="terms-subtitle">1. Agreement to Terms</h2>
                <p className="terms-text">
                  Welcome to <span className="highlight">ProPlanner</span>. By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you are prohibited from using this platform.
                </p>
              </section>

              <section>
                <h2 className="terms-subtitle">2. Intellectual Property Rights</h2>
                <p className="terms-text">
                  Unless otherwise stated, ProPlanner and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access this from ProPlanner for your own personal use subjected to restrictions set in these terms and conditions. You must not republish, sell, rent, or sub-license material from this site.
                </p>
              </section>

              <section>
                <h2 className="terms-subtitle">3. User Data and Local Storage</h2>
                <p className="terms-text">
                  Our service allows you to input and store schedule-related data. You acknowledge that this data is stored using <span className="highlight">Browser LocalStorage</span>. While this ensures privacy as the data stays on your device, you are responsible for maintaining the security of your device. ProPlanner is not responsible for any data loss occurring due to browser clearing, device theft, or hardware failure.
                </p>
              </section>

              <section>
                <h2 className="terms-subtitle">4. Acceptable Use</h2>
                <p className="terms-text">
                  You agree not to use the website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of ProPlanner. You must not use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of any spyware, computer virus, or other malicious software.
                </p>
              </section>

              <section>
                <h2 className="terms-subtitle">5. Disclaimer of Warranties</h2>
                <p className="terms-text">
                  This website is provided "as is," with all faults, and ProPlanner expresses no representations or warranties, of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you. We do not guarantee the accuracy or reliability of the tool for critical time-sensitive operations.
                </p>
              </section>

              <section>
                <h2 className="terms-subtitle">6. Limitation of Liability</h2>
                <p className="terms-text">
                  In no event shall ProPlanner, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. ProPlanner shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
                </p>
              </section>

              <section>
                <h2 className="terms-subtitle">7. Governing Law</h2>
                <p className="terms-text">
                  These terms will be governed by and interpreted in accordance with the laws of <span className="highlight">India</span>, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
                </p>
              </section>

              <div className="text-center mt-5 pt-4 border-top border-secondary border-opacity-10">
                <p className="mb-4 small">If you require any more information or have any questions about our terms, please feel free to contact us.</p>
                <button 
                  className="btn btn-primary px-5 py-2 fw-bold"
                  style={{ background: 'linear-gradient(90deg, #8b5cf6, #d946ef)', border: 'none', borderRadius: '8px' }}
                  onClick={() => window.location.href='/contact'}
                >
                  Accept & Contact Support
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}