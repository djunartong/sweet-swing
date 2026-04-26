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
        "Mantan juara nasional junior dengan lebih dari 15 tahun pengalaman dalam dunia tenis. Sekarang hadir untuk membantu kamu menemukan semangat bermain, di level manapun kamu berada 😊 ",
      credentials: [
        "Juara Nasional Indonesia (U10-U18)",
        "Mantan atlet dengan peringkat WTA & ITF",
      ],
      instagram: "hannlevv",
    },
  },
  {
    id: 2,
    personalInfo: {
      name: "Placeholder 1",

      description: "Lorem ipsum dolor sit amet...",
      credentials: ["Lorem ipsum", "Dolor sit amet", "Consectetur elit"],
    },
  },
  {
    id: 3,
    personalInfo: {
      name: "Placeholder 2",

      description: "Lorem ipsum dolor sit amet...",
      credentials: ["Lorem ipsum", "Dolor sit amet", "Consectetur elit"],
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
                    Profil Instagram
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
