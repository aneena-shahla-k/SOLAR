import React from "react";
import { motion } from "framer-motion";
import "./HowItWorks.css";

const steps = [
  {
    step: "01",
    title: "TELL US YOUR REQUIREMENT",
    tagline: "First Contact & Discovery",
    desc: "Share your site details, power usage, or charging goals via WhatsApp or web form. Zero jargon required.",
  },
  {
    step: "02",
    title: "WE PLAN THE SOLUTION",
    tagline: "Engineering & Feasibility",
    desc: "Our engineers analyze site orientation, load capacity, shading, and grid connectivity to build a custom blueprint.",
  },
  {
    step: "03",
    title: "WE SOURCE THE RIGHT PRODUCTS",
    tagline: "Multi-Brand Procurement",
    desc: "We match and source certified Tier-1 panels, smart inverters, or fast chargers tailored to your project.",
  },
  {
    step: "04",
    title: "WE INSTALL & SUPPORT",
    tagline: "Turnkey Commissioning",
    desc: "Full turnkey installation, net-metering approvals, continuous monitoring, and long-term lifecycle warranty support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw-section">
      <div className="hiw-container">

        {/* HEADER */}
        <motion.div
          className="hiw-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="section-number">
            07 <span>{"//"} SEAMLESS JOURNEY</span>
          </div>

          <h2>
            From first message
            <br />
            <span>to live installation.</span>
          </h2>

          <p>
            We take full ownership of the lifecycle so you never have to navigate 
            contractors, procurement delays, or grid permissions alone.
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="hiw-timeline-wrapper">

          {/* ANIMATING PROGRESS LINE ACROSS 4 STEPS */}
          <div className="hiw-rail-bg">
            <motion.div
              className="hiw-rail-progress"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>

          {/* 4 STEPS GRID */}
          <div className="hiw-steps-grid">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                className="hiw-step-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                {/* Step Marker on the Rail */}
                <div className="hiw-node-indicator">
                  <span className="hiw-node-core" />
                  <span className="hiw-node-pulse" />
                </div>

                <div className="hiw-card-content">
                  <div className="hiw-step-num">{item.step}</div>
                  <span className="hiw-step-tag">{item.tagline}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}