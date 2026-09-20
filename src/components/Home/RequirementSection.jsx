import React, { useState } from "react";
import { motion } from "framer-motion";
import "./RequirementSection.css";
import img1 from "../../assets/images/home.jpeg";
import img2 from "../../assets/images/commercial.jpeg";
import img3 from "../../assets/images/evdc.jpg";
import img4 from "../../assets/images/site.jpeg";

const requirements = [
  {
    id: "home",
    tag: "RESIDENTIAL",
    index: "01",
    title: "MY HOME",
    desc: "Solar for residential properties.",
    summary: "Cut monthly utility bills with clean rooftop solar tailored to family load profiles.",
    image: img1,
    whatsappText: "Hi SolarZen, I'm interested in Solar solutions for My Home.",
  },
  {
    id: "business",
    tag: "COMMERCIAL",
    index: "02",
    title: "MY BUSINESS",
    desc: "Commercial and rooftop solar.",
    summary: "Optimize operational energy expenses with robust commercial rooftop setups.",
    image: img2,
    whatsappText: "Hi SolarZen, I want to explore Commercial Solar options for My Business.",
  },
  {
    id: "ev",
    tag: "MOBILITY",
    index: "03",
    title: "MY EV",
    desc: "Home or workplace charging.",
    summary: "Dedicated Level 2 AC chargers configured for overnight or fleet top-ups.",
    image: img3,
    whatsappText: "Hi SolarZen, I need an EV charging setup for My Vehicle / Workplace.",
  },
  {
    id: "fleet",
    tag: "HIGH POWER",
    index: "04",
    title: "MY FLEET / SITE",
    desc: "Multiple vehicles and fast charging.",
    summary: "High-capacity DC fast charging hubs paired with grid-sync and battery storage.",
    image : img4,
    whatsappText: "Hi SolarZen, I want to discuss Fast Charging and Fleet Infrastructure for My Site.",
  },
];

export default function RequirementSection() {
  const [selected, setSelected] = useState(requirements[0]);

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    selected.whatsappText
  )}`;

  return (
    <section className="requirement-section">
      <div className="requirement-container">
        {/* HEADER */}
        <motion.header
          className="requirement-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-number">
            <span>CHOOSE REQUIREMENT</span>
          </div>

          <h2>
            What are you <span>looking to power?</span>
          </h2>

          <p>
            Zero friction. Select what fits your needs and get a direct setup blueprint.
          </p>
        </motion.header>

        {/* 4 CARDS WITH HOVER EXPANDABLE SUMMARY */}
        <div className="requirement-grid">
          {requirements.map((item, index) => {
            const isSelected = selected.id === item.id;

            return (
              <motion.div
                key={item.id}
                className={`req-image-card ${isSelected ? "req-card--active" : ""}`}
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                {/* Image Top */}
                <div className="req-img-banner">
                  <img src={item.image} alt={item.title} />
                  <div className="req-img-overlay" />
                  <div className="req-banner-meta">
                    <span className="req-index-pill">{item.index} {item.tag}</span>
                    <span className="req-radio-circle">
                      <span className="req-radio-dot" />
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="req-details">
                  <h3>{item.title}</h3>
                  <p className="req-desc-text">{item.desc}</p>
                  
                  {/* Hover / Active ആകുമ്പോൾ മാത്രം സ്മൂത്ത് ആയി Expand ആവുന്ന ഭാഗം */}
                  <div className="req-summary-wrapper">
                    <p className="req-summary-hover">{item.summary}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM ACTION BUTTON */}
        <div className="requirement-cta-wrapper">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="requirement-cta-btn"
          >
            <span>Tell Us What You Need ({selected.title})</span>
            <span className="requirement-cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}