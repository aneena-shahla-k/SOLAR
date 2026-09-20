import React from "react";
import { motion } from "framer-motion";
import "./FinalCTASection.css";

export default function FinalCTASection() {
  const whatsappNumber = "+91 98765 43210";
  const whatsappClean = "919876543210";
  const emailAddress = "hello@solarzen.com";

  const defaultMessage =
    "Hi SolarZen, I want to discuss a new Solar / EV Charging project.";
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    defaultMessage
  )}`;
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    "New Project Enquiry - Solar / EV Charging"
  )}&body=${encodeURIComponent(
    "Hi SolarZen Team,\n\nI am looking for energy solutions for:\n- Property Type:\n- Location:\n- Requirements:\n\nPlease get in touch."
  )}`;

  return (
    <section className="final-cta-section">
      <div className="final-cta-container">

        {/* HERO CLOSING PANEL */}
        <motion.div
          className="final-cta-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Background Ambient Glow & Sweep */}
          <div className="final-cta-glow" />
          <div className="final-cta-grid-lines" />

          {/* Section Tag */}
          <div className="final-cta-label">
            <span className="final-cta-label-line" />
            <span>11 {"//"} GET STARTED DIRECTLY</span>
          </div>

          {/* Headline */}
          <h2>
            Ready to build your
            <br />
            <span>next energy project?</span>
          </h2>

          {/* Body Copy */}
          <p className="final-cta-body">
            Solar for your home or business. EV charging for your property, fleet, 
            or commercial site. Zero friction, direct engineering access.
          </p>

          {/* CTA BUTTONS (WHATSAPP FIRST) */}
          <div className="final-cta-actions">
            
            {/* Primary Action: WhatsApp */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-btn final-cta-btn--primary"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="cta-icon-wrap">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <span>WhatsApp Us</span>
              <span className="cta-arrow">↗</span>
            </motion.a>

            {/* Secondary Action: Email Enquiry */}
            <motion.a
              href={mailtoUrl}
              className="final-cta-btn final-cta-btn--secondary"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="cta-icon-wrap">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span>Send an Enquiry</span>
            </motion.a>

          </div>

          {/* DIRECT CONTACT SPEC BAR */}
          <div className="final-cta-contact-bar">
            
            <a
              href={`https://wa.me/${whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-label">WHATSAPP DIRECT</span>
              <span className="contact-val">{whatsappNumber}</span>
            </a>

            <div className="contact-divider" />

            <a href={`mailto:${emailAddress}`} className="contact-item">
              <span className="contact-label">OFFICIAL EMAIL</span>
              <span className="contact-val">{emailAddress}</span>
            </a>

            <div className="contact-divider" />

            <div className="contact-item">
              <span className="contact-label">TURNAROUND TIME</span>
              <span className="contact-val contact-val--status">
                <span className="status-live-dot" /> Under 2 Hours
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}