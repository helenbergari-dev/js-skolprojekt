/**
 * Denna sida har förbättrats med AI som bollplank.
 * Slutlig kod är manuellt granskad av mig.
 */

import { useState } from "react";
import Hero from "../components/Hero.jsx";
import FindUs from "../components/FindUs.jsx";
import FAQs from "../components/FAQs.jsx";

const CONTACT_API = "https://win25-jsf-assignment.azurewebsites.net/api/contact";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Invalid email format";
    if (!values.message.trim() || values.message.trim().length < 5)
      next.message = "Message must be at least 5 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus({ type: "success", message: "Message sent successfully!" });
      setValues({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err); 
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Hero
        variant="about"
        title="Contact Us"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        welcome=""
        buttonText=""
        showImage={false}
      />

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <p className="eyebrow">Get in Touch</p>
            <h2 className="contact-h2">Get Personalized Assistance – Contact Us</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
              mattis, pulvinar dapibus leo.
            </p>
            <div className="contact-placeholder" aria-hidden="true" />
          </div>

          <form className="contact-form card" onSubmit={handleSubmit} noValidate>
            <div className="form-grid-2">
              <label className={`mini-label ${errors.name ? "has-error" : ""}`}>
                <span>Your Name *</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={values.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </label>

              <label className={`mini-label ${errors.email ? "has-error" : ""}`}>
                <span>Email *</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </label>
            </div>

            <div className="form-grid-2">
              <label className="mini-label">
                <span>Telephone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telephone"
                  value={values.phone}
                  onChange={handleChange}
                  className="input"
                />
              </label>

              <label className="mini-label">
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help you"
                  value={values.subject}
                  onChange={handleChange}
                  className="input"
                />
              </label>
            </div>

            <label className={`mini-label ${errors.message ? "has-error" : ""}`}>
              <span>Comments / Questions *</span>
              <textarea
                name="message"
                rows="7"
                placeholder="Comments"
                value={values.message}
                onChange={handleChange}
                className="textarea"
                required
              />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </label>

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Submitting…" : "Submit"}
            </button>

            {status.type !== "idle" && (
              <p
                className={
                  status.type === "success"
                    ? "status success"
                    : status.type === "error"
                    ? "status error"
                    : "status"
                }
                role="status"
                aria-live="polite"
                style={{ marginTop: 8 }}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>

      <FindUs />
      <FAQs />
    </>
  );
}