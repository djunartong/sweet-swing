const programs = [
  {
    icon: "👯",
    level: "Group",
    name: "Group Coaching",
    desc: "Rally, laugh, improve, repeat. Sesi grup kami merupakan perpaduan sempurna antara drill, match play, dan positive vibes. Pemula atau yang mau naik level, semua ada tempatnya di sini.",
  },
  {
    icon: "🎾",
    level: "Private",
    name: "Private Sessions",
    desc: "Fokus penuh buat kamu. Sesi one-on-one bersama coach berarti setiap menit dipakai untuk apa yang benar-benar kamu butuhkan — entah itu untuk mempoles serve-mu, atau sekadar makin nyaman di lapangan.",
  },
  {
    icon: "⭐",
    level: "Kids",
    name: "Kids' Classes",
    desc: "Tempat anak-anak jatuh cinta sama tenis. Sesi yang fun, santai, dan penuh semangat dirancang untuk membangun kepercayaan diri dan koordinasi si kecil. Belum pernah pegang raket? We're here for your little ones!",
  },
  {
    icon: "🎉",
    level: "Events",
    name: "Private Events",
    desc: "Mau bikin acara yang beda dari biasanya? Kami hadirkan pengalaman tenis ke momen spesial kamu. Acara ulang tahun, team bonding, pre-wedding, atau family day — kamu tentuin konsepnya, kami yang urus sisanya.",
  },
  {
    icon: "🤝",
    level: "Collab",
    name: "Brand Collaborations",
    desc: "Ada ide keren? Yuk collab! Kami terbuka untuk bekerjasama dengan brand yang memiliki visi yang sama: olahraga, komunitas, dan good vibes.",
  },
];

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="section-label">Program Kami</div>
      <h2 className="section-title">Something for Everyone</h2>
      <p className="section-sub">
        Dari kelas private dan sesi grup, lalu kids classes dan brand collabs,
        akan ada tempat untuk kamu di Sweet Swing. <br />
        Pick what fits your vibe.
      </p>
      <div className="programs-grid">
        {programs.map((p) => (
          <div key={p.name} className="program-card">
            <div className="program-icon">{p.icon}</div>
            <div className="program-level">{p.level}</div>
            <div className="program-name">{p.name}</div>
            <p className="program-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
