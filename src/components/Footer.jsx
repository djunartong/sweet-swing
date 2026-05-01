import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/sweetswingtennis/",
    label: "Instagram",
  },
  {
    icon: FaTiktok,
    link: "https://tiktok.com/@sweetswingtennis",
    label: "TikTok",
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        Sweet<span>Swing</span>
      </div>

      <div className="footer-copy">
        © {CURRENT_YEAR} Sweet Swing. All rights reserved.
      </div>

      <div className="footer-socials">
        {socials.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label={item.label}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
