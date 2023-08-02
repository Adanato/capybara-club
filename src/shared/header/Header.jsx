import { Link } from "react-router-dom";
import { useState } from "react";

// Component Imports
import Aside from "./Aside";

// CSS imports
import "./Header.css";

// File imports
import capybaraIcon from "/src/assets/capybara-svgrepo-com.svg";
import menubar from "/src/assets/menu-bar.png";
import closemenubar from "/src/assets/menu-x.png";

// Page
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSideBarToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <header className="main-header">
      <Link className="nav-link" to="/">
        <div className="header-container">
          <img src={capybaraIcon} alt="capybara icon" />
          CSpace
        </div>
      </Link>
      <Aside handleSideBarToggle={handleSideBarToggle} isOpen={isOpen} />
      {isOpen ? (
        <>
          <img
            src={closemenubar}
            className="close-menu"
            onClick={handleSideBarToggle}
          />
        </>
      ) : (
        <img
          src={menubar}
          className="open-menu"
          onClick={handleSideBarToggle}
        />
      )}
      {/* <NavBar /> */}
    </header>
  );
}

// function NavBar() {
//   return (
//     <nav className={`main-nav`}>
//       <Link className="nav-link" to="/">
//         Home
//       </Link>
//       <Link className="nav-link" to="/about">
//         About
//       </Link>
//       <Link className="nav-link" to="/signup">
//         SignUp
//       </Link>
//       <Link className="nav-link nav-contact-button" to="/login">
//         Login
//       </Link>
//     </nav>
//   );
// }
export default Header;
