/**
 * Denna fil har förbättrats med AI som bollplank.
 * Slutlig kod är manuellt granskad av mig.
 */

export default function FindUs() {
  return (
    <section className="findus">
      <div className="findus__inner">
        <div className="findus__image">
          <img src="/her.svg" alt="Team illustration" />
        </div>

        <div className="findus__card">
          <h3 className="findus__title">Find Us On:</h3>
          <p className="findus__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <ul className="findus__list">
            <li className="findus__item">
              <img src="/Call Center.svg" alt="Call Center" />
            </li>
            <li className="findus__item">
              <img src="/Email Address.svg" alt="Email Address" />
            </li>
            <li className="findus__item">
              <img src="/location.svg" alt="Location" />
            </li>
          </ul>

          <div className="findus__social">
            <span className="findus__social-label">Our Social Media</span>
            <div className="findus__social-line" />
            <div className="findus__social-icons">
              <a href="#" className="sbtn" aria-label="Facebook">
                <img src="/Facebook.svg" alt="Facebook" />
              </a>
              <a href="#" className="sbtn" aria-label="X">
                <img src="/x.svg" alt="X" />
              </a>
              <a href="#" className="sbtn" aria-label="Instagram">
                <img src="/Instagram.svg" alt="Instagram" />
              </a>
              <a href="#" className="sbtn" aria-label="YouTube">
                <img src="/Youtube.svg" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}