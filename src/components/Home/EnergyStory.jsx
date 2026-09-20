import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./EnergyStory.css";

const energyNodes = [
  {
    id: "01",
    title: "SOLAR",
    text: "Generate power.",
    type: "solar",
  },
  {
    id: "02",
    title: "ENERGY",
    text: "Store and manage it.",
    type: "energy",
  },
  {
    id: "03",
    title: "PROPERTY",
    text: "Connect the entire system.",
    type: "property",
  },
  {
    id: "04",
    title: "EV",
    text: "Use that energy intelligently.",
    type: "ev",
  },
];

function EnergyStoryNode({ node, index, progress }) {
  const start = index / 4;
  const end = (index + 1) / 4;

  const nodeOpacity = useTransform(
    progress,
    [Math.max(0, start - 0.08), start, end],
    [0.45, 1, 1]
  );

  const nodeScale = useTransform(
    progress,
    [Math.max(0, start - 0.08), start],
    [0.9, 1]
  );

  return (
    <motion.div
      className={`energy-story-node energy-story-node--${node.type}`}
      style={{
        opacity: nodeOpacity,
        scale: nodeScale,
      }}
    >
      <div className="energy-story-node-orbit">
        <div className="energy-story-node-number">
          {node.id}
        </div>

        <div className="energy-story-node-core">
          <span />
        </div>
      </div>

      <div className="energy-story-node-copy">
        <h3>{node.title}</h3>
        <p>{node.text}</p>
      </div>
    </motion.div>
  );
}

export default function EnergyStory() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const lineProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const lineGlow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.4, 1, 0.7]
  );

  return (
    <section
      ref={sectionRef}
      className="energy-story-section"
    >
      <div className="energy-story-container">

        {/* HEADER */}
        <motion.div
          className="energy-story-header"
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <div className="energy-story-label">
            <span className="energy-story-label-line" />
            <span>THE ENERGY STORY</span>
          </div>

          <h2>
            Two sides of the
            <br />
            <span>same energy story.</span>
          </h2>

          <p>
            From generating power to moving with it,
            every part of the system works together.
          </p>
        </motion.div>


        {/* SYSTEM */}
        <div className="energy-story-system">

          {/* BASE LINE */}
          <div className="energy-story-line-track" />

          {/* ACTIVE LINE */}
          <motion.div
            className="energy-story-line-active"
            style={{
              width: lineProgress,
              opacity: lineGlow,
            }}
          />

          {/* MOVING ENERGY */}
          <motion.div
            className="energy-story-energy-pulse"
            style={{
              left: lineProgress,
              opacity: lineGlow,
            }}
          />

          {/* NODES */}
          <div className="energy-story-nodes">
            {energyNodes.map((node, index) => (
              <EnergyStoryNode
                key={node.id}
                node={node}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>

        </div>


        {/* CLOSING */}
        <motion.div
          className="energy-story-closing"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <span>GENERATE IT.</span>
          <span>USE IT.</span>
          <span>MOVE WITH IT.</span>
        </motion.div>

      </div>
    </section>
  );
}