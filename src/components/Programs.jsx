const programs = [
  {
    icon: "🌱",
    level: "General",
    name: "Kelas Umum",
    desc: "Belajar bareng dalam kurikulum yang udah dirancang rapi, step by step. Cocok buat siapa aja yang mau mulai dari basic, sekalian dapet teman baru juga! Open for everyone, kapan aja kamu siap.",
  },
  {
    icon: "🎾",
    level: "Private",
    name: "Private & Private Group Session",
    desc: "Fokus penuh buat kamu. Sesi one-on-one atau grup bersama coach berarti setiap menit dipakai untuk apa yang benar-benar kamu dan teman-teman kamu butuhkan — entah itu untuk mempoles serve, atau sekadar makin nyaman di lapangan.",
  },
  {
    icon: "⭐",
    level: "Kids",
    name: "Kids' Class",
    desc: "Tempat anak-anak jatuh cinta sama tenis. Sesi yang fun, santai, dan penuh semangat dirancang untuk membangun kepercayaan diri dan koordinasi si kecil. Belum pernah pegang raket? We're here for your little ones!",
  },
  {
    icon: "👯",
    level: "Open",
    name: "Open Class",
    desc: "Sesi spesial yang terbuka untuk umum, dengan format yang beda setiap bulannya. Bisa jadi workshop teknik tertentu, atau sesi fun match buat yang pengen coba-coba. Pantengin terus update-nya, karena ini bakal jadi salah satu favorit kamu!",
  },
  {
    icon: "🤝",
    level: "Collab",
    name: "Brand Collaboration",
    desc: "Ada ide keren? Yuk collab! Kami terbuka untuk bekerjasama dengan brand yang memiliki visi yang sama: olahraga, komunitas, dan good vibes.",
  },
];

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="section-label">Program Kami</div>
      <h2 className="section-title">Tersedia Untuk Semua</h2>
      <p className="section-sub">
        Akan selalu ada tempat untuk kamu di Sweet Swing 😊 <br />
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
