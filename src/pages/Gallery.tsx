import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import "./Gallery.css";

const galleryItems = [
  {
    image: "./images/gallery1.jpeg",
    title: "The Person Behind The Code",
    description: "A glimpse of the person behind the ideas, projects, and lines of code.",
  },
  {
    image: "./images/gallery4.png",
    title: "A Day in The Mountains",
    description: "A breathtaking moment from an unforgettable journey through the mountains and snowy landscapes.",
  },
  {
    image: "/images/gallery2.jpeg",
    title: "Lost in The Green",
    description: "A peaceful moment surrounded by breathtaking mountain views, lush greenery, and the beauty of nature.",
  },
  {
    image: "/images/gallery3.png",
    title: "A Moment from Tarapith",
    description: "A personal memory captured during my visit to the peaceful and spiritual surroundings of Tarapith Kali Mandir.",
  },
];

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? galleryItems.length - 1
        : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === galleryItems.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <div className="gallery-page">

      {/* ================= BACKGROUND ================= */}

      <div className="gallery-grid-bg"></div>

      <div className="gallery-glow gallery-glow-one"></div>

      <div className="gallery-glow gallery-glow-two"></div>


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

            <a href="/#projects">
              Projects
            </a>

            <Link
              to="/gallery"
              className="active"
            >
              Gallery
            </Link>

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

      <main className="gallery-main">

        {/* BACK */}

        <Link
          to="/"
          className="gallery-back"
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>


        {/* ================= HEADER ================= */}

        <motion.div
          className="gallery-header"

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

          <div className="gallery-label">
            <span></span>
            BEHIND THE SCENES
          </div>

          <h1>
            My
            <span> Gallery.</span>
          </h1>

          <p>
            A collection of moments, experiments,
            ideas, and experiences from my journey
            as a developer and builder.
          </p>

        </motion.div>


        {/* ================= GALLERY ================= */}

        <div className="gallery-grid">

          {galleryItems.map((item, index) => (

            <motion.div
              key={item.image}
              className={`gallery-item gallery-item-${index + 1}`}

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}

              whileHover={{
                y: -5,
              }}

              onClick={() =>
                setSelectedIndex(index)
              }
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <div className="gallery-image-number">
                  0{index + 1}
                </div>

                <div className="gallery-info">

                  <span>
                    {item.title}
                  </span>

                  <h2>
                    {item.description}
                  </h2>

                </div>

                <div className="gallery-open">
                  <ArrowUpRight size={18} />
                </div>

              </div>

            </motion.div>

          ))}

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="gallery-bottom">
          <span></span>
          CLICK AN IMAGE TO EXPLORE
        </div>

      </main>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedIndex !== null && (

        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >

          {/* CLOSE */}

          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>


          {/* PREVIOUS */}

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>


          {/* IMAGE */}

          <motion.div
            className="lightbox-content"

            initial={{
              opacity: 0,
              scale: 0.94,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.25,
            }}

            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={
                galleryItems[selectedIndex].image
              }
              alt={
                galleryItems[selectedIndex].title
              }
            />

            <div className="lightbox-info">

              <span>
                {galleryItems[selectedIndex].title}
              </span>

              <p>
                {
                  galleryItems[selectedIndex]
                    .description
                }
              </p>

            </div>

          </motion.div>


          {/* NEXT */}

          <button
            className="lightbox-arrow lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

        </div>

      )}

    </div>
  );
}

export default Gallery;