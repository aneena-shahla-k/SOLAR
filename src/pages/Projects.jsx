import React from "react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  Users,
  SunMedium,
} from "lucide-react";
import "./../styles/pages.css";

const projects = [
  {
    type: "RESIDENTIAL SOLAR",
    location: "Kochi, Kerala",
    image: "/images/solar-project-01.jpg",
  },
  {
    type: "COMMERCIAL SOLAR",
    location: "Ernakulam, Kerala",
    image: "/images/solar-project-02.jpg",
  },
  {
    type: "EV CHARGING",
    location: "Aluva, Kerala",
    image: "/images/ev-project-01.jpg",
  },
  {
    type: "RESIDENTIAL SOLAR",
    location: "Thrissur, Kerala",
    image: "/images/solar-project-01.jpg",
  },
  {
    type: "COMMERCIAL SOLAR",
    location: "Kozhikode, Kerala",
    image: "/images/solar-project-02.jpg",
  },
  {
    type: "EV CHARGING",
    location: "Kochi, Kerala",
    image: "/images/ev-project-02.jpg",
  },
];

export default function Projects() {
  return (
    <main className="page">

      {/* =====================================================
          PROJECT HERO
      ====================================================== */}

      <section className="projects-page-hero">

        <div>

          <span className="eyebrow">
            OUR PROJECTS
          </span>

          <h1>
            Real Projects.
            <br />
            <span>Real Impact.</span>
          </h1>

          <p>
            Explore our completed installations across
            residential, commercial and EV charging.
          </p>

        </div>

      </section>


      {/* =====================================================
          PROJECT FILTER
      ====================================================== */}

      <section className="project-gallery-section">

        <div className="project-filter">

          <button className="active">All</button>
          <button>Residential</button>
          <button>Commercial</button>
          <button>EV Charging</button>

        </div>


        <div className="project-grid">

          {projects.map((project, index) => (

            <article
              className="project-card"
              key={`${project.type}-${index}`}
            >

              <div className="project-card-image">

                <img
                  src={project.image}
                  alt={project.type}
                />

                <span className="project-index">
                  0{index + 1}
                </span>

              </div>

              <div className="project-card-info">

                <div>
                  <strong>{project.type}</strong>

                  <span>
                    <MapPin size={12} />
                    {project.location}
                  </span>
                </div>

                <ArrowUpRight size={17} />

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        className="about-project-page"
        id="about"
      >

        <div className="about-project-image">

          <img
            src="/images/about-building.jpg"
            alt="Solar company"
          />

        </div>

        <div className="about-project-content">

          <span className="eyebrow">
            ABOUT US
          </span>

          <h2>
            Building a Cleaner
            <br />
            <span>and Greener Tomorrow</span>
          </h2>

          <p>
            We are a team focused on delivering practical,
            reliable solar and EV charging solutions for
            homes, businesses and growing communities.
          </p>

          <p>
            From system selection to professional installation,
            we focus on making clean energy simple and dependable.
          </p>

          <div className="about-highlights">

            <div>
              <ShieldCheck size={19} />
              <span>Quality Installation</span>
            </div>

            <div>
              <Users size={19} />
              <span>Customer Focused</span>
            </div>

            <div>
              <SunMedium size={19} />
              <span>Clean Energy</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          JOURNEY
      ====================================================== */}

      <section className="journey-section">

        <div className="journey-content">

          <span className="eyebrow">
            OUR JOURNEY
          </span>

          <h2>
            From installation
            <br />
            <span>to long-term impact.</span>
          </h2>

          <p>
            We work closely with customers throughout the
            process — from understanding their requirements
            to installation and ongoing support.
          </p>

          <a href="#contact" className="small-link">
            Talk to Us
            <ArrowUpRight size={15} />
          </a>

        </div>

        <div className="journey-image">

          <img
            src="/images/solar-installation.jpg"
            alt="Solar installation"
          />

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-intro">

          <span className="eyebrow">
            CONTACT US
          </span>

          <h2>
            Get in
            <br />
            <span>Touch</span>
          </h2>

          <p>
            Have a question or need a quick estimate?
            Send us a message and our team will get back
            to you shortly.
          </p>

        </div>


        <div className="contact-layout">

          {/* FORM */}

          <form className="contact-form">

            <h3>Send Us a Message</h3>

            <input
              type="text"
              placeholder="Name *"
            />

            <input
              type="text"
              placeholder="Phone / WhatsApp *"
            />

            <input
              type="email"
              placeholder="Email"
            />

            <select defaultValue="">
              <option value="" disabled>
                Interested In *
              </option>

              <option>Solar Installation</option>
              <option>EV Charging</option>
              <option>Commercial Solar</option>
              <option>Residential Solar</option>
            </select>

            <textarea
              rows="4"
              placeholder="Message"
            />

            <button
              type="submit"
              className="primary-btn"
            >
              Send Message
              <ArrowUpRight size={15} />
            </button>

          </form>


          {/* DETAILS */}

          <div className="contact-details">

            <h3>Contact Details</h3>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} />

              <span>
                <small>WhatsApp</small>
                +91 98765 43210
              </span>
            </a>

            <a href="tel:+919876543210">
              <Phone size={19} />

              <span>
                <small>Call Us</small>
                +91 98765 43210
              </span>
            </a>

            <a href="mailto:hello@solarzen.com">
              <Mail size={19} />

              <span>
                <small>Email</small>
                hello@solarzen.com
              </span>
            </a>

            <div>
              <MapPin size={19} />

              <span>
                <small>Location</small>
                Kerala, India
              </span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}