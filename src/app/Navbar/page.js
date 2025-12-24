"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css'; // CSS file import

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navlinks Array
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'My Schedule', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Privacy', path: '/privacy-policy' }
  ];

  return (
    <nav className="nav-container">
      {/* 1. Logo Section */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/" className="logo">ProPlanner ✨</Link>
      </motion.div>

      {/* 2. Desktop Links (Laptop/PC par dikhega) */}
      <div className="desktop-links">
        {navLinks.map((link, index) => (
          <motion.div 
            key={index} 
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={link.path} className="link-item">
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* 3. Mobile Toggle Button (Sirf Mobile par dikhega) */}
      <div className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar" style={{ 
          transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' 
        }}></div>
        <div className="bar" style={{ 
          opacity: isOpen ? 0 : 1 
        }}></div>
        <div className="bar" style={{ 
          transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' 
        }}></div>
      </div>

      {/* 4. Mobile Drawer (Toggle hone par khulne wala menu) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-drawer"
          >
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.path} 
                className="mobile-link-item"
                onClick={() => setIsOpen(false)} // Link click hote hi menu band
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}