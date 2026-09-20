import React from "react";
import "./projects-testimonials.css";
import img1 from "../../assets/images/commercial.jpg";
import img2 from "../../assets/images/resi.jpg";
import img3 from "../../assets/images/solar.jpg";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "EcoTech Megawatt Solar Array",
    category: "Commercial Solar",
    capacity: "1.2 MWp",
    offset: "1,450 Tons CO₂/yr",
    location: "Kinfra Industrial Park, Kerala",
    image: img1,
    tags: ["Tier-1 Bifacial", "On-Grid", "SCADA Monitoring"]
  },
  {
    id: 2,
    title: "Highway Dual DC Hyper-Hub",
    category: "EV Infrastructure",
    capacity: "360 kW Combined",
    offset: "Dynamic Load Shared",
    location: "National Highway 66 Bypass",
    image: img2,
    tags: ["Ultra-Fast DC", "OCPP 2.0.1", "Solar-Coupled"]
  },
  {
    id: 3,
    title: "Hillside Farmhouse Microgrid",
    category: "Residential Hybrid",
    capacity: "15 kWp + 30kWh BESS",
    offset: "100% Off-Grid Capable",
    location: "Wayanad Hills, Kerala",
    image: img3,
    tags: ["Hybrid BESS", "Zero-Export", "Lithium-Iron-Phosphate"]
  }
];

const REVIEWS_DATA = [
  {
    id: 1,
    client: "Dr. Anirudh Varma",
    role: "Managing Director, Varma Healthcare Campus",
    rating: 5,
    quote:
      "Transitioning our entire 3-acre clinic campus to a synchronized solar microgrid cut our grid dependency by 82%. The engineering rigor and neat cable runs were exceptional.",
    metric: "82% Grid Reduction"
  },
  {
    id: 2,
    client: "Sameer Nambiar",
    role: "VP Operations, Apex Logistics Hub",
    rating: 5,
    quote:
      "Our commercial fleet charging hub needed dual 180kW DC dispensers running alongside rooftop solar. The installation was seamless and delivered two weeks ahead of schedule.",
    metric: "360kW DC Fleet Hub"
  },
  {
    id: 3,
    client: "Meera Krishnan",
    role: "Architect & Homeowner",
    rating: 5,
    quote:
      "The minimalist roof aesthetic with zero visible exterior conduits matched our villa architecture perfectly. The mobile telemetry app gives real-time stats every second.",
    metric: "Net Zero Villa"
  }
];

export default function SolarCaseStudiesAndReviews() {
  return (
    <div className="sage-theme-container">
      {/* =========================================================
          SECTION 1: COMPLETED PROJECTS
         ========================================================= */}
      <section className="projects-section">
        <div className="projects-container">
          <header className="projects-intro">
            <div className="section-number">
              <span>07</span> {" // "} <span>CASE STUDIES</span>
            </div>
            <h2>
              Proven Clean Energy <span>Infrastructure.</span>
            </h2>
            <p>
              Explore high-efficiency solar plants and ultra-fast DC mobility
              deployments engineered to deliver peak power resilience.
            </p>
          </header>

          <div className="projects-grid">
            {PROJECTS_DATA.map((item) => (
              <article key={item.id} className="project-card">
                <div className="project-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="project-category-tag">{item.category}</span>
                </div>

                <div className="project-content">
                  <div className="project-location">
                    <span className="location-pin">📍</span>
                    <span>{item.location}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <div className="project-metrics-strip">
                    <div className="metric-box">
                      <span className="metric-label">Capacity</span>
                      <span className="metric-val">{item.capacity}</span>
                    </div>
                    <div className="metric-divider" />
                    <div className="metric-box">
                      <span className="metric-label">Environmental Impact</span>
                      <span className="metric-val">{item.offset}</span>
                    </div>
                  </div>

                  <div className="project-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: TESTIMONIALS / CLIENT REVIEWS
         ========================================================= */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <header className="testimonials-intro">
            <div className="section-number">
              <span>08</span> {" // "} <span>VALIDATION</span>
            </div>
            <h2>
              Trusted by <span>Clean-Tech</span> Leaders.
            </h2>
            <p>
              Direct experiences from commercial plant managers, fleet
              operators, and green homeowners powered by our setups.
            </p>
          </header>

          <div className="testimonials-grid">
            {REVIEWS_DATA.map((review) => (
              <div key={review.id} className="testimonial-card">
                <div className="testimonial-top">
                  <div className="star-rating">
                    {"★".repeat(review.rating)}
                  </div>
                  <span className="verified-badge">
                    <span className="badge-dot" /> Verified Client
                  </span>
                </div>

                <p className="testimonial-quote">“{review.quote}”</p>

                <div className="testimonial-footer">
                  <div className="client-info">
                    <h4>{review.client}</h4>
                    <span className="client-role">{review.role}</span>
                  </div>
                  <div className="client-metric-chip">{review.metric}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-strip">
            <span className="strip-dot" />
            <span>99.4% Grid Reliability Across 25+ Completed Microgrids</span>
          </div>
        </div>
      </section>
    </div>
  );
}