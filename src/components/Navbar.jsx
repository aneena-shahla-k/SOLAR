import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Zap } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToSection = (section) => {
    closeMenu();

    if (location.pathname === "/projects") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(`/projects#${section}`);
    }
  };

  return (
    <>
      <header className="site-navbar">

        <div className="navbar-inner">

          {/* =====================================================
              LOGO
          ====================================================== */}

          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMenu}
          >
            <span className="navbar-logo-mark">
              <Zap size={17} strokeWidth={2.8} />
            </span>

            <span className="navbar-logo-text">
              Solar<span>Zen</span>
            </span>
          </Link>


          {/* =====================================================
              DESKTOP NAV
          ====================================================== */}

          <nav className="desktop-nav">

            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>

            <Link
              to="/solutions"
              className={
                location.pathname === "/solutions"
                  ? "active"
                  : ""
              }
            >
              Solutions
            </Link>

            <Link
              to="/projects"
              className={
                location.pathname === "/projects"
                  ? "active"
                  : ""
              }
            >
              Projects
            </Link>

            <button
              type="button"
              onClick={() => goToSection("about")}
              className="nav-button"
            >
              About
            </button>

            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="nav-button"
            >
              Contact
            </button>

          </nav>


          {/* =====================================================
              DESKTOP CTA
          ====================================================== */}

          <button
            className="navbar-cta"
            onClick={() => goToSection("contact")}
          >
            Get a Quote
            <ArrowUpRight size={14} />
          </button>


          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>


        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        <div
          className={
            menuOpen
              ? "mobile-menu open"
              : "mobile-menu"
          }
        >

          <Link
            to="/"
            onClick={closeMenu}
            className={
              location.pathname === "/"
                ? "mobile-active"
                : ""
            }
          >
            <span>01</span>
            Home
          </Link>

          <Link
            to="/solutions"
            onClick={closeMenu}
            className={
              location.pathname === "/solutions"
                ? "mobile-active"
                : ""
            }
          >
            <span>02</span>
            Solutions
          </Link>

          <Link
            to="/projects"
            onClick={closeMenu}
            className={
              location.pathname === "/projects"
                ? "mobile-active"
                : ""
            }
          >
            <span>03</span>
            Projects
          </Link>

          <button
            type="button"
            onClick={() => goToSection("about")}
          >
            <span>04</span>
            About
          </button>

          <button
            type="button"
            onClick={() => goToSection("contact")}
          >
            <span>05</span>
            Contact
          </button>


          <button
            className="mobile-quote-button"
            onClick={() => goToSection("contact")}
          >
            Get a Quote
            <ArrowUpRight size={15} />
          </button>

        </div>

      </header>
    </>
  );
}