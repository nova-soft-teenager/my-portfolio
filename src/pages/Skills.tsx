import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers3,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Skills.css";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    description:
      "Languages I use to build software and solve problems.",
    skills: [
      "Python",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },

  {
    icon: Layers3,
    title: "Web & App Development",
    description:
      "Technologies I use to create modern web and mobile experiences.",
    skills: [
      "React",
      "React Native",
      "Expo",
      "Responsive Web Design",
    ],
  },

  {
    icon: Cpu,
    title: "AI & Development",
    description:
      "Exploring AI and building practical software solutions.",
    skills: [
      "AI Integration",
      "API Integration",
      "App Development",
      "Software Development",
    ],
  },

  {
    icon: Wrench,
    title: "Tools & Technologies",
    description:
      "Tools and platforms that support my development workflow.",
    skills: [
      "Git",
      "GitHub",
      "Firebase",
    ],
  },
];

function Skills() {
  return (
    <div className="skills-page">

      {/* ================= BACKGROUND ================= */}

      <div className="skills-grid"></div>

      <div className="skills-glow skills-glow-one"></div>

      <div className="skills-glow skills-glow-two"></div>


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

            <Link
              to="/skills"
              className="active"
            >
              Skills
            </Link>

            <a href="/#projects">
              Projects
            </a>

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

      <main className="skills-main">


        {/* BACK TO HOME */}

        <Link
          to="/"
          className="skills-back"
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>


        {/* ================= HEADER ================= */}

        <motion.div
          className="skills-header"

          initial={{
            opacity: 0,
            y: 25,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <div className="skills-label">

            <span></span>

            MY EXPERTISE

          </div>


          <h1>

            Skills &

            <span>
              Technologies.
            </span>

          </h1>


          <p>
            Technologies and tools I use to turn ideas
            into real-world software, modern
            applications, and practical digital
            experiences.
          </p>

        </motion.div>


        {/* ================= SKILL CARDS ================= */}

        <div className="skills-grid-container">

          {skillGroups.map(
            (group, index) => {

              const Icon = group.icon;

              return (

                <motion.div
                  className="skill-card"
                  key={group.title}

                  initial={{
                    opacity: 0,
                    y: 35,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.6,
                    delay: 0.15 * index,
                  }}

                  whileHover={{
                    y: -7,
                  }}
                >

                  <div className="skill-card-top">

                    <div className="skill-icon">
                      <Icon size={21} />
                    </div>


                    <span className="skill-number">
                      0{index + 1}
                    </span>

                  </div>


                  <h2>
                    {group.title}
                  </h2>


                  <p>
                    {group.description}
                  </p>


                  <div className="skill-list">

                    {group.skills.map(
                      (skill) => (

                        <span key={skill}>
                          {skill}
                        </span>

                      )
                    )}

                  </div>

                </motion.div>

              );
            }
          )}

        </div>


        {/* ================= CTA ================= */}

        <motion.div
          className="skills-cta"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
        >

          <div>

            <span>
              READY TO BUILD?
            </span>

            <h2>
              Let's turn an idea into
              something real.
            </h2>

          </div>


          <a
            href="/#contact"
            className="skills-cta-button"
          >
            Let's Work Together

            <ArrowUpRight size={16} />

          </a>

        </motion.div>

      </main>

    </div>
  );
}

export default Skills;