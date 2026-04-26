import { useState, useRef } from "react";
import { FaInstagram } from "react-icons/fa";

const coaches = [
  {
    id: 1,
    personalInfo: {
      name: "Hanna Levina",
      image: import.meta.env.BASE_URL + "/images/about/hanna.jpg",
      description:
        "Former junior national champion with 15+ years of experience in the game. She is motivated to help players at every level discover their spark and grow on the court",
      credentials: [
        "Indonesian National Champion (U10-U18)",
        "Former WTA & ITF-ranked player",
      ],
      instagram: "hannlevv",
    },
  },
  {
    id: 2,
    personalInfo: {
      name: "Placeholder 1",
      image: import.meta.env.BASE_URL + "/images/about/coach2.jpg",
      description: "Lorem ipsum dolor sit amet...",
      credentials: ["Lorem ipsum", "Dolor sit amet", "Consectetur elit"],
    },
  },
  {
    id: 3,
    personalInfo: {
      name: "Placeholder 2",
      image: import.meta.env.BASE_URL + "/images/about/coach3.jpg",
      description: "Lorem ipsum dolor sit amet...",
      credentials: ["Lorem ipsum", "Dolor sit amet", "Consectetur elit"],
    },
  },
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const startX = useRef(null);

  const goTo = (index) => {
    setCurrent((index + coaches.length) % coaches.length);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // ---------------- swipe ----------------
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!startX.current) return;

    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 50) prev();
    if (diff < -50) next();

    startX.current = null;
  };

  return (
    <section className="about" id="about">
      <button className="carousel-btn carousel-btn--prev" onClick={prev}>
        ‹
      </button>

      <div className="carousel-window">
        {coaches.map((coach, index) => {
          const isActive = index === current;

          return (
            <div
              key={coach.id}
              className={`slide ${isActive ? "active" : ""}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* IMAGE */}
              <div className="about-img-wrap">
                <img
                  className="about-img"
                  src={coach.personalInfo.image}
                  alt={coach.personalInfo.name}
                />
              </div>

              {/* CONTENT */}
              <div className="about-content">
                <div className="section-label">Meet Your Coach</div>
                <h2 className="section-title">{coach.personalInfo.name}</h2>

                <p className="section-sub">{coach.personalInfo.description}</p>

                <div className="credentials">
                  {coach.personalInfo.credentials.map((c) => (
                    <div key={c} className="cred-item">
                      <div className="cred-dot" />
                      {c}
                    </div>
                  ))}
                </div>

                {coach.personalInfo.instagram && (
                  <a
                    className="btn-primary instagram-btn"
                    href={`https://instagram.com/${coach.personalInfo.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                    Connect on Instagram
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button className="carousel-btn carousel-btn--next" onClick={next}>
        ›
      </button>

      {/* DOTS */}
      <div className="carousel-dots">
        {coaches.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
