

import { Link, NavLink } from "react-router-dom";

export default function Mainbar() {
  return (
    <div className="mainbar">
      <div className="mainbar__inner">
        <Link to="/" className="mainbar__logo">
          <img src="/Storaid.svg" alt="StorAid" />
        </Link>

        <nav className="mainbar__menu">
          <NavLink to="/" end className={({ isActive }) => `mainbar__link ${isActive ? "is-active" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `mainbar__link ${isActive ? "is-active" : ""}`}>
            About Us
          </NavLink>
          <a href="/services" className="mainbar__link">Services</a>
          <NavLink to="/contact" className={({ isActive }) => `mainbar__link ${isActive ? "is-active" : ""}`}>
            Contact Us
          </NavLink>
        </nav>

        <Link to="/contact" className="booknow">
          <img src="/Booknow.svg" alt="" aria-hidden="true" className="booknow__img" />
          <span className="booknow__text">Book Now</span>
        </Link>
      </div>
    </div>
  );
}