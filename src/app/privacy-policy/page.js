"use client";
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div style={containerStyle}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        style={contentBox}
      >
        <h1 style={titleStyle}>Privacy Policy</h1>
        <p style={lastUpdated}>Last Updated: December 2023</p>

        <section style={sectionStyle}>
          <h2 style={subTitle}>1. Introduction</h2>
          <p style={textStyle}>
            Welcome to ProPlanner. Hum aapki privacy ka pura samman karte hain. Yeh Privacy Policy aapko batati hai ki jab aap hamari website aur schedule planning tool ka istemal karte hain, toh hum aapki information ko kaise handle karte hain. Hamara maqsad aapko ek secure aur transparent experience dena hai.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subTitle}>2. Data Collection & Local Storage</h2>
          <p style={textStyle}>
            Sabse mahatvapoorn baat yeh hai ki ProPlanner ek "Client-Side" application hai. Iska matlab hai ki jo bhi data aap input karte hain (jaise aapka time, tasks, aur notes), wo hamare servers par kabhi nahi jata. 
            <br /><br />
            Hum aapka data save karne ke liye browser ki <strong>LocalStorage</strong> technology ka istemal karte hain. Yeh data sirf aapke apne device par rehta hai aur hum ise access nahi kar sakte. Aap jab chahein "Reset All" button dabakar apna pura data turant delete kar sakte hain.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subTitle}>3. Google AdSense & Cookies</h2>
          <p style={textStyle}>
            Hamari website Google AdSense ka istemal karti hai ads dikhane ke liye. Google, ek third-party vendor ke roop mein, cookies ka istemal karta hai taaki wo aapke visits ke aadhar par relevant ads dikha sake. 
            <br /><br />
            Google’s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Aap chahein toh Google ki official website par jakar personalized advertising ko opt-out kar sakte hain.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subTitle}>4. Information Security</h2>
          <p style={textStyle}>
            Halaanki hum koi personal data store nahi karte, phir bhi hum web standards ka palan karte hain taaki aapka browsing experience safe rahe. Hum aapko hamesha suggest karte hain ki apna device secure rakhein kyunki aapka schedule data aapke browser mein hi local save rehta hai.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subTitle}>5. External Links</h2>
          <p style={textStyle}>
            Hamare blog section mein dusri websites ke links ho sakte hain. Hum un websites ki privacy practices ke liye zimmedar nahi hain. Kisi bhi external link par click karne se pehle unki privacy policy zaroor check karein.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subTitle}>6. Changes to This Policy</h2>
          <p style={textStyle}>
            Hum samay-samay par is policy ko update kar sakte hain. Jab bhi koi badlav hoga, hum "Last Updated" date ko change kar denge. Hum aapko suggest karte hain ki is page ko periodic check karte rahein taaki aap update rahein.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subTitle}>7. Contact Us</h2>
          <p style={textStyle}>
            Agar aapke paas is Privacy Policy ko lekar koi sawal hai, toh aap humse hamare Contact Us page ke zariye jud sakte hain.
          </p>
        </section>
      </motion.div>
    </div>
  );
}

// --- Dark Theme Styles ---

const containerStyle = {
  minHeight: '100vh',
  background: 'radial-gradient(circle, #1a1a2e, #0f0f1b)', // Deep Dark Blue/Black
  padding: '80px 20px',
  color: '#e2e8f0',
  fontFamily: 'sans-serif',
  lineHeight: '1.6'
};

const contentBox = {
  maxWidth: '800px',
  margin: '0 auto',
  background: 'rgba(255, 255, 255, 0.03)',
  padding: '40px',
  borderRadius: '24px',
  border: '1px solid rgba(139, 92, 246, 0.2)', // Halka Purple Border
  backdropFilter: 'blur(10px)',
  boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
};

const titleStyle = {
  fontSize: '36px',
  color: '#8b5cf6', // Main Purple Color
  textAlign: 'center',
  marginBottom: '10px'
};

const lastUpdated = {
  textAlign: 'center',
  fontSize: '14px',
  color: '#94a3b8',
  marginBottom: '40px'
};

const sectionStyle = {
  marginBottom: '30px'
};

const subTitle = {
  fontSize: '22px',
  color: '#d946ef', // Pinkish Purple for contrast
  marginBottom: '12px',
  borderLeft: '4px solid #8b5cf6',
  paddingLeft: '15px'
};

const textStyle = {
  fontSize: '16px',
  color: '#cbd5e1',
  textAlign: 'justify'
};