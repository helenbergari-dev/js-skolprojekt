
export default function AboutUs() {
  return (
    <div className="white-section">
      <div className="white-content">
        <div className="gray-box">
          <div className="green-stats">
            <div className="stat">
              <h3>12+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>150K+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="stat">
              <h3>35+</h3>
              <p>Warehouse</p>
            </div>
          </div>
        </div>

        <div className="white-texts">
          <p className="yellow-subtitle">About us</p>
          <h2 className="white-title">Providing a Safe Space for Your Treasured Items</h2>
          <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>

          <div className="white-boxes">
            <div className="info-box">
              <h3>Vision</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
            </div>
            <div className="info-box">
              <h3>Mission</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
            </div>
          </div>

          <div className="cta-row">
            <a href="/about" className="hero-btn small-btn">
              <img src="/Booknow.svg" alt="Discover More" className="hero-btn-img" />
              <span className="hero-btn-text">Discover More</span>
            </a>

            <div className="mi">
              <span className="mi-phone-circle">
                <img src="/phone2.svg" alt="" className="mi-phone" />
              </span>
              <div className="mi-block">
                <h4>More Information</h4>
                <p className="mi-number">+46 8 123 122 44</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}