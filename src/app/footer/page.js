"use client";
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row g-4">
          
          {/* 1. Brand Section */}
          <div className="col-12 col-md-4">
            <Link href="/" className="footer-logo mb-3 d-inline-block">ProPlanner ✨</Link>
            <p className="text-secondary pe-md-4" style={{fontSize: '14px', lineHeight: '1.6'}}>
              ProPlanner is your ultimate companion for time management and productivity. Organize your day, track your tasks, and achieve your goals with ease.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="col-6 col-md-2">
            <h5 className="footer-heading">Navigasyon</h5>
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/about" className="footer-link">My Schedule</Link>
            <Link href="/blog" className="footer-link">Insights</Link>
          </div>

          {/* 3. Support & Legal (AdSense ke liye imp) */}
          <div className="col-6 col-md-3">
            <h5 className="footer-heading">Legal</h5>
            <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms & Conditions</Link>
            <Link href="/contact" className="footer-link">Contact Us</Link>
          </div>

          {/* 4. Social Section */}
          <div className="col-12 col-md-3">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-icons">
              <a href="linkedin.com/in/manish-singh-kushwah-15801934b" className="social-icon"><FaLinkedinIn /></a>
              <a href="https://github.com/manish1859" className="social-icon"><FaGithub /></a>
              <a href="https://www.instagram.com/manish_singh_460/" className="social-icon"><FaInstagram /></a>
            </div>
            <p className="mt-3 text-secondary" style={{fontSize: '13px'}}>
              Email: manishsinghkushwah612@gmail.com
            </p>
          </div>

        </div>

        <div className="copyright-bar">
          <p>© {new Date().getFullYear()} Manish. Developed with ❤️ for better productivity.</p>
        </div>
      </div>
    </footer>
  );
}