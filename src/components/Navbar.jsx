import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scrolls to a section and closes the mobile menu at the same time
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu after tapping a link
  };

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => scrollTo("home")}>
        <img
          src={import.meta.env.BASE_URL + "/images/navbar/sst-logo.png"}
          alt="Sweet Swing Tennis"
          className="nav-logo"
        />
        <div className="nav-text">
          Sweet<span>Swing</span>
        </div>
      </div>

      {/* Hamburger button — only visible on mobile via CSS */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* nav-links gets the `open` class when menuOpen is true,
          which CSS uses to slide the menu into view on mobile */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a onClick={() => scrollTo("programs")}>Program</a>
        </li>
        <li>
          <a onClick={() => scrollTo("about")}>Tentang Kami</a>
        </li>
        <li>
          <a onClick={() => scrollTo("testimonials")}>Review</a>
        </li>
        <li>
          <a onClick={() => scrollTo("contact")}>Kontak Kami</a>
        </li>
      </ul>
    </nav>
  );
}
