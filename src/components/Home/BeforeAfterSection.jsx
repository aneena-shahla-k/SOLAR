import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import "./BeforeAfterSection.css";

const beforePoints = [
  "High grid dependence",
  "No charging infrastructure",
  "Growing energy demand",
  "Multiple vendors",
];

const afterPoints = [
  "Solar generation",
  "EV charging infrastructure",
  "Planned capacity",
  "One point of contact",
];

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [mobileTab, setMobileTab] = useState("after"); // 'before' | 'after'
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 10), 90);
    setSliderPos(percentage);
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleGlobalTouchMove = (e) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    };
    const handleStopDragging = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleStopDragging);
      window.addEventListener("touchmove", handleGlobalTouchMove);
      window.addEventListener("touchend", handleStopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleStopDragging);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
      window.removeEventListener("touchend", handleStopDragging);
    };
  }, [isDragging, handleMove]);

  return (
    <section className="ba-section">
      <div className="ba-container">
        {/* HEADER */}
        <motion.div
          className="ba-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="section-number">
            10 <span>{"//"} THE TRANSFORMATION</span>
          </div>

          <h2>
            From energy problem
            <br />
            <span>to working infrastructure.</span>
          </h2>

          <p>
            Drag the splitter to see how fragmented utility dependency transforms
            into a unified, resilient on-site clean energy system.
          </p>
        </motion.div>

        {/* MOBILE TOGGLE SWITCH (Visible only on mobile) */}
        <div className="ba-mobile-toggle">
          <button
            type="button"
            className={`ba-toggle-btn ${mobileTab === "before" ? "active active--before" : ""}`}
            onClick={() => setMobileTab("before")}
          >
            <span className="ba-badge-dot ba-dot--red" />
            BEFORE
          </button>
          <button
            type="button"
            className={`ba-toggle-btn ${mobileTab === "after" ? "active active--after" : ""}`}
            onClick={() => setMobileTab("after")}
          >
            <span className="ba-badge-dot ba-dot--green" />
            AFTER
          </button>
        </div>

        {/* INTERACTIVE COMPARISON STAGE */}
        <div
          ref={containerRef}
          className={`ba-stage mobile-show-${mobileTab}`}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            if (e.touches[0]) handleMove(e.touches[0].clientX);
          }}
        >
          {/* AFTER SIDE (RIGHT ON DESKTOP) */}
          <div
            className="ba-pane ba-pane--after"
            style={{ "--clip-pos": `${sliderPos}%` }}
          >
            <div className="ba-bg-gradient ba-bg--after" />

            <div className="ba-pane-content ba-content--after">
              <div className="ba-badge ba-badge--after">
                <span className="ba-badge-dot ba-dot--green" />
                AFTER {"//"} SECURED INFRASTRUCTURE
              </div>

              <h3>ENGINEERED INDEPENDENCE</h3>

              <ul className="ba-list ba-list--after">
                {afterPoints.map((item, index) => (
                  <li key={index}>
                    <span className="ba-check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BEFORE SIDE (LEFT ON DESKTOP) */}
          <div
            className="ba-pane ba-pane--before"
            style={{ "--clip-pos": `${100 - sliderPos}%` }}
          >
            <div className="ba-bg-gradient ba-bg--before" />

            <div className="ba-pane-content ba-content--before">
              <div className="ba-badge ba-badge--before">
                <span className="ba-badge-dot ba-dot--red" />
                BEFORE {"//"} FRAGMENTED RISK
              </div>

              <h3>UTILITY VULNERABILITY</h3>

              <ul className="ba-list ba-list--before">
                {beforePoints.map((item, index) => (
                  <li key={index}>
                    <span className="ba-cross-icon">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DRAGGABLE SPLITTER HANDLE (Desktop Only) */}
          <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
            <div className="ba-handle-line" />
            <div className="ba-handle-button">
              <span>◀</span>
              <span>▶</span>
            </div>
            <div className="ba-handle-line" />
          </div>
        </div>

        {/* QUICK CONTROL HELPER (Desktop Only) */}
        <div className="ba-slider-hint">
          <span>◀ DRAG TO EXPLORE THE PAYOFF ▶</span>
        </div>
      </div>
    </section>
  );
}