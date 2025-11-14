/**
 * Denna fil har förbättrats med AI som bollplank.
 * All slutlig kod är manuellt granskad av mig.
 */

import { useEffect, useState } from "react";

const API = "https://win25-jsf-assignment.azurewebsites.net/api/blogs";

export default function LatestBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(API);
        if (!res.ok) throw new Error("Kunde inte ladda bloggar");
        const data = await res.json();
        if (alive) setBlogs(Array.isArray(data) ? data : []);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return isNaN(date.getTime()) ? "" : date.toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <section className="blog-section">
        <div className="blog-container">
          <p className="loading-message">Laddar bloggar...</p>
        </div>
      </section>
    );
  }
  if (err) {
    return (
      <section className="blog-section">
        <div className="blog-container">
          <p className="error-message">Fel: {err}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <div className="header-left">
            <p className="blog-label">Latest Blog and News</p>
            <h2 className="blog-title">Check Out Our Latest Blog and News Update</h2>
          </div>
          <div className="header-right">
            <p className="blog-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui
              lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisl non sodales augue.
              Phasellus eget elit gravida.
            </p>
          </div>
        </div>

        <div className="blog-grid">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image">
                {blog.imageUrl ? <img src={blog.imageUrl} alt={blog.title} /> : <div className="image-placeholder" />}
              </div>

              <div className="blog-content">
                <div className="blog-date">
                  <span className="calendar-icon">📅</span>
                  <span>{formatDate(blog.published || blog.date)}</span>
                </div>

                <h3 className="blog-heading">{blog.title}</h3>

                <p className="blog-text">
                  {blog.content || blog.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                </p>

                <a href="#" className="read-more-link">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}