"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './blog.css'; // Custom Dark Theme ke liye

const blogData = [
  { id: 1, title: "Mastering Time Management", summary: "Professional techniques for better productivity.", content: "Time management is about simplifying how you work..." },
  { id: 2, title: "Science of Planning", summary: "How writing down tasks increases success.", content: "A daily plan acts as a roadmap for your brain..." }
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