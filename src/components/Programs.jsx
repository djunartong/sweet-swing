const programs = [
  {
    icon: "👯",
    level: "Group",
    name: "Group Coaching",
    desc: "Rally, laugh, improve, repeat. Our group sessions are the perfect mix of drills, match play, and good energy. Whether you're a total beginner or brushing up your technique, you'll fit right in.",
    price: "Rp 500,000",
    period: "/session (2+ pax)",

  },
  {
    icon: "🎾",
    level: "Private",
    name: "Private Sessions",
    desc: "Your game, your pace, your goals. One-on-one time with your coach means every minute is focused on exactly what you need, whether that's nailing your serve or just getting comfortable on the court.",
    price: "Rp 1,000,000",
    period: "/4 sessions",

  },
  {
    icon: "⭐",
    level: "Kids",
    name: "Kids Classes",
    desc: "Where little ones fall in love with the game. Fun-first, low-pressure sessions that build confidence, coordination, and a whole lot of smiles. No experience needed — just bring the enthusiasm!",
    price: "Rp 750,000",
    period: "/4 sessions",

  },
  {
    icon: "🎉",
    level: "Events",
    name: "Private Events",
    desc: "Want to make your next gathering unforgettable? We bring the court to your celebration: birthdays, team bonding, bachelorettes, family days. You decide the format, we handle all the logistics. Maximum fun, zero stress.",
    price: "Let's Talk!",
    period: "",

  },
  {
    icon: "🤝",
    level: "Collab",
    name: "Brand Collaborations",
    desc: "Got an idea? Let's build something together. From co-branded court events to sponsored sessions, we love partnering with brands that share our love for sport, community, and good times.",
    price: "Let's Talk!",
    period: "",

  },
];

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="section-label">Our Programs</div>
      <h2 className="section-title">Something for Everyone</h2>
      <p className="section-sub">
        From group sessions to private coaching, kids classes to brand collabs, there's a place for you at Sweet Swing. <br />Pick what fits your vibe.
      </p>
      <div className="programs-grid">
        {programs.map((p) => (
          <div
            key={p.name}
            className="program-card"
          >
            <div className="program-icon">{p.icon}</div>
            <div className="program-level">{p.level}</div>
            <div className="program-name">{p.name}</div>
            <p className="program-desc">{p.desc}</p>
            <div className="program-price">
              {p.price}
              <span>{p.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
