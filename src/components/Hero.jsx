/**
 * Denna fil har förbättrats med AI som bollplank.
 * Slutlig kod är manuellt anpassad av mig.
 */

export default function Hero({
  title = "Space Simplified, Storage Perfected",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.",
  welcome = "Welcome to StorAid",
  buttonText = "Discover More",
  buttonLink = "/about",
  showImage = true,
  variant = "home",
}) {
  return (
    <div className={`hero-section hero--${variant}`}>
      <div className="hero-content">
        <div className="hero-texts">
          {welcome && <p className="hero-welcome">{welcome}</p>}
          <h1 className="hero-title">{title}</h1>
          <p className="hero-text">{subtitle}</p>

          {buttonText && (
            <a href={buttonLink} className="hero-btn">
              <img src="/Booknow.svg" alt={buttonText} className="hero-btn-img" />
              <span className="hero-btn-text">{buttonText}</span>
            </a>
          )}
        </div>

        {showImage && <img src="/Him.svg" alt="Person ikon" className="hero-img" />}
      </div>
    </div>
  );
}