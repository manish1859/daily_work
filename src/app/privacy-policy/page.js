"use client";
import { motion } from 'framer-motion';
import './privacy.css'; // Separate CSS Import

export default function PrivacyPolicy() {
  return (
    <div className="privacy-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="privacy-card p-4 p-md-5"
            >
              <h1 className="privacy-title text-center mb-2">Privacy Policy</h1>
              <p className="last-updated text-center mb-5">Last Updated: December 2023</p>

              <section>
                <h2 className="section-title">1. Introduction</h2>
                <p className="privacy-text">
                  Welcome to ProPlanner. Hum aapki privacy ka pura samman karte hain. Yeh Privacy Policy aapko batati hai ki jab aap hamari website aur schedule planning tool ka istemal karte hain, toh hum aapki information ko kaise handle karte hain. Hamara maqsad aapko ek secure aur transparent experience dena hai.
                </p>
              </section>

              <section>
                <h2 className="section-title">2. Data Collection & Local Storage</h2>
                <p className="privacy-text">
                  Sabse mahatvapoorn baat yeh hai ki ProPlanner ek "Client-Side" application hai. Iska matlab hai ki jo bhi data aap input karte hain (jaise aapka time, tasks, aur notes), wo hamare servers par kabhi nahi jata. 
                  <br /><br />
                  Hum aapka data save karne ke liye browser ki <strong>LocalStorage</strong> technology ka istemal karte hain. Yeh data sirf aapke apne device par rehta hai aur hum ise access nahi kar sakte.
                </p>
              </section>

              <section>
                <h2 className="section-title">3. Google AdSense & Cookies</h2>
                <p className="privacy-text">
                  Hamari website Google AdSense ka istemal karti hai ads dikhane ke liye. Google, ek third-party vendor ke roop mein, cookies ka istemal karta hai taaki wo aapke visits ke aadhar par relevant ads dikha sake. 
                  Aap chahein toh Google ki official website par jakar personalized advertising ko opt-out kar sakte hain.
                </p>
              </section>

              <section>
                <h2 className="section-title">4. Information Security</h2>
                <p className="privacy-text">
                  Halaanki hum koi personal data store nahi karte, phir bhi hum web standards ka palan karte hain taaki aapka browsing experience safe rahe. Hum aapko hamesha suggest karte hain ki apna device secure rakhein.
                </p>
              </section>

              <section>
                <h2 className="section-title">5. Changes to This Policy</h2>
                <p className="privacy-text">
                  Hum samay-samay par is policy ko update kar sakte hain. Jab bhi koi badlav hoga, hum "Last Updated" date ko change kar denge. Hum aapko suggest karte hain ki is page ko periodic check karte rahein.
                </p>
              </section>

              <div className="text-center mt-5">
                <button className="btn btn-outline-info" onClick={() => window.location.href='/contact'}>
                  Contact Us for Queries
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}