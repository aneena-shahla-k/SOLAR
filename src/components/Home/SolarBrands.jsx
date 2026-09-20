import React from "react";
import { motion } from "framer-motion";
import "./SolarBrands.css";

import img1 from "../../assets/logo/adanii.webp";
import img2 from "../../assets/logo/waareee.png";
import img3 from "../../assets/logo/goldi.png";
import img4 from "../../assets/logo/renew.png";
import img5 from "../../assets/logo/tataa.jpg";
import img6 from "../../assets/logo/vikram.webp";
import img7 from "../../assets/logo/loom.webp";
import img8 from "../../assets/logo/havels.png";
import img9 from "../../assets/logo/gro.png";

const brands = [
  {
    id: "01",
    category: "Tier-1 PV Modules",
    tag: "TIER 1",
    logo: img1,
    fallback: "ADANI",
  },
  {
    id: "02",
    category: "High-Efficiency N-Type",
    tag: "TOPCON",
    logo: img2,
    fallback: "WAAREE",
  },
  {
    id: "03",
    category: "Mono PERC Panels",
    tag: "HEAVY DUTY",
    logo: img3,
    fallback: "GOLDI",
  },
  {
    id: "04",
    category: "Integrated Clean Energy",
    isReseller: true,
    tag: "CERTIFIED",
    logo: img4,
    fallback: "ReNew",
  },
  {
    id: "05",
    category: "Engineered EPC Cells",
    tag: "ENTERPRISE",
    logo: img5,
    fallback: "TATA",
  },
  {
    id: "06",
    category: "Commercial Rooftops",
    tag: "UTILITY",
    logo: img6,
    fallback: "VIKRAM",
  },
  {
    id: "07",
    category: "Bifacial Micro Systems",
    tag: "RESIDENTIAL",
    logo: img7,
    fallback: "LOOM",
  },
  {
    id: "08",
    category: "Inverters & Storage",
    tag: "BESS READY",
    logo: img8,
    fallback: "HAVELLS",
  },
  {
    id: "09",
    category: "Smart String Inverters",
    tag: "HYBRID",
    logo: img9,
    fallback: "GROWATT",
  },
];

export default function SolarBrands() {
  return (
    <section className="brands-section">
      <div className="brands-container">
        
        {/* HEADER */}
        <div className="brands-intro">
          <div className="section-number">
            <span>04</span> {" // "} <span>HARDWARE ECOSYSTEM</span>
          </div>
          <h2>
            We work across multiple <span>leading solar brands.</span>
          </h2>
          <p>
            We help match the right product to the right project, based on site conditions,
            capacity needs, and 25-year generation performance goals.
          </p>
        </div>

        {/* COMPACT BALANCED BRANDS GRID */}
        <div className="brands-grid">
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              className={`brand-card ${brand.isReseller ? "brand-card--reseller" : ""}`}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              {/* Top Row: Index & Tag */}
              <div className="brand-card-top">
                <span className="brand-index-code">{brand.id}</span>
                {brand.isReseller ? (
                  <span className="reseller-badge">
                    <span className="badge-dot" />
                    AUTHORIZED RESELLER
                  </span>
                ) : (
                  <span className="brand-tag-chip">{brand.tag}</span>
                )}
              </div>

              {/* Dedicated Logo Slot */}
              <div className="brand-logo-frame">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.fallback}
                    className="brand-logo-img"
                  />
                ) : (
                  <span className="brand-text-logo">{brand.fallback}</span>
                )}
              </div>

              {/* Bottom Row: Spec Category Only */}
              <div className="brand-info-wrap">
                <span className="brand-category">{brand.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="brands-footer-note">
          <span className="footer-dot" />
          <span>Multi-brand certified engineering • Direct OEM 25-year warranty integration</span>
        </div>

      </div>
    </section>
  );
}