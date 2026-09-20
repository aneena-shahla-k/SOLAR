import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./PossibilitiesSection.css";

const possibilities = [
  {
    id: "home",
    label: "HOME",
    solution: "Solar",
    icon: "🏠",
    desc: "Rooftop generation tailored to residential power curves.",
  },
  {
    id: "office",
    label: "OFFICE",
    solution: "Solar + EV",
    icon: "🏢",
    desc: "Integrated clean generation paired with workplace charging.",
  },
  {
    id: "commercial",
    label: "COMMERCIAL",
    solution: "Rooftop Solar",
    icon: "🏭",
    desc: "High-capacity commercial PV arrays for operational savings.",
  },
  {
    id: "fleet",
    label: "FLEET",
    solution: "DC Fast Charging",
    icon: "🚛",
    desc: "Heavy-duty fast charging corridors for uninterrupted logistics.",
  },
  {
    id: "public",
    label: "PUBLIC LOCATION",
    solution: "Charging Station",
    icon: "⚡",
    desc: "High-turnover rapid transit hubs with grid synchronization.",
  },
];

export default function PossibilitiesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Radial sequential lighting animation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % possibilities.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="possibilities-section">
      <div className="possibilities-container">

        {/* HEADER */}
        <motion.div
          className="possibilities-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="section-number">
            08 <span>{"//"} ECOSYSTEM</span>
          </div>

          <h2>
            One Partner.
            <br />
            <span>Multiple Possibilities.</span>
          </h2>

          <p>
            From a single rooftop to a complete EV charging site, we help turn
            energy requirements into working infrastructure.
          </p>
        </motion.div>

        {/* RADIAL INTERACTIVE ECOSYSTEM */}
        <div className="radial-ecosystem">

          {/* BACKGROUND RADIAL PULSES */}
          <div className="radial-orbit orbit-large" />
          <div className="radial-orbit orbit-small" />

          {/* CENTER NODE: COMPANY CORE */}
          <div className="core-node-wrap">
            <motion.div
              className="core-node"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="core-tag">SOLARZEN</span>
              <strong>SINGLE PARTNER</strong>
              <small>Full Lifecycle</small>
            </motion.div>
            <div className="core-pulse-ring" />
          </div>

          {/* 5 SURROUNDING SATELLITE NODES */}
          <div className="satellites-container">
            {possibilities.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={item.id}
                  className={`satellite-item satellite-${idx + 1} ${
                    isActive ? "satellite--active" : ""
                  }`}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  {/* Connecting Line from Center */}
                  <div className="connector-line">
                    <span className="connector-energy-flow" />
                  </div>

                  {/* Satellite Card */}
                  <div className="satellite-card">
                    <div className="satellite-top">
                      <span className="sat-icon">{item.icon}</span>
                      <span className="sat-tag">{item.label}</span>
                    </div>

                    <h4>{item.solution}</h4>
                    <p>{item.desc}</p>

                    <div className="satellite-status-dot" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="possibilities-statement">
          <div className="statement-line-accent" />
          <p>
            Seamless execution without fragmentation. One unified point of contact
            for design, procurement, approvals, and maintenance.
          </p>
        </div>

      </div>
    </section>
  );
}