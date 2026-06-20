import { useState, useRef } from "react";
import { FaInstagram } from "react-icons/fa";

const SWIPE_THRESHOLD = 80;

const coaches = [
  {
    id: 1,
    personalInfo: {
      title: "Founder",
      name: "Hanna Levina",
      image: import.meta.env.BASE_URL + "/images/about/hanna.jpg",
      description:
        "Former junior national champion with more than 15 years of experience in the world of tennis. Now here to help you find your passion for playing, at whatever level you're at 😊",
      credentials: [
        "Indonesian National Champion (U10–18)",
        "Former WTA & ITF athlete",
        "Passionate coach and educator",
      ],
      instagram: "hannlevv",
    },
  },
  {
    id: 2,
    personalInfo: {
      title: "Head Coach",
      name: "Sebastian Hanzel",
      image: import.meta.env.BASE_URL + "/images/about/hanzel.jpeg",
      description:
        "Former junior athlete ranked 3rd nationally, ready to help you level up 💪",
      credentials: [
        "Former ITF athlete",
        "Coaching since 2019",
        "Expert in kids' classes, technique correction and match play strategy",
      ],
      instagram: "sebastianhanzel22",
    },
  },
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

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
    endX.current = e.changedTouches[0].clientX; // capture where finger lifted
    const diff = startX.current - endX.current;

    if (Math.abs(diff) < SWIPE_THRESHOLD) return;

    if (diff > 0)
      next(); // swiped left → next
    else prev(); // swiped right → prev
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
                {coach.personalInfo.image ? (
                  <img
                    className="about-img"
                    src={coach.personalInfo.image}
                    alt={coach.personalInfo.name}
                  />
                ) : (
                  <div className="about-img-placeholder">🎾</div>
                )}
              </div>

              {/* CONTENT */}
              <div className="about-content">
                <div className="section-label">
                  Meet Your {coach.personalInfo.title || "Coach"}
                </div>
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
                    Instagram Profile
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
