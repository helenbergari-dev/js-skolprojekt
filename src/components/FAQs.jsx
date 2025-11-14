/**
 * Denna fil har förbättrats med AI som bollplank.
 * All kod är manuellt anpassad och granskad av mig.
 */

import { useEffect, useState } from "react";

const API_BASE =
  import.meta.env?.VITE_API_BASE || "https://win25-jsf-assignment.azurewebsites.net";

export default function FAQs() {
  const [faqs, setFaqs] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/api/faqs`, { headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const raw = await res.json();
        const normalized = (Array.isArray(raw) ? raw : []).map((x, i) => ({
          id: x.id ?? x.faqId ?? i,
          question: x.question ?? x.title ?? "Untitled",
          answer: x.answer ?? x.content ?? x.description ?? "",
        }));
        if (alive) {
          setFaqs(normalized);
          setOpenId(normalized[0]?.id ?? null);
        }
      } catch (e) {
        if (alive) setErr(e.message || "Något gick fel");
      } finally {
        if (alive) setLoading(false);
      }
    }
    load();
    return () => {
      alive = false;
    };
  }, []);

  const toggle = (id) => setOpenId((curr) => (curr === id ? null : id));

  if (loading) {
    return (
      <section className="faq-section">
        <div className="faq-container">
          <p className="loading-text">Laddar FAQs...</p>
        </div>
      </section>
    );
  }
  if (err) {
    return (
      <section className="faq-section">
        <div className="faq-container">
          <p className="error-text">Fel: {err}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <p className="faq-label">FAQs</p>
          <h2 className="faq-title">Frequently Ask Questions</h2>
          <p className="faq-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="faq-right">
          {faqs.length === 0 && (
            <div className="faq-item">
              <div className="faq-answer faq-answer-open">
                <p>Inga frågor hittades just nu.</p>
              </div>
            </div>
          )}

          {faqs.map((f) => {
            const isOpen = openId === f.id;
            return (
              <div key={f.id} className={`faq-item ${isOpen ? "faq-item-yellow" : ""}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(f.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${f.id}`}
                  id={`tab-${f.id}`}
                  role="tab"
                >
                  <span>{f.question}</span>
                  <span className={`faq-icon ${isOpen ? "open" : ""}`}>{isOpen ? "▲" : "▼"}</span>
                </button>

                <div
                  id={`panel-${f.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${f.id}`}
                  className={`faq-answer ${isOpen ? "faq-answer-open" : ""}`}
                >
                  <p>{f.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}