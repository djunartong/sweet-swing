import { useState, useEffect } from "react";

// ─── CAROUSEL DATA ────────────────────────────────────────────────────────────
// To replace sample images with your own photos, update the src values here.
// Option A — local file: place the image in docs/images/ and use "/images/photo.jpg"
// Option B — keep using Unsplash URLs (free, no attribution required for dev)
// w= and h= control dimensions; fit=crop fills the frame exactly.

const slides = [
  {
    src: import.meta.env.BASE_URL + "/images/hero/single.JPG",
    alt: "One-on-one coaching",
    label: "1-on-1 Coaching",
  },
  {
    src: import.meta.env.BASE_URL + "/images/hero/group.jpg",
    alt: "Group session",
    label: "Group Sessions",
  },
  {
    src: import.meta.env.BASE_URL + "/images/hero/kids-class.jpg",
    alt: "Kid's class",
    label: "Kids Classes",
  },
  {
    src: import.meta.env.BASE_URL + "/images/hero/private-event.jpeg",
    alt: "Private event and collaborations",
    label: "Private Events and Collaborations",
  },
];

function HeroCarousel() {
  // Tracks which slide index (0–3) is currently visible
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5 seconds. The cleanup function (return) clears
  // the interval when the component unmounts to prevent memory leaks.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="carousel">
      <div className="carousel-track">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === current ? "active" : ""}`}
          >
            <img src={slide.src} alt={slide.alt} className="carousel-img" />
            <div className="carousel-caption">{slide.label}</div>
          </div>
        ))}
      </div>

      <button
        className="carousel-btn carousel-btn--prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="carousel-btn carousel-btn--next"
        onClick={next}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-court-lines" />
      <div className="hero-circle" />
      <div className="hero-circle2" />

      {/* Two-column layout: text left, carousel right */}
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">🎾 Tennis for Everyone</div>
          <h1>
            <span className="accent">Play</span> More
            <br />
            Stress <span className="accent">Less</span>
          </h1>
          <p>
            Whether you're picking up a racket for the first time or looking to
            sharpen your game, come swing with us! <br /> Good vibes, great
            coaching — all skill levels welcome 😊
          </p>
          <div className="hero-btns">
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book A Session →
            </button>
            <button
              className="btn-outline"
              onClick={() =>
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Programs
            </button>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div>
              <div className="stat-num">100+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div>
              <div className="stat-num">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        <HeroCarousel />
      </div>
    </section>
  );
}
