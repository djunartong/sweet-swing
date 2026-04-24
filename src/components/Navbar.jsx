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
      <div className="nav-logo">
        Sweet<span>Swing</span>
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
          <a onClick={() => scrollTo("programs")}>Programs</a>
        </li>
        <li>
          <a onClick={() => scrollTo("about")}>About</a>
        </li>
        <li>
          <a onClick={() => scrollTo("testimonials")}>Results</a>
        </li>
        <li>
          <a onClick={() => scrollTo("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
