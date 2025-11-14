/**
 * Denna fil har förbättrats med AI som bollplank.
 * All slutlig kod är manuellt skriven och granskad av mig.
 */

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      setError("E-postadress är obligatorisk.");
      setStatus("idle");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Ange en giltig e-postadress.");
      setStatus("idle");
      return;
    }

    setError("");
    setStatus("loading");

    try {
      
      await new Promise((r) => setTimeout(r, 500));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("fail");
      setError("Kunde inte skicka just nu. Försök igen senare.");
    }
  }

  return (
    <footer className="footer">
      <section className="footer-top">
        <div className="footer-container">
          <h2 className="footer-title">Subscribe Our Newsletter</h2>
          <p className="footer-subtitle">
            Subscribe to our newsletter to receive early discount offers, updates and info
          </p>

          <form onSubmit={handleSubmit} className="newsletter" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Enter your email *
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "newsletter-error" : undefined}
              className="newsletter-input"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              aria-busy={status === "loading" ? "true" : "false"}
              className="newsletter-btn"
            >
              {status === "loading" ? "Skickar…" : "Submit"}
            </button>

            {error && (
              <p id="newsletter-error" className="form-error" role="alert">
                {error}
              </p>
            )}
            {status === "success" && (
              <p className="form-success" role="status">
                Tack! Du är nu prenumerant.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="footer-bottom">
        <div className="footer-container footer-bottom-row">
          <small>© 2025 StorAid, All rights reserved.</small>
          <nav className="footer-links" aria-label="Legal">
            <a href="/terms">Terms &amp; Conditions</a>
            <span aria-hidden="true">•</span>
            <a href="/privacy">Privacy Policy</a>
          </nav>
        </div>
      </section>
    </footer>
  );
}