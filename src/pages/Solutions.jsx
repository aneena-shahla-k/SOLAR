import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BatteryCharging,
  Building2,
  Home,
  Zap,
  SunMedium,
  Calculator,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./../styles/pages.css";

export default function Solutions() {
  const [bill, setBill] = useState(5000);
  const [property, setProperty] = useState("Residential");

  const estimate = useMemo(() => {
    const yearlyBill = bill * 12;

    const savingsRate = property === "Residential" ? 0.72 : 0.78;

    const yearlySavings = yearlyBill * savingsRate;

    const systemSize =
      property === "Residential"
        ? Math.max(2, Math.round(bill / 1100))
        : Math.max(5, Math.round(bill / 950));

    const payback =
      yearlySavings > 0
        ? (systemSize * 65000) / yearlySavings
        : 0;

    return {
      systemSize,
      yearlySavings,
      payback: Math.min(8, Math.max(3, payback)),
    };
  }, [bill, property]);

  return (
    <main className="page">

      {/* =====================================================
          PAGE HERO
      ====================================================== */}

      <section className="inner-page-hero">

        <div>
          <span className="eyebrow">OUR SOLUTIONS</span>

          <h1>
            Solutions for a
            <br />
            <span>Cleaner, Greener Future</span>
          </h1>

          <p>
            We provide reliable solar and EV charging solutions
            for residential, commercial and industrial needs.
          </p>
        </div>

        <div className="inner-page-hero-image">
          <img
            src="/images/solar-installation-service.jpg"
            alt="Solar panels"
          />
        </div>

      </section>


      {/* =====================================================
          EV CHARGING
      ====================================================== */}

      <section className="service-detail">

        <div className="service-detail-image">
          <img
            src="/images/ev-charging-service.jpg"
            alt="EV charging station"
          />
        </div>

        <div className="service-detail-content">

          <span className="service-number">01 / 02</span>

          <div className="service-icon">
            <Zap size={20} />
          </div>

          <span className="eyebrow">
            EV DC FAST CHARGING
          </span>

          <h2>
            Charging that
            <br />
            keeps you moving.
          </h2>

          <p>
            We install DC fast charging infrastructure
            designed for both 2-wheelers and 4-wheelers.
          </p>

          <div className="service-features">

            <div>
              <BatteryCharging size={18} />
              <span>DC Fast Charging</span>
            </div>

            <div>
              <Zap size={18} />
              <span>2-Wheeler</span>
            </div>

            <div>
              <Zap size={18} />
              <span>4-Wheeler</span>
            </div>

          </div>

          <Link to="/projects" className="small-link">
            View Projects
            <ArrowUpRight size={15} />
          </Link>

        </div>

      </section>


      {/* =====================================================
          SOLAR
      ====================================================== */}

      <section className="service-detail reverse">

        <div className="service-detail-image">
          <img
            src="/images/solar-installation-service.jpg"
            alt="Solar installation"
          />
        </div>

        <div className="service-detail-content">

          <span className="service-number">02 / 02</span>

          <div className="service-icon">
            <SunMedium size={20} />
          </div>

          <span className="eyebrow">
            SOLAR INSTALLATION
          </span>

          <h2>
            Turn your rooftop
            <br />
            into clean energy.
          </h2>

          <p>
            Residential and commercial solar installations
            designed around your real energy requirements.
          </p>

          <div className="service-features">

            <div>
              <Home size={18} />
              <span>Residential</span>
            </div>

            <div>
              <Building2 size={18} />
              <span>Commercial</span>
            </div>

            <div>
              <SunMedium size={18} />
              <span>Multiple Brands</span>
            </div>

          </div>

          <Link to="/projects" className="small-link">
            Explore Projects
            <ArrowUpRight size={15} />
          </Link>

        </div>

      </section>


      {/* =====================================================
          SOLAR ROI
      ====================================================== */}

      <section className="roi-section">

        <div className="roi-header">

          <span className="eyebrow">
            SOLAR ROI & SAVINGS CALCULATOR
          </span>

          <h2>
            Calculate Your
            <br />
            <span>Solar Savings</span>
          </h2>

          <p>
            Find out how much you could save with solar energy.
            Enter a few details and get an indicative estimate.
          </p>

        </div>


        <div className="roi-layout">

          {/* INPUT */}

          <div className="roi-box">

            <h3>Your Details</h3>

            <label>
              Monthly Electricity Bill
            </label>

            <div className="bill-value">
              ₹{bill.toLocaleString("en-IN")}
            </div>

            <input
              type="range"
              min="1000"
              max="25000"
              step="500"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
            />

            <div className="range-labels">
              <span>₹1,000</span>
              <span>₹25,000</span>
            </div>

            <label>Property Type</label>

            <div className="property-toggle">

              <button
                className={
                  property === "Residential"
                    ? "active"
                    : ""
                }
                onClick={() => setProperty("Residential")}
              >
                Residential
              </button>

              <button
                className={
                  property === "Commercial"
                    ? "active"
                    : ""
                }
                onClick={() => setProperty("Commercial")}
              >
                Commercial
              </button>

            </div>

          </div>


          {/* RESULTS */}

          <div className="roi-box results-box">

            <div className="results-title">
              <Calculator size={18} />
              Estimated Results
            </div>

            <div className="result-grid">

              <div className="result-item">
                <span>Recommended System</span>
                <strong>
                  {estimate.systemSize} kW
                </strong>
              </div>

              <div className="result-item">
                <span>Estimated Annual Savings</span>
                <strong>
                  ₹
                  {Math.round(
                    estimate.yearlySavings
                  ).toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="result-item">
                <span>Indicative Payback</span>
                <strong>
                  {estimate.payback.toFixed(1)} Years
                </strong>
              </div>

              <div className="result-item">
                <span>Clean Energy</span>
                <strong>Every Year</strong>
              </div>

            </div>

            <Link
              to="/projects"
              className="primary-btn"
            >
              Get My Solar Estimate
              <ArrowUpRight size={15} />
            </Link>

            <small className="roi-note">
              Indicative estimate only. Final system sizing,
              savings and payback depend on site conditions,
              tariff, generation and installation details.
            </small>

          </div>

        </div>

      </section>


      {/* =====================================================
          BRANDS
      ====================================================== */}

      <section className="brands-section">

        <div className="brands-heading">

          <span className="eyebrow">
            TRUSTED BRANDS
          </span>

          <h2>
            Technology from
            <br />
            <span>brands we trust.</span>
          </h2>

          <p>
            We work with established technology brands to
            deliver reliable energy solutions.
          </p>

        </div>

        <div className="brand-grid">

          <div>LONGi</div>
          <div>JA Solar</div>
          <div>Trina Solar</div>
          <div>Jinko Solar</div>
          <div>RENEW</div>

        </div>

      </section>

    </main>
  );
}