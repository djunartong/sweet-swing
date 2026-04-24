import { useState } from "react";

// ─── ENVIRONMENT VARIABLES ────────────────────────────────────────────────────
//
// Instead of hardcoding private values directly in this file (which would
// expose them on GitHub), we read them from environment variables.
//
// Vite exposes env variables to your code via import.meta.env.
// IMPORTANT: All variable names must start with VITE_ — Vite will ignore
// anything that doesn't, as a safety measure to avoid leaking server secrets.
//
// These values come from your .env file (which is gitignored and stays private).
// See .env.example for the full list of required variables.

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
const TELEGRAM_USERNAME = import.meta.env.VITE_TELEGRAM_USERNAME;
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'd like to book a tennis session.",
);

// Contact detail values also come from .env so you can update them in one place
// without touching any component code.
const contactDetails = [
  { icon: "📍", label: "Location", val: import.meta.env.VITE_LOCATION },
  { icon: "📞", label: "Phone", val: import.meta.env.VITE_PHONE },
  // { icon: "📧", label: "Email", val: import.meta.env.VITE_EMAIL },
  { icon: "🕐", label: "Hours", val: "Mon–Fri: 7am–8pm\nSat–Sun: 8am–6pm" },
];

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function Contact() {
  // useState manages the form fields and submission state locally in this component.
  // formData holds the current value of every input field.
  // submitted switches the form to a success message after the user submits.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Basic validation: only submit if name and email are filled in.
  // In a real app you would also send this data to a backend or email service here.
  const handleSubmit = () => {
    if (formData.name && formData.email) setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title">Start Your Training</h2>
      <p className="section-sub">
        Book a free trial session or ask us anything. We'll get back to you
        within 24 hours.
      </p>

      <div className="contact-inner">
        {/* Show success message after submit, otherwise show the form */}
        {submitted ? (
          <div
            style={{
              background: "rgba(206,218,88,0.15)",
              border: "1px solid var(--yellow-green)",
              borderRadius: 12,
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.8rem",
                color: "var(--yellow-green)",
                letterSpacing: 1,
              }}
            >
              Message Sent!
            </div>
            <p style={{ color: "rgba(255,255,255,0.65)", marginTop: "0.5rem" }}>
              We'll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            {/* Each onChange spreads the existing formData and updates only the changed field.
                This pattern avoids creating a separate handler for every input. */}
            <div className="form-group">
              <label>Full Name</label>
              <input
                placeholder="e.g. Alex Johnson"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="alex@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Phone (optional)</label>
              <input
                placeholder="+62 (291) 0000-0000"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Interested In</label>
              <select
                value={formData.program}
                onChange={(e) =>
                  setFormData({ ...formData, program: e.target.value })
                }
              >
                <option value="">Select a program...</option>
                <option>Private Class</option>
                <option>Group Session</option>
                <option>Kids Class</option>
                <option>Private Event</option>
                <option>Brand Collaboration</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Tell us about your experience and goals..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              className="btn-primary"
              style={{ width: "100%", padding: "1rem", fontSize: "1rem" }}
              onClick={handleSubmit}
            >
              Send Message →
            </button>
          </div>
        )}

        {/* Right column: contact details + chat buttons */}
        <div className="contact-info">
          {/* Loop over contactDetails array — values come from .env via import.meta.env */}
          {contactDetails.map((item) => (
            <div key={item.label} className="contact-info-item">
              <div className="contact-icon">{item.icon}</div>
              <div>
                <div className="contact-info-label">{item.label}</div>
                {/* whiteSpace: pre-line renders the \n line breaks from the .env value */}
                <div
                  className="contact-info-val"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {item.val}
                </div>
              </div>
            </div>
          ))}

          {/* ── CHAT LINKS ─────────────────────────────────────────────────────
              These are plain <a> tags — no API integration needed.
              wa.me is WhatsApp's official click-to-chat URL format.
              t.me is Telegram's official profile/username URL format.
              target="_blank" opens in a new tab.
              rel="noopener noreferrer" is a security best practice whenever
              you use target="_blank" — it prevents the new tab from being
              able to access or manipulate the original page. */}
          <div className="chat-links">
            <div className="chat-links-label">Chat with us directly</div>
            <div className="chat-btns">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="chat-btn chat-btn--whatsapp"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href={`https://t.me/${TELEGRAM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="chat-btn chat-btn--telegram"
              >
                <TelegramIcon />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
