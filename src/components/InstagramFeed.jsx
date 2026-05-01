import { useEffect } from "react";

// Replace this with your real widget ID from Elfsight dashboard
const ELFSIGHT_WIDGET_ID = import.meta.env.VITE_ELFSIGHT_WIDGET_ID;

export default function InstagramFeed() {
  useEffect(() => {
    // Check if the Elfsight script is already in the page
    // to avoid loading it twice on re-renders
    const existingScript = document.querySelector(
      'script[src="https://static.elfsight.com/platform/platform.js"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []); // empty [] means this runs once when the component mounts

  return (
    <section className="instagram-feed">
      <div className="section-label">Ikuti Perjalanan Kami</div>
      <h2 className="section-title">@sweetswingtennis</h2>
      <p className="section-sub">
        Lihat keseruan di lapangan — follow kami di Instagram untuk update
        terbaru!
      </p>

      {/* Elfsight renders the widget into this div using the widget ID */}
      <div
        className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
        data-elfsight-app-lazy
      />

      <div className="instagram-cta">
        <a
          href="https://instagram.com/sweetswingtennis"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-green"
        >
          Follow @sweetswingtennis →
        </a>
      </div>
    </section>
  );
}
