import React from "react";
import { motion } from "framer-motion";
import "./WhichChargingSolution.css";

const useCases = [
  {
    id: "01",
    useCase: "Home overnight",
    category: "Residential",
    solution: "AC / Slow",
    power: "7.4kW – 11kW",
    tag: "BALANCED",
    whatsappMsg: "Hi SolarZen, I need an AC / Slow charging solution for Home overnight use.",
  },
  {
    id: "02",
    useCase: "Office charging",
    category: "Workplace",
    solution: "AC / Slow",
    power: "11kW – 22kW",
    tag: "SCHEDULED",
    whatsappMsg: "Hi SolarZen, I am inquiring about an AC / Slow charging setup for Office & Employee use.",
  },
  {
    id: "03",
    useCase: "Public charging",
    category: "High Footfall / Transit",
    solution: "DC Fast",
    power: "60kW – 180kW",
    tag: "RAPID TURN",
    whatsappMsg: "Hi SolarZen, I'm looking for a DC Fast charging setup for a Public Charging site.",
  },
  {
    id: "04",
    useCase: "Fleet operations",
    category: "Logistics / Commercial",
    solution: "DC Fast",
    power: "120kW – 360kW",
    tag: "HIGH DUTY",
    whatsappMsg: "Hi SolarZen, I want to discuss a DC Fast charging infrastructure for Fleet operations.",
  },
  {
    id: "05",
    useCase: "2-Wheeler charging",
    category: "Urban / Micro-mobility",
    solution: "Suitable 2W charger",
    power: "3.3kW – 6.6kW",
    tag: "COMPACT",
    whatsappMsg: "Hi SolarZen, I need a suitable 2-Wheeler charging unit for my property.",
  },
  {
    id: "06",
    useCase: "4-Wheeler charging",
    category: "Passenger Vehicles",
    solution: "Suitable 4W charger",
    power: "Dual Port AC / DC",
    tag: "FLEXIBLE",
    whatsappMsg: "Hi SolarZen, I need assistance choosing a suitable 4-Wheeler charger setup.",
  },
];

export default function WhichChargingSolution() {
  const handleRowClick = (msg) => {
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="which-charging-section">
      <div className="which-charging-container">

        {/* HEADER */}
        <motion.div
          className="which-charging-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="section-number">
            06 <span>{"//"} DECISION MATRIX</span>
          </div>

          <h2>
            Not every site needs
            <br />
            <span>the same charger.</span>
          </h2>

          <p>
            We help select the appropriate charging solution based on vehicle
            type, site, usage and charging requirements.
          </p>
        </motion.div>

        {/* INTERACTIVE COMPARISON TABLE */}
        <motion.div
          className="decision-table-wrapper"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="decision-table-header">
            <span className="col-usecase">USE CASE & SITE</span>
            <span className="col-category">ENVIRONMENT</span>
            <span className="col-solution">RECOMMENDED HARDWARE</span>
            <span className="col-power">CAPACITY RANGE</span>
            <span className="col-action">ENQUIRE</span>
          </div>

          <div className="decision-table-body">
            {useCases.map((item, index) => (
              <motion.div
                key={item.id}
                className="decision-row"
                onClick={() => handleRowClick(item.whatsappMsg)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="col-usecase row-primary">
                  <span className="row-index">{item.id}</span>
                  <span className="row-title">{item.useCase}</span>
                </div>

                <div className="col-category">
                  <span className="row-category-badge">{item.category}</span>
                </div>

                <div className="col-solution">
                  <span className="solution-highlight">{item.solution}</span>
                </div>

                <div className="col-power">
                  <span className="power-text">{item.power}</span>
                  <span className="tag-pill">{item.tag}</span>
                </div>

                <div className="col-action">
                  <button className="row-action-btn" type="button" aria-label={`Enquire about ${item.useCase}`}>
                    <span>WhatsApp</span>
                    <span className="action-arrow">↗</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FOOTER SUPPORTING LINE */}
        <div className="decision-footer-support">
          <div className="support-dot" />
          <p>
            Unsure about power capacity or grid approvals? Click any row to consult directly with our infrastructure engineers.
          </p>
        </div>

      </div>
    </section>
  );
}