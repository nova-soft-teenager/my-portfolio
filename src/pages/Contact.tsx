import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* ================= BACKGROUND ================= */}

      <div className="contact-grid-bg"></div>

      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>


      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          <Link to="/" className="logo">
            JB
          </Link>

          <nav className="nav-links">

            <Link to="/">
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

            <Link to="/contact" className="active">
              Contact
            </Link>

          </nav>

          <a
            href="mailto:novasoft27@gmail.com"
            className="hire-button"
          >
            Hire Me
            <ArrowUpRight size={15} />
          </a>

        </div>
      </header>


      {/* ================= MAIN ================= */}

      <main className="contact-main">

        <Link to="/" className="contact-back">
          <ArrowLeft size={15} />
          Back to Home
        </Link>


        {/* ================= HEADER ================= */}

        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="contact-label">
            <span></span>
            GET IN TOUCH
          </div>

          <h1>
            Let's build
            <span> something.</span>
          </h1>

          <p>
            Have an idea, project, collaboration, or just want
            to talk about technology? I'd love to hear from you.
          </p>

        </motion.div>


        {/* ================= CONTENT ================= */}

        <div className="contact-layout">

          {/* ================= LEFT ================= */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >

            <div className="contact-intro">

              <span className="contact-mini-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's turn your
                <span> idea into reality.</span>
              </h2>

              <p>
                Whether you're looking for someone to build
                an application, explore an AI idea, or simply
                discuss a project, feel free to reach out.
              </p>

            </div>


            {/* EMAIL */}

            <a
              href="mailto:novasoft27@gmail.com"
              className="contact-info-card"
            >

              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>Email</span>
                <strong>novasoft27@gmail.com</strong>
              </div>

              <ArrowUpRight size={17} />

            </a>


            {/* LOCATION */}

            <div className="contact-info-card">

              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <span>Location</span>
                <strong>West Bengal, India</strong>
              </div>

            </div>


            {/* SOCIALS */}

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


          {/* ================= FORM ================= */}

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >

            <div className="form-header">

              <span>SEND A MESSAGE</span>

              <p>
                Tell me a little about what you're working on.
              </p>

            </div>


            <form
                  action="https://formspree.io/f/mgawobdb"
                  method="POST"
                >
                  {/* NAME */}
                  <div className="form-group">
                    <label>Your Name</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="form-group">
                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* SUBJECT */}
                  <div className="form-group">
                    <label>Subject</label>

                    <input
                      type="text"
                      name="subject"
                      placeholder="What would you like to discuss?"
                      required
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="form-group">
                    <label>Message</label>

                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about your idea..."
                      required
                    ></textarea>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>

          </motion.div>

        </div>


        {/* ================= BOTTOM ================= */}

        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >

          <span></span>

          OPEN TO IDEAS • COLLABORATIONS • PROJECTS

          <span></span>

        </motion.div>

      </main>

    </div>
  );
}

export default Contact;