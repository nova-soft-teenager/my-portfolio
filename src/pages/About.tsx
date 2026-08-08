import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Cpu,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* ================= NAVBAR ================= */}
      <header className="about-navbar">
        <div className="about-nav-container">

          <Link to="/" className="about-logo">
            JB
          </Link>

          <nav className="about-nav-links">
            <Link to="/">Home</Link>
            <Link to="/about" className="active">
              About
            </Link>
            <a href="/#skills">Skills</a>
            <a href="/#projects">Projects</a>
            <a href="/#gallery">Gallery</a>
            <a href="/#contact">Contact</a>
          </nav>

          <a href="/#contact" className="about-hire-button">
            Hire Me
            <ArrowUpRight size={15} />
          </a>

        </div>
      </header>

      {/* ================= ABOUT HERO ================= */}
      <main>

        <section className="about-hero">

          <div className="about-page-container">

            {/* LEFT CONTENT */}
            <motion.div
              className="about-main-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <Link to="/" className="back-home">
                <ArrowLeft size={15} />
                Back to Home
              </Link>

              <div className="about-label">
                <span></span>
                GET TO KNOW ME
              </div>

              <h1>
                About
                <span>Me.</span>
              </h1>

              <p className="about-lead">
                I'm Jeet Biswas — a developer, AI enthusiast,
                and someone who loves turning ideas into
                real-world software.
              </p>

              <p className="about-description">
                I enjoy building modern applications,
                experimenting with new technologies, and
                solving problems through code. My goal is
                to create software that is not only
                functional, but also useful, clean, and
                enjoyable to use.
              </p>

              {/* LOCATION */}
              <div className="about-location">
                <MapPin size={17} />
                <span>West Bengal, India</span>
              </div>

              {/* BUTTON */}
              <a
                href="/#contact"
                className="about-work-button"
              >
                Let's Work Together
                <ArrowUpRight size={17} />
              </a>

            </motion.div>


            {/* RIGHT VISUAL */}
            <motion.div
              className="about-main-visual"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
            >

              {/* Glow */}
              <div className="about-big-glow"></div>

              {/* Decorative rings */}
              <div className="about-ring ring-one"></div>
              <div className="about-ring ring-two"></div>

              {/* Photo */}
              <div className="about-image-wrapper">
                <img
                  src="/images/about.jpeg"
                  alt="Jeet Biswas"
                />
              </div>

              {/* Floating card */}
              <motion.div
                className="about-floating-card"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="floating-icon">
                  <Code2 size={18} />
                </div>

                <div>
                  <small>Currently</small>
                  <strong>Building Ideas</strong>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </section>


        {/* ================= INFO SECTION ================= */}

        <section className="about-info-section">

          <div className="about-page-container">

            <motion.div
              className="about-info-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{ duration: 0.7 }}
            >

              <div className="about-label">
                <span></span>
                WHAT I DO
              </div>

              <h2>
                Turning ideas into
                <span> digital reality.</span>
              </h2>

            </motion.div>


            <div className="about-cards">

              {/* CARD 1 */}
              <motion.div
                className="about-card"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
              >

                <div className="about-card-icon">
                  <Code2 size={22} />
                </div>

                <h3>
                  Software Development
                </h3>

                <p>
                  Building modern applications with
                  clean architecture, practical
                  functionality and smooth user
                  experiences.
                </p>

              </motion.div>


              {/* CARD 2 */}
              <motion.div
                className="about-card"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
              >

                <div className="about-card-icon">
                  <Cpu size={22} />
                </div>

                <h3>
                  AI & Technology
                </h3>

                <p>
                  Exploring artificial intelligence
                  and new technologies to create
                  smarter and more useful solutions.
                </p>

              </motion.div>


              {/* CARD 3 */}
              <motion.div
                className="about-card"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
              >

                <div className="about-card-icon">
                  <Terminal size={22} />
                </div>

                <h3>
                  App Creation
                </h3>

                <p>
                  Creating practical apps and
                  digital products designed around
                  real-world problems.
                </p>

              </motion.div>

            </div>

          </div>

        </section>


        {/* ================= FINAL SECTION ================= */}

        <section className="about-final">

          <Sparkles
            className="final-sparkle"
            size={22}
          />

          <h2>
            Curious about what
            <span> I'm building?</span>
          </h2>

          <p>
            Explore my projects and see what I'm
            working on.
          </p>

          <a
            href="/#projects"
            className="about-project-button"
          >
            Explore Projects
            <ArrowUpRight size={17} />
          </a>

        </section>

      </main>

    </div>
  );
}

export default About;