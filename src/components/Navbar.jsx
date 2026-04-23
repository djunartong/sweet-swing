export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        Sweet<span>Swing</span>
      </div>
      <ul className="nav-links">
        <li>
          <a
            onClick={() =>
              document
                .getElementById("programs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Programs
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              document
                .getElementById("testimonials")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Results
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
