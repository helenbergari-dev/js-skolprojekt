/**
 * Denna fil har förbättrats med AI som bollplank.
 * All slutlig kod är manuellt granskad av mig.
 */

import { useEffect, useState } from "react";

const API = "https://win25-jsf-assignment.azurewebsites.net/api/testimonials";

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(API);
        if (!res.ok) throw new Error("Kunde inte hämta testimonials");
        const data = await res.json();
        if (alive) setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        if (alive) setErr(e.message || "Fel vid hämtning");
      } finally {
        if (alive) setLoading(false);
      }
    }
    load();
    return () => {
      alive = false;
    };
  }, []);

  const Stars = ({ rating = 5 }) => {
    const r = Math.max(0, Math.min(5, Number(rating) || 0));
    return (
      <div className="stars-rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`star ${i < r ? "filled" : "empty"}`}>★</span>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="testimonials-container">
          <p className="loading-text">Laddar testimonials...</p>
        </div>
      </section>
    );
  }

  if (err) {
    return (
      <section className="testimonials-section">
        <div className="testimonials-container">
          <p className="error-text">Ett fel uppstod: {err}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <p className="testimonials-label">Testimonials</p>
        <h2 className="testimonials-heading">See What Our Client Have to Say</h2>
        <p className="testimonials-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui blandit gravida.
          Nulla eris nulla iaco. Mauris ac blandit nisl non sodales augue. Phasellus eget elit gravida.
        </p>

        <div className="testimonials-grid">
          {items.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="card-content">
                <Stars rating={t.starRating || t.rating || 5} />
                <p className="testimonial-text">{t.comment || t.text}</p>

                <div className="customer-info">
                  <div className="customer-details">
                    <div className="customer-avatar">
                      {t.avatarUrl || t.image ? (
                        <img src={t.avatarUrl || t.image} alt={t.author || t.name} />
                      ) : (
                        <div className="avatar-placeholder" />
                      )}
                    </div>
                    <div className="customer-name-role">
                      <h4 className="customer-name">{t.author || t.name}</h4>
                      <p className="customer-role">{t.jobRole || t.role || "Customer"}</p>
                    </div>
                  </div>
                  <div className="quote-icon">"</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}