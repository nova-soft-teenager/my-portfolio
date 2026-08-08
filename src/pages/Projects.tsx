import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "RangonAI",
    category: "Create Your Own Personal A.I",
    status: "Completed",
     image: "/images/rangon-ai.png",
    description:
  "A personal AI platform that lets users create their own AI by giving it a name, with Android capabilities such as phone control, background services, and task automation.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Google-cloud",
    ],
  },

  {
    number: "02",
    title: "Ranchat",
    category: "Confidential",
    status: "In Progress",
     image: "/images/ranchat.png",
    description:
    "Currently under development. Something new is being built and will be revealed soon.",
    technologies: [
      "Let's see",
    ],
  },

];

function Projects() {
  return (
    <div className="projects-page">

      {/* ================= BACKGROUND ================= */}

      <div className="projects-grid-bg"></div>

      <div className="projects-glow projects-glow-one"></div>

      <div className="projects-glow projects-glow-two"></div>


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

            <Link
              to="/projects"
              className="active"
            >
              Projects
            </Link>

            <a href="/#gallery">
              Gallery
            </a>

            <a href="/#contact">
              Contact
            </a>

          </nav>


          <a
            href="/#contact"
            className="hire-button"
          >
            Hire Me
            <ArrowUpRight size={15} />
          </a>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="projects-main">


        {/* BACK */}

        <Link
          to="/"
          className="projects-back"
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>


        {/* ================= HEADER ================= */}

        <motion.div
          className="projects-header"

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <div className="projects-label">

            <span></span>

            SELECTED WORK

          </div>


          <h1>

            Things I've
            <span> Built.</span>

          </h1>


          <p>
            A collection of projects I've built,
            experimented with, and continue to develop
            while turning ideas into real-world software.
          </p>

        </motion.div>


        {/* ================= PROJECTS ================= */}

        <div className="projects-list">

          {projects.map(
            (project, index) => (

              <motion.div
                className="project-card"
                key={project.title}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.7,
                  delay: 0.15 * index,
                }}
              >

                {/* IMAGE */}

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-image-overlay"></div>


                  <span className="project-number">
                    {project.number}
                  </span>


                  <span className="project-status">
                    <span></span>
                    {project.status}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="project-content">

                  <div className="project-category">
                    {project.category}
                  </div>


                  <h2>
                    {project.title}
                  </h2>


                  <p>
                    {project.description}
                  </p>


                  {/* TECHNOLOGIES */}

                  <div className="project-tech">

                    {project.technologies.map(
                      (tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      )
                    )}

                  </div>


                  {/* DETAILS */}

                  <Link
                    to={`/projects/${project.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="project-details-button"
                  >

                    Explore Project

                    <ArrowUpRight size={16} />

                  </Link>

                </div>

              </motion.div>

            )
          )}

        </div>


        {/* ================= BOTTOM ================= */}

        <motion.div
          className="projects-bottom"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >

          <span>
            MORE PROJECTS ARE ON THE WAY.
          </span>

          <ExternalLink size={14} />

        </motion.div>

      </main>

    </div>
  );
}

export default Projects;