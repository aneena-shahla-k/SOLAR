import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import "./Footer.css";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">


      {/* =================================================
          MAIN FOOTER
      ================================================= */}

      <div className="footer-main">

        <div className="footer-container">

          {/* BRAND */}

          <div className="footer-brand">

            <a href="#home" className="footer-logo">

              <div className="footer-logo-mark">
                <span />
              </div>

              <div>
                <strong>
                  Solar<span>Volt</span>
                </strong>

                <small>
                  ENERGY & EV SOLUTIONS
                </small>
              </div>

            </a>

            <p>
              Solar installation and EV charging
              solutions designed for homes,
              businesses and electric mobility.
            </p>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>

          </div>


          {/* SOLUTIONS */}

          <div className="footer-column">

            <h3>Solutions</h3>

            <a href="#solutions">
              EV Charging
            </a>

            <a href="#solutions">
              Solar Installation
            </a>

            <a href="#solutions">
              Residential Solar
            </a>

            <a href="#solutions">
              Commercial Solar
            </a>

          </div>


          {/* COMPANY */}

          <div className="footer-column">

            <h3>Company</h3>

            <a href="#about">
              About Us
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#brands">
              Our Brands
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <h3>Get in Touch</h3>

            <a href="tel:+919876543210">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>

            <a href="mailto:hello@solarvolt.com">
              <Mail size={14} />
              <span>hello@solarvolt.com</span>
            </a>

            <div className="footer-address">
              <MapPin size={14} />
              <span>
                Kerala, India
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          BOTTOM BAR
      ================================================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <span>
            © {new Date().getFullYear()} SolarVolt.
            All rights reserved.
          </span>

          <div className="footer-bottom-links">
            <a href="#home">
              Privacy
            </a>

            <a href="#home">
              Terms
            </a>
          </div>

          <button
            className="footer-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>

        </div>

      </div>

    </footer>
  );
}