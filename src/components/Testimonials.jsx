const testimonials = [
  {
    initials: "M",
    name: "Martin",
    role: "Private Class Student",
    stars: 5,
    text: "Sweet Swing beneran jadi bekal buat perjalanan tennis ku sih.. jadi fondasi awal karena di Sweet Swing tuh diajarin semuanya mulai dari pemanasan yang benar, footwork yang benar, teknik mukul yang benar, teknik recovery yang benar. Semuanya thx to coach yang luar biasa detail bgt waktu ngelatih. Dan hebatnya lagi sesi-sesi nya itu bisa di bungkus dengan cara yang menarik dan ga ngebosenin.. Thank you Sweet Swing!!",
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
      <div className="section-label">Review</div>
      <h2 className="section-title">Apa Kata Mereka</h2>
      <p className="section-sub">
        Pengalaman nyata dari murid kami. Yuk buktiin juga sendiri!
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
