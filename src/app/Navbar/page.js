"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav style={navStyle}>
      {/* Logo with Animation */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="/" style={logoStyle}>ProPlanner ✨</Link>
      </motion.div>

      {/* Navigation Links */}
      <div style={linksStyle}>
        {[
          { name: 'Home', path: '/' },
          { name: 'My Schedule', path: '/about' },
          { name: 'Blog', path: '/blog' },
          { name: 'Privacy', path: '/privacy-policy' }
        ].map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -2, color: '#d946ef' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={link.path} style={linkItem}>
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}

// --- Dark Theme Styles ---

const navStyle = { 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center',
  padding: '15px 10%', 
  background: 'rgba(15, 15, 27, 0.8)', // Semi-transparent Dark
  backdropFilter: 'blur(10px)', // Glassmorphism effect
  boxShadow: '0 4px 20px rgba(0,0,0,0.5)', 
  borderBottom: '1px solid rgba(139, 92, 246, 0.2)', // Purple border
  position: 'sticky', 
  top: 0, 
  zIndex: 1000 
};

const logoStyle = { 
  fontSize: '26px', 
  fontWeight: '900', 
  textDecoration: 'none', 
  background: 'linear-gradient(90deg, #8b5cf6, #d946ef)', // Gradient Logo
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '1px'
};

const linksStyle = { 
  display: 'flex', 
  gap: '35px',
  alignItems: 'center'
};

const linkItem = { 
  textDecoration: 'none', 
  color: '#e2e8f0',
  fontWeight: '600', 
  fontSize: '15px',
  letterSpacing: '0.5px',
  transition: 'color 0.3s ease'
};