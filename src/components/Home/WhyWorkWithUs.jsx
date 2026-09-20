import React from "react";
import { motion } from "framer-motion";
import "./WhyWorkWithUs.css";

const capabilities = [
  {
    id: "01",
    proofLabel: "HARDWARE AGNOSTIC",
    title: "MULTI-BRAND SOURCING",
    desc: "Direct access to certified solar and EV hardware across leading Tier-1 manufacturers.",
    stat: "10+ Global OEMs",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    id: "02",
    proofLabel: "SCALE AGILITY",
    title: "RESIDENTIAL + COMMERCIAL",
    desc: "Engineered systems tailored for individual rooftops up to high-load enterprise sites.",
    stat: "3kW to 500kW+",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/>
        <path d="M5 21V7l8-4v18"/>
        <path d="M19 21V11l-6-4"/>
        <path d="M9 9h1"/>
        <path d="M9 13h1"/>
        <path d="M9 17h1"/>
      </svg>
    ),
  },
  {
    id: "03",
    proofLabel: "FLEET READY",
    title: "2W + 4W CHARGING",
    desc: "Full spectrum deployment handling both low-footprint 2W units and high-duty 4W fast chargers.",
    stat: "AC Level 2 & DC Fast",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    id: "04",
    proofLabel: "END-TO-END",
    title: "INSTALLATION SUPPORT",
    desc: "Turnkey ownership encompassing site feasibility, liaisoning, commissioning, and warranty support.",
    stat: "Single Point Contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    id: "05",
    proofLabel: "VERIFIED PARTNER",
    title: "RENEW RESELLER",
    desc: "Official reseller relationship offering genuine ReNew high-efficiency modules and warranties.",
    stat: "Authorized Tier-1",
    isHighlighted: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyWorkWithUs() {
  return (
    <section className="why-us-section">
      <div className="why-us-container">

        {/* HEADER */}
        <motion.div
          className="why-us-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="section-number">
            09 <span>{"//"} CAPABILITY PROOF</span>
          </div>

          <h2>
            Concrete capabilities.
            <br />
            <span>Zero exaggerated claims.</span>
          </h2>

          <p>
            We eliminate ambiguity. Every project is backed by verified supplier networks,
            engineered sizing, and direct operational responsibility.
          </p>
        </motion.div>

        {/* 5 CAPABILITY CARDS */}
        <motion.div
          className="why-us-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {capabilities.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`why-us-card ${item.isHighlighted ? "why-us-card--highlighted" : ""}`}
            >
              <div className="why-card-header">
                <span className="why-proof-badge">
                  <span className="proof-dot" />
                  {item.proofLabel}
                </span>
                <span className="why-index">{item.id}</span>
              </div>

              <div className="why-icon-wrap">
                {item.icon}
              </div>

              <div className="why-card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <div className="why-card-footer">
                <span className="why-stat-label">BENCHMARK</span>
                <span className="why-stat-val">{item.stat}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM METRIC STRIP */}
        <div className="why-us-strip">
          <span>All hardware supplied strictly under OEM warranty backed by local technical support.</span>
        </div>

      </div>
    </section>
  );
}