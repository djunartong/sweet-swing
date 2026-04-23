const testimonials = [
  {
    initials: "SL",
    name: "Sarah L.",
    role: "Beginner Student",
    stars: 5,
    text: "I had zero experience before joining. Within 3 months I could hold a proper rally and won my first social match. Coach James makes everything feel achievable.",
  },
  {
    initials: "MK",
    name: "Marcus K.",
    role: "Intermediate Student",
    stars: 5,
    text: "My serve went from my biggest weakness to a genuine weapon. The video analysis sessions are a game changer — you see exactly what to fix.",
  },
  {
    initials: "RP",
    name: "Rachel P.",
    role: "Competitive Player",
    stars: 5,
    text: "Ranked 3 spots higher after just one season of the Elite Program. The tactical coaching is on another level. Worth every penny.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-label">Student Results</div>
      <h2 className="section-title">What Players Say</h2>
      <p className="section-sub">
        Real feedback from real students. See what consistent, expert coaching
        can do for your game.
      </p>
      <div className="testi-grid">
        {testimonials.map((t) => (
          <div key={t.name} className="testi-card">
            <div className="stars">{"★".repeat(t.stars)}</div>
            <p className="testi-text">"{t.text}"</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
