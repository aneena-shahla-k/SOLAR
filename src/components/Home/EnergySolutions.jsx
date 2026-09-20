import React from "react";
import { motion } from "framer-motion";
import "./EnergySolutions.css";

const energySolutions = [
  {
    id: "01",
    type: "solar",
    badge: "CLEAN GENERATION",
    title: "Solar Infrastructure",
    subtitle: "Rooftop & Ground-mount Arrays",
    metric: "Up to 35% Bill Offset",
    description:
      "High-efficiency tier-1 bifacial installations engineered for maximum peak yield and zero-export compliance.",
    tags: ["Residential", "Commercial", "Micro-grid", "ReNew Partner"],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
    button: "Configure Solar",
  },
  {
    id: "02",
    type: "ev",
    badge: "FAST MOBILITY",
    title: "EV Fast Hubs",
    subtitle: "Fleet & Commercial Chargers",
    metric: "30kW – 240kW Ultra-Fast",
    description:
      "Intelligent AC & dual-gun DC fast charging stations equipped with real-time OCPP telemetry and cloud billing.",
    tags: ["2-Wheeler", "4-Wheeler", "Fleet Depot", "Public Network"],
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80",
    button: "Deploy Chargers",
  },
];

export default function OurSolutions() {
  return (
    <section className="energy-solutions-section">
      <div className="solutions-bg" />
      <div className="solutions-overlay" />

      <div className="energy-solutions-container">
        {/* SECTION HEADER */}
        <header className="solutions-intro">
          <div className="section-number">
          <span>OUR SPECIALIZATIONS</span>
          </div>
          <h2>
            Two solutions. <span>One clean energy partner.</span>
          </h2>
          <p>
            Seamlessly bridging on-site renewable generation with next-gen EV charging architecture.
          </p>
        </header>

        {/* CARDS GRID */}
        <div className="energy-solutions-grid">
          {energySolutions.map((item, index) => (
            <motion.article
              key={item.id}
              className={`energy-card-premium energy-card--${item.type}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              {/* TOP MEDIA BANNER */}
              <div className="card-media-box">
                <img src={item.image} alt={item.title} />
                <div className="card-media-overlay" />
                <div className="media-badge-row">
                  <span className="badge-tag">{item.badge}</span>
                  <span className="badge-metric">{item.metric}</span>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="card-content-box">
                <div className="content-top">
                  <span className="sol-id">{item.id}</span>
                  <div className="sol-titles">
                    <h3>{item.title}</h3>
                    <span className="sol-sub">{item.subtitle}</span>
                  </div>
                </div>

                <p className="sol-desc">{item.description}</p>

                <div className="sol-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="sol-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="sol-action-row">
                  <span className="action-text">{item.button}</span>
                  <span className="action-circle">↗</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}