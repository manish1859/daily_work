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
              <p className="last-updated text-center mb-5">Last Updated: December 25, 2025</p>

              <section>
                <h2 className="section-title">1. Introduction</h2>
                <p className="privacy-text">
                  Welcome to <strong>ProPlanner</strong>. We are committed to protecting your personal information and your right to privacy. This Privacy Policy document outlines the types of information we collect, how we safeguard it, and your rights regarding your data when you interact with our platform. Our operations are designed to be transparent and fully compliant with global digital privacy standards.
                </p>
              </section>

              <section>
                <h2 className="section-title">2. Data Collection & Local Storage</h2>
                <p className="privacy-text">
                  ProPlanner is engineered as a <strong>Privacy-First, Client-Side Application</strong>. It is imperative to understand that all data you input—including time slots, task descriptions, and personal notes—is <strong>never transmitted to or stored on our servers</strong>.
                  <br /><br />
                  We utilize browser-based <strong>LocalStorage</strong> technology to save your schedule directly on your local device. This ensures that your data remains under your exclusive control and is inaccessible to us or any third-party entities. You may permanently erase your data at any time by clearing your browser cache.
                </p>
              </section>

              <section>
                <h2 className="section-title">3. Google AdSense & Third-Party Cookies</h2>
                <p className="privacy-text">
                  To maintain our free services, we utilize <strong>Google AdSense</strong> for advertisement delivery. Google, as a third-party vendor, uses cookies (including the DART cookie) to serve ads based on your visits to our site and other websites on the internet.
                  <br /><br />
                  These cookies allow for a more personalized advertising experience. You may choose to opt-out of personalized advertising by visiting the official <strong>Google Ads Settings</strong> page.
                </p>
              </section>

              <section>
                <h2 className="section-title">4. Information Security and Log Files</h2>
                <p className="privacy-text">
                  ProPlanner follows standard professional procedures for using log files. These files log visitors for analytical purposes, including IP addresses, browser types, Internet Service Providers (ISP), and date/time stamps. This data is not linked to any personally identifiable information and is used solely to optimize user experience and monitor site performance.
                </p>
              </section>

              <section>
                <h2 className="section-title">5. Policy Compliance and Updates</h2>
                <p className="privacy-text">
                  We reserve the right to modify this Privacy Policy at any time to reflect changes in our technology or legal requirements. Any updates will be evidenced by the "Last Updated" date at the top of this page. We encourage users to review this policy periodically to remain informed about our data protection practices.
                </p>
              </section>

              <div className="text-center mt-5">
                <button className="btn btn-outline-info px-4 py-2" onClick={() => window.location.href='/contact'}>
                  Contact Legal Support
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}