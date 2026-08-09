import { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="home-page">

      {/* ================= BACKGROUND ================= */}

      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>
      <div className="grid-background"></div>


      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          {/* LOGO */}

          <Link to="/" className="logo">
            JB
          </Link>


          {/* DESKTOP NAVIGATION */}

          <nav className="nav-links">

            <Link to="/" className="active">
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/skills">
              Skills
            </Link>

            <Link to="/projects">
              Projects
            </Link>

            <Link to="/gallery">
              Gallery
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </nav>


          {/* DESKTOP HIRE BUTTON */}

          <Link to="/contact" className="hire-button">
            Hire Me
            <ArrowUpRight size={15} />
          </Link>


          {/* MOBILE MENU BUTTON */}

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}

        {mobileMenuOpen && (
          <div className="mobile-menu">

            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>

            <Link to="/skills" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </Link>

            <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </Link>

            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>
              Gallery
            </Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            <Link
              to="/contact"
              className="mobile-hire-button"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
              <ArrowUpRight size={16} />
            </Link>

          </div>
        )}

      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero" id="home">

          <div className="hero-container">

            {/* ================= LEFT CONTENT ================= */}

            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="hero-intro">
                <span className="intro-line"></span>
                <span>Welcome to my world</span>
              </div>


              <h1>
                Hi, I'm
                <span className="name">
                  Jeet
                </span>
              </h1>


              <h2>
                Developer
                <span>•</span>
                AI Builder
                <span>•</span>
                App Creator
              </h2>


              <p className="hero-description">
                I turn ideas into real-world software.
                I build modern applications, explore AI,
                and create practical solutions to
                interesting problems.
              </p>


              {/* ================= BUTTONS ================= */}

              <div className="hero-buttons">

                <Link
                  to="/projects"
                  className="primary-button"
                >
                  View My Work
                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="secondary-button"
                >
                  Let's Talk
                </Link>

              </div>


              {/* ================= SOCIAL LINKS ================= */}

              <div className="social-links">

                <a
                  href="mailto:novasoft27@gmail.com"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>

                <a
                  href="https://www.instagram.com/jeetxrangon.1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>

              </div>

            </motion.div>


            {/* ================= RIGHT VISUAL ================= */}

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >

              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="orbit orbit-three"></div>

              <div className="photo-glow"></div>


              <div className="profile-photo">
                <img
                  src="/images/profile.jpeg"
                  alt="Jeet Biswas"
                />
              </div>


              <motion.div
                className="floating-card"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <span className="status-dot"></span>

                <div>
                  <small>Currently</small>
                  <strong>Building</strong>
                </div>

              </motion.div>

            </motion.div>

          </div>


          {/* ================= SCROLL INDICATOR ================= */}

          <motion.a
            href="#home"
            className="scroll-indicator"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>Scroll to explore</span>
            <ArrowDown size={16} />
          </motion.a>

        </section>

      </main>

    </div>
  );
}

export default Home;