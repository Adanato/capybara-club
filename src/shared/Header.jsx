import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="main-header">
      <Link className="nav-link" to="/">
        <div className="header-container">
          <svg
            className="svg-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
            stroke="url(#gradient)"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b5bdb" />
                <stop offset="100%" stopColor="#845ef7" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
            />
          </svg>
          AdamNguyen.Dev
        </div>
      </Link>
      <button className="menu-icon" onClick={toggleMenu}>
        Menu
      </button>
      <NavBar isOpen={isOpen} />
    </header>
  );
}

NavBar.propTypes = {
  isOpen: PropTypes.bool,
};

function NavBar({ isOpen }) {
  return (
    <nav className={`main-nav ${isOpen ? "open" : ""}`}>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
      <Link className="nav-link nav-contact-button" to="/capybaras">
        Capybara
      </Link>
    </nav>
  );
}

export default Header;
