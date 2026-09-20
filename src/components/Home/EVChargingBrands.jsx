import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./EVChargingBrands.css";

const evBrands = [
  {
    id: "01",
    name: "ABB E-Mobility",
    category: "High-Power DC Hubs",
    desc: "Robust charging infrastructure built for rapid corridor top-ups.",
  },
  {
    id: "02",
    name: "Delta Electronics",
    category: "Smart Fleet Inverters",
    desc: "Engineered for reliable commercial and workplace charging setups.",
  },
  {
    id: "03",
    name: "Schneider Electric",
    category: "Connected AC Wallboxes",
    desc: "Energy-efficient compact units optimized for overnight depot dwell.",
  },
];

export default function EVChargingBrands() {
  // Selected Charger State: 'dc' (Fast) or 'ac' (Slow)
  const [activeType, setActiveType] = useState("dc");
  const [batteryLevel, setBatteryLevel] = useState(20);

  // Speed-adaptive battery simulation (DC is rapid, AC is steady)
  useEffect(() => {
    const cycleInterval = activeType === "dc" ? 450 : 900;

    const timer = setInterval(() => {
      setBatteryLevel((prev) => {
        if (prev >= 80) return 20;
        return prev + 20;
      });
    }, cycleInterval);

    return () => clearInterval(timer);
  }, [activeType]);

  return (
    <section className="ev-brands-section">
      <div className="ev-brands-container">
        
        {/* ================= HEADER ================= */}
        <motion.div
          className="ev-brands-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="section-number">
            05 <span>{"//"} EV INFRASTRUCTURE</span>
          </div>

          <h2>
            Charging technology
            <br />
            <span>for every journey.</span>
          </h2>

          <p>
            Prove reliability across scale. We configure multi-tier hardware architectures 
            optimized for vehicle dwell time and grid efficiency.
          </p>
        </motion.div>

        {/* ================= TOP ROW: DC FAST / AC SLOW ================= */}
        <div className="charger-types-grid">
          
          {/* DC FAST */}
          <div
            className={`charger-card charger-card--dc ${
              activeType === "dc" ? "charger-card--active" : ""
            }`}
            onClick={() => setActiveType("dc")}
          >
            <div className="charger-card-top">
              <span className="charger-pill">HIGH SPEED</span>
              <span className="charger-radio-dot" />
            </div>

            <div className="charger-card-body">
              <h3>DC FAST</h3>
              <p>For locations where charging speed matters.</p>
            </div>

            <div className="charger-card-footer">
              <span>RAPID CORRIDORS</span>
              <span className="charger-speed-status">SIMULATING FAST →</span>
            </div>
          </div>

          {/* AC / SLOW */}
          <div
            className={`charger-card charger-card--ac ${
              activeType === "ac" ? "charger-card--active" : ""
            }`}
            onClick={() => setActiveType("ac")}
          >
            <div className="charger-card-top">
              <span className="charger-pill">EXTENDED STAY</span>
              <span className="charger-radio-dot" />
            </div>

            <div className="charger-card-body">
              <h3>AC / SLOW</h3>
              <p>For overnight, workplace and longer-stay charging.</p>
            </div>

            <div className="charger-card-footer">
              <span>WORKPLACE / HOME</span>
              <span className="charger-speed-status">SIMULATING STEADY →</span>
            </div>
          </div>

        </div>

        {/* ================= BATTERY METER SIMULATION ================= */}
        <div className="ev-battery-meter">
          <div className="meter-header">
            <span>
              LIVE CHARGING METER ({activeType === "dc" ? "DC FAST CHARGE" : "AC SLOW CHARGE"})
            </span>
            <span className="meter-percentage">{batteryLevel}%</span>
          </div>

          <div className="meter-track">
            <motion.div
              className={`meter-fill ${
                activeType === "dc" ? "meter-fill--cyan" : "meter-fill--green"
              }`}
              animate={{ width: `${batteryLevel}%` }}
              transition={{
                duration: activeType === "dc" ? 0.35 : 0.65,
                ease: "easeOut",
              }}
            />
          </div>

          <div className="meter-scale">
            <span>20%</span>
            <span>40%</span>
            <span>60%</span>
            <span>80%</span>
          </div>
        </div>

        {/* ================= BOTTOM ROW: THREE CHARGING BRANDS ================= */}
        <div className="ev-brands-bottom-header">
          <span>SUPPORTED CHARGING HARDWARE</span>
          <p>Multi-OEM integrated deployments</p>
        </div>

        <div className="ev-brands-grid">
          {evBrands.map((brand) => (
            <div key={brand.id} className="ev-brand-tile">
              <div className="brand-tile-top">
                <span className="brand-tile-id">{brand.id}</span>
                <span className="brand-tile-badge">CERTIFIED</span>
              </div>

              <div className="brand-tile-content">
                <h4>{brand.name}</h4>
                <span className="brand-tile-category">{brand.category}</span>
                <p>{brand.desc}</p>
              </div>

              <div className="brand-tile-arrow">↗</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}