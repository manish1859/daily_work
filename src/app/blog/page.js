"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './blog.css'; // Custom Dark Theme ke liye

const blogData = [
  {
    id: 1,
    title: "Mastering Time Management: The Ultimate Guide to Professional Productivity",
    summary: "Seekhein kaise advanced techniques aur psychological hacks se aap apne din ko 2x productive bana sakte hain.",
    content: `
      Time management is not just a skill; it is a fundamental pillar of professional and personal success. In an era dominated by constant digital distractions and demanding work schedules, the ability to govern your own time is what separates high-achievers from the rest. This guide explores scientifically proven methods to help you master your hours and reclaim your focus.

      ### The Psychology of Time Perception
      Before diving into tools, it’s essential to understand that time management is actually 'attention management.' Our brains are wired to prioritize immediate rewards over long-term goals. To counter this, professionals use the **Eisenhower Matrix**, a framework that categorizes tasks into four quadrants: 
      1. Urgent and Important (Do immediately).
      2. Important but Not Urgent (Schedule for later).
      3. Urgent but Not Important (Delegate if possible).
      4. Neither (Eliminate).
      By focusing on the second quadrant, you move from being 'reactive' to 'proactive.'

      ### Professional Productivity Frameworks
      1. **The Pomodoro Technique (Advanced Version):** While the standard 25-minute sprint works for many, high-level deep work often requires 90-minute blocks (the Ultradian Rhythm). Focus intensely for 90 minutes and then take a 15-minute complete disconnect break.
      2. **Time Blocking:** Instead of a simple to-do list, assign every hour of your day a specific task. This creates a 'fixed-cost' mindset, where you realize that spending two hours on emails means losing two hours of strategic planning.
      3. **The 'Eat the Frog' Method:** Mark Twain famously said that if you eat a live frog first thing in the morning, nothing worse will happen to you the rest of the day. In productivity terms, this means tackling your most complex, dreaded task before checking a single email.

      ### Tools and Digital Hygiene
      In today’s world, your smartphone is your biggest competitor. Digital hygiene involves:
      * Turning off all non-human notifications.
      * Using 'Focus Modes' during work hours.
      * Auditing your screen time weekly to identify 'time leaks.'

      ### Conclusion
      Mastering time is a continuous journey of self-discipline. It’s not about doing more; it’s about doing what matters most with absolute clarity. Start small, be consistent, and use tools like ProPlanner to visualize your progress.
    `
  },
  {
    id: 2,
    title: "The Science of Planning: Why a Written Schedule Guarantees Success",
    summary: "Jaaniye psychological studies ke aadhar par kyun likha hua schedule aapke dimag ki efficiency ko 40% tak badha deta hai.",
    content: `
      Planning is often viewed as a mundane chore, but neuroscience tells a different story. The act of planning is actually the first step of execution. When you map out your day, you are not just listing tasks; you are building a neural blueprint for your brain to follow.

      ### The 'Zeigarnik Effect' and Mental Clarity
      Psychologists have identified a phenomenon called the **Zeigarnik Effect**, which states that our brains hold onto unfinished tasks with a high degree of tension. This is why you feel anxious when you have a long, unorganized list of things to do. By writing a structured schedule, you signal to your brain that the plan is in place. This releases 'mental bandwidth,' allowing you to focus 100% on the task at hand without the nagging feeling of forgetting something else.

      ### Why Handwriting or Digital Planning Works
      When you interact with a planner (like ProPlanner), you engage in 'encoding.' This process enhances your memory and commitment. A study from the University of California found that the commitment to a written plan increases the success rate by over 42%. 
      * **Clarity of Intent:** Ambiguity is the mother of procrastination. A written plan removes the 'What should I do now?' dilemma.
      * **Objective Evaluation:** At the end of the day, a written schedule allows you to see exactly where your time went, helping you optimize the next day.

      ### Designing the Perfect Daily Routine
      A professional schedule should follow your biological clock (Circadian Rhythm):
      * **The Morning (Peak Energy):** Use this for analytical work, problem-solving, and deep focus.
      * **The Afternoon (The Slump):** Use this for administrative tasks, meetings, and emails.
      * **The Evening (Reflection):** Review your achievements and plan the next 24 hours. This practice ensures you wake up with 'Intentionality' rather than 'Confusion.'

      ### The Role of Flexibility
      A common mistake is creating a rigid schedule that breaks at the first sign of an emergency. Professional planners use **'Buffer Blocks.'** Leave 15-20% of your day unplanned to handle unexpected calls or tasks. This prevents the 'all-or-nothing' failure where one delay ruins the entire day's motivation.

      ### Final Thoughts
      Success is the sum of small efforts, repeated day in and day out. A written plan is the bridge between your goals and their accomplishment. Without a plan, you are a passenger in your own life; with one, you are the pilot.
    `
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="blog-wrapper py-5">
      <div className="container">
        <motion.h1 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-center mb-5 blog-main-title"
        >
          Productivity Hub
        </motion.h1>
        
        {/* Bootstrap Responsive Grid */}
        <div className="row g-4">
          {blogData.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4">
              <motion.div whileHover={{ y: -10 }} className="h-100 blog-card-custom">
                <div className="card-body p-4 d-flex flex-column h-100">
                  <h3 className="h4 mb-3">{post.title}</h3>
                  <p className="text-secondary flex-grow-1">{post.summary}</p>
                  <button 
                    onClick={() => setSelectedPost(post)} 
                    className="btn btn-primary-custom mt-3 w-100"
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Custom Logic with Bootstrap Styling */}
      <AnimatePresence>
        {selectedPost && (
          <div className="custom-modal-overlay" onClick={() => setSelectedPost(null)}>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="custom-modal-content p-4 p-md-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="m-0 h3 text-purple">{selectedPost.title}</h2>
                <button className="btn-close btn-close-white" onClick={() => setSelectedPost(null)}></button>
              </div>
              <div className="article-text text-light">
                {selectedPost.content}
              </div>
              <div className="text-end mt-4">
                <button className="btn btn-outline-secondary" onClick={() => setSelectedPost(null)}>Close</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}