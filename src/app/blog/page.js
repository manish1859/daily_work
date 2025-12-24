"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 300-500 Words Articles for AdSense Approval
const blogData = [
  {
    id: 1,
    title: "Mastering Time: 5 Essential Tips for Productivity",
    summary: "Professional time management techniques jo aapke kaam karne ke tarike ko badal dengi.",
    content: `Time management is not just about squeezing more tasks into your day; it is about simplifying how you work, doing things faster, and relieving stress. In the modern digital age, distractions are everywhere, making it harder than ever to stay focused on what truly matters. To master your time, you must first understand the value of prioritization. 

    The first tip is to use the Eisenhower Matrix. This method helps you categorize tasks into four quadrants: Urgent and Important, Important but Not Urgent, Urgent but Not Important, and Neither. By focusing on the 'Important but Not Urgent' tasks, you prevent future crises. The second strategy is 'Eat the Frog'—tackle your most difficult and daunting task first thing in the morning when your brain is freshest. 

    Thirdly, implement the Pomodoro Technique. Work for 25 minutes with intense focus, followed by a 5-minute break. This keeps your mind agile and prevents burnout. Fourth, learn the power of saying 'No'. You cannot attend every meeting or help every colleague without sacrificing your own productivity. Lastly, use digital tools like ProPlanner to visualize your schedule. Seeing your day mapped out creates a psychological commitment to follow through. When you manage your time effectively, you gain more than just productivity—you gain the freedom to enjoy your life outside of work.`
  },
  {
    id: 2,
    title: "The Science of Daily Planning and Success",
    summary: "Jaaniye kyun ek likha hua schedule aapki success rate ko 42% tak badha sakta hai.",
    content: `Why do some people achieve so much more than others? The secret often lies in a simple habit: daily planning. A daily plan acts as a roadmap for your brain. Research conducted by psychologists shows that the act of writing down your goals and tasks significantly increases the likelihood of completing them. This is due to a phenomenon where the brain treats a written task as a commitment rather than just a fleeting thought.

    Planning reduces 'decision fatigue'. Every morning, we have a limited amount of willpower. If you spend your energy deciding what to do next, you have less energy left for the actual work. A structured schedule, like the one provided by our Daily Schedule Template, removes this friction. It allows you to move seamlessly from one task to another with momentum. 

    Furthermore, planning helps in habit formation. When you allocate specific time slots for activities like exercise, reading, or deep work, you are training your brain to enter a 'flow state' at those times. Over time, these actions become automatic. Consistency is the foundation of high performance. By reviewing your previous day's schedule and planning the next, you create a feedback loop of continuous improvement. Success is rarely the result of a single grand gesture; it is the accumulation of small, well-planned daily wins that eventually lead to massive achievements.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div style={pageContainer}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={headerTitle}
      >
        Productivity Hub & Insights
      </motion.h1>
      
      <div style={blogGrid}>
        {blogData.map((post) => (
          <motion.div 
            whileHover={{ y: -10, borderColor: '#d946ef' }} 
            key={post.id} 
            style={cardStyle}
          >
            <h2 style={cardTitle}>{post.title}</h2>
            <p style={cardSummary}>{post.summary}</p>
            <button onClick={() => setSelectedPost(post)} style={readMoreBtn}>
              Read Full Article 
            </button>
          </motion.div>
        ))}
      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            style={modalOverlay}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 50 }}
              style={modalContent}
            >
              <button onClick={() => setSelectedPost(null)} style={closeBtn}>✕ Close</button>
              <h1 style={modalTitle}>{selectedPost.title}</h1>
              <div style={articleBody}>{selectedPost.content}</div>
              
              <div style={modalFooter}>
                <button onClick={() => setSelectedPost(null)} style={backBtn}>Go Back</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Dark Theme Styles (Matched with Privacy Policy) ---

const pageContainer = { 
  padding: '80px 10%', 
  background: 'radial-gradient(circle, #1a1a2e, #0f0f1b)', 
  minHeight: '100vh',
  fontFamily: 'sans-serif'
};

const headerTitle = { 
  textAlign: 'center', 
  color: '#8b5cf6', 
  fontSize: '42px', 
  marginBottom: '50px',
  textTransform: 'uppercase',
  letterSpacing: '2px'
};

const blogGrid = { 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
  gap: '30px',
  maxWidth: '1200px',
  margin: '0 auto'
};

const cardStyle = { 
  background: 'rgba(255, 255, 255, 0.03)', 
  padding: '35px', 
  borderRadius: '24px', 
  border: '1px solid rgba(139, 92, 246, 0.2)', 
  backdropFilter: 'blur(12px)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const cardTitle = { color: '#e2e8f0', fontSize: '24px', marginBottom: '15px' };
const cardSummary = { color: '#94a3b8', lineHeight: '1.6', marginBottom: '25px' };

const readMoreBtn = { 
  background: 'linear-gradient(90deg, #8b5cf6, #d946ef)', 
  color: '#fff', 
  border: 'none', 
  padding: '12px 25px', 
  borderRadius: '12px', 
  cursor: 'pointer', 
  fontWeight: 'bold',
  transition: '0.3s'
};

const modalOverlay = { 
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
  background: 'rgba(0,0,0,0.85)', 
  display: 'flex', justifyContent: 'center', alignItems: 'center', 
  zIndex: 2000, padding: '20px',
  backdropFilter: 'blur(8px)'
};

const modalContent = { 
  background: '#161625', 
  padding: '50px', 
  borderRadius: '28px', 
  maxWidth: '900px', 
  width: '100%', 
  maxHeight: '85vh', 
  overflowY: 'auto', 
  position: 'relative',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
};

const closeBtn = { 
  position: 'absolute', top: '25px', right: '25px', 
  background: '#ff4757', color: '#fff', 
  border: 'none', padding: '8px 15px', borderRadius: '8px', 
  cursor: 'pointer', fontWeight: 'bold' 
};

const modalTitle = { color: '#8b5cf6', fontSize: '32px', marginBottom: '25px', borderBottom: '1px solid #333', paddingBottom: '15px' };
const articleBody = { fontSize: '18px', lineHeight: '1.9', color: '#cbd5e1', textAlign: 'justify', whiteSpace: 'pre-line' };

const modalFooter = { marginTop: '40px', borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'right' };
const backBtn = { background: 'transparent', color: '#94a3b8', border: '1px solid #444', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' };