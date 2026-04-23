import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const coaches = [
  {
    id: 1,
    personalInfo: {
      name: "Hanna Levina",
      image: "/images/about/hanna.jpg",
      description:
        "Former junior national champion with 10+ years of experience in the game. She is motivated to help players at every level discover their spark and grow on the court",
      credentials: [
        "Indonesian National Champion (U10-U18)",
        "Former WTA-ranked player",
        "Certified STA Professional Coach",
      ],
      instagram: "hannlevv",
    },
  },
  {
    id: 2,
    personalInfo: {
      name: "Placeholder 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur tincidunt. Sed at ligula a enim efficitur commodo",
      credentials: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Donec vel sapien eget nunc efficitur tincidunt",
      ],
    },
  },
  {
    id: 3,
    personalInfo: {
      name: "Placeholder 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur tincidunt. Sed at ligula a enim efficitur commodo",
      credentials: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Donec vel sapien eget nunc efficitur tincidunt",
      ],
    },
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + coaches.length) % coaches.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % coaches.length);

  const currentCoach = coaches[currentIndex];

  return (
    <section className="about" id="about">
      <button
        className="carousel-btn carousel-btn--prev"
        onClick={prev}
        aria-label="Previous coach"
      >
        ‹
      </button>
      <div className="about-inner">
        <div className="about-img-wrap">
          <div className="about-img-placeholder">
            {currentCoach.personalInfo.image && (
              <img
                className="about-img-placeholder"
                src={currentCoach.personalInfo.image}
                alt={currentCoach.personalInfo.name}
              />
            )}
          </div>
          {/* <div className="about-badge">
            <span>Certified by</span>
            ITF & USPTA
          </div> */}
        </div>
        <div>
          <div className="section-label">Meet Your Coach</div>
          <h2 className="section-title">{currentCoach.personalInfo.name}</h2>
          <p className="section-sub">{currentCoach.personalInfo.description}</p>
          <div className="credentials">
            {currentCoach.personalInfo.credentials.map((c) => (
              <div key={c} className="cred-item">
                <div className="cred-dot" />
                {c}
              </div>
            ))}
          </div>
          {currentCoach.personalInfo.instagram && (
            <a
              className="btn-primary instagram-btn"
              href={`https://www.instagram.com/${currentCoach.personalInfo.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              Connect on Instagram
            </a>
          )}
        </div>
      </div>
      <button
        className="carousel-btn carousel-btn--next"
        onClick={next}
        aria-label="Next coach"
      >
        ›
      </button>
      <div className="carousel-dots">
        {coaches.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
