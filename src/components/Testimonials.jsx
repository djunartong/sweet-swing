const testimonials = [
  {
    image: import.meta.env.BASE_URL + "/images/testimonials/martin.jpeg",
    initials: "M",
    name: "Martin",
    role: "Kelas Privat",
    stars: 5,
    text: "SweetSwing beneran jadi bekal buat perjalanan tennis ku sih.. jadi fondasi awal karena di Sweetswing tuh diajarin semuanya mulai dari pemanasan yang benar, footwork yang benar, teknik mukul yang benar, teknik recovery yang benar. Semuanya thanks to coach yang luar biasa detail bgt waktu ngelatih. Dan hebatnya lagi sesi-sesi nya itu bisa di bungkus dengan cara yang menarik dan ga ngebosenin.. Thank you SweetSwing!!",
  },
  {
    image: import.meta.env.BASE_URL + "/images/testimonials/marsiko.jpeg",
    initials: "MK",
    name: "Marsiko",
    role: "Kelas Privat",
    stars: 5,
    text: "Latihannya nggak pernah bosenin, si coach ada aja cara nge-push kita (in a positive and fun way) dan nunjukin dimana kurangnya, supaya kita bisa improve. Bener bener semuanya step by step. Coachnya juga sabar sabar. Bisa diskusi konsultasi juga, gimana caranya biar bisa AIUEO, nanti dikasih PR exercise di rumah, supaya di lapangan lebih prima ",
  },
  {
    image: import.meta.env.BASE_URL + "/images/testimonials/adhi.jpeg",
    initials: "A",
    name: "Adhi",
    role: "Kelas Semi Privat",
    stars: 5,
    text: "Kalau aku di SweetSwing merasa banyak berkembang karena bisa dapet teknik-teknik baru dan belajar berbagai pendekatan dalam bermain. Selain itu, aku juga jadi sadar kalau ternyata ada banyak hal penting di luar sekadar mukul bola, seperti footwork dan fisik, yang sangat berpengaruh ke permainan. Jadi overall, permainan aku jadi jauh lebih baik",
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
              {t.image ? (
                <img src={t.image} alt={t.name} className="testi-avatar" />
              ) : (
                <div className="testi-avatar">{t.initials}</div>
              )}
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
