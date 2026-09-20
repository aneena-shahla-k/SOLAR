import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./ProblemSolution.css";

const items = [
  {
    problemIcon: "₹",
    problemTitle: "High electricity costs",
    problemText: "Rising energy costs put pressure on homes and businesses.",
    solutionIcon: "☀",
    solutionTitle: "Generate power on-site",
    solutionText: "Generate clean power where you need it with solar.",
  },
  {
    problemIcon: "⚡",
    problemTitle: "Growing EV adoption",
    problemText: "More electric vehicles are creating new charging needs.",
    solutionIcon: "↯",
    solutionTitle: "Practical EV charging",
    solutionText: "Build charging infrastructure around your actual needs.",
  },
  {
    problemIcon: "×",
    problemTitle: "No charging infrastructure",
    problemText: "The right charging setup isn't always available.",
    solutionIcon: "EV",
    solutionTitle: "2W + 4W charging",
    solutionText: "Support for both two-wheelers and four-wheelers.",
  },
  {
    problemIcon: "◇",
    problemTitle: "Too many vendors",
    problemText: "Solar, charging and installation can become fragmented.",
    solutionIcon: "✓",
    solutionTitle: "One point of contact",
    solutionText: "From planning to installation and support.",
  },
];

const cardAnimation = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ProblemSolution() {
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
  });

  const [activeIndex, setActiveIndex] = useState(-1);
  const [showSolutions, setShowSolutions] = useState(false);
  const [finalState, setFinalState] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const revealTimer = setTimeout(() => {
      setActiveIndex(0);
    }, 900);

    const transformTimer = setTimeout(() => {
      setShowSolutions(true);
    }, 3000);

    const finalTimer = setTimeout(() => {
      setFinalState(true);
    }, 6500);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(transformTimer);
      clearTimeout(finalTimer);
    };
  }, [inView]);

  useEffect(() => {
    if (!inView || finalState) return;

    if (activeIndex >= 0 && activeIndex < items.length - 1) {
      const timer = setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [activeIndex, inView, finalState]);

  return (
    <section
      ref={sectionRef}
      className={`problem-section ${
        finalState ? "section-final" : ""
      }`}
    >
      {/* Background */}
      <div className="problem-bg" />
      <div className="problem-overlay" />

      {/* Ambient light */}
      <div className="ambient ambient-red" />
      <div className="ambient ambient-green" />
      <div className="ambient ambient-cyan" />

      <div className="problem-container">

        {/* --------------------------------
            TOP CONTENT
        -------------------------------- */}

        <motion.div
          className="problem-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
        >
          <div className="section-number">
          <span>ENERGY IS CHANGING</span>
          </div>

          <h2>
            The energy problem
            <br />
            is becoming <span>the opportunity.</span>
          </h2>

          <p>
            Rising energy demand and EV adoption are changing
            how homes and businesses think about power.
          </p>
        </motion.div>

        {/* --------------------------------
            TRANSFORMATION AREA
        -------------------------------- */}

        <div className="transformation-wrapper">

          {/* PROBLEM SIDE */}

          <div className="side-block problem-block">

            <div className="side-heading">
              <span className="status-dot red-dot" />
              THE PROBLEM
            </div>

            <div className="cards-stack">

              {items.map((item, index) => {

                const isActive =
                  activeIndex >= index;

                return (
                  <motion.div
                    key={item.problemTitle}
                    className={`modern-card problem-card ${
                      isActive ? "card-active" : ""
                    }`}
                    custom={index}
                    variants={cardAnimation}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    onMouseEnter={() =>
                      setActiveIndex(index)
                    }
                  >

                    <div className="card-index">
                      0{index + 1}
                    </div>

                    <div className="card-icon red-icon">
                      {item.problemIcon}
                    </div>

                    <div className="card-copy">
                      <h3>{item.problemTitle}</h3>
                      <p>{item.problemText}</p>
                    </div>

                    <div className="problem-indicator">
                      <span />
                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* --------------------------------
              CENTER ENERGY
          -------------------------------- */}

          <div className="energy-center">

            <div className="energy-orbit orbit-one" />
            <div className="energy-orbit orbit-two" />

            <motion.div
              className="energy-core"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>⚡</span>
            </motion.div>

            {/* Animated vertical energy */}
            <div className="energy-rail">
              <motion.div
                className="energy-particle"
                animate={{
                  top: ["0%", "100%"],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            <div className="energy-label">
              TRANSFORM
            </div>

          </div>

          {/* SOLUTION SIDE */}

          <div className="side-block solution-block">

            <div className="side-heading">
              <span className="status-dot green-dot" />
              THE SOLUTION
            </div>

            <div className="cards-stack">

              {items.map((item, index) => {

                const visible =
                  showSolutions || activeIndex >= index;

                return (
                  <motion.div
                    key={item.solutionTitle}
                    className={`modern-card solution-card ${
                      visible ? "solution-visible" : ""
                    }`}
                    initial={{
                      opacity: 0,
                      x: 35,
                      scale: 0.97,
                    }}
                    animate={
                      visible
                        ? {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                          }
                        : {
                            opacity: 0,
                            x: 35,
                            scale: 0.97,
                          }
                    }
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >

                    <div className="card-index">
                      0{index + 1}
                    </div>

                    <div className="card-icon green-icon">
                      {item.solutionIcon}
                    </div>

                    <div className="card-copy">
                      <h3>{item.solutionTitle}</h3>
                      <p>{item.solutionText}</p>
                    </div>

                    <div className="solution-indicator">
                      ✓
                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>

        {/* --------------------------------
            FINAL CONNECTED SYSTEM
        -------------------------------- */}

        <AnimatePresence>
          {finalState && (
            <motion.div
              className="connected-system"
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="system-node">
                <span>☀</span>
                <strong>SOLAR</strong>
                <small>Generate</small>
              </div>

              <div className="system-connector">
                <i />
              </div>

              <div className="system-node active-node">
                <span>⚡</span>
                <strong>ENERGY</strong>
                <small>Connect</small>
              </div>

              <div className="system-connector">
                <i />
              </div>

              <div className="system-node">
                <span>⌂</span>
                <strong>PROPERTY</strong>
                <small>Power</small>
              </div>

              <div className="system-connector">
                <i />
              </div>

              <div className="system-node">
                <span>EV</span>
                <strong>CHARGE</strong>
                <small>Move</small>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {finalState && (
            <motion.div
              className="final-line"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span>ONE ENERGY PARTNER.</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default ProblemSolution;