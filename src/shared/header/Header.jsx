import { Link } from "react-router-dom";
import capybaraIcon from "../assets/capybara-svgrepo-com.svg";
function Header() {
  return (
    <header className="main-header">
      <Link className="nav-link" to="/">
        <div className="header-container">
          <img src={capybaraIcon} alt="capybara icon" />
          Capybara Space
        </div>
      </Link>
      <NavBar />
    </header>
  );
}

function NavBar() {
  return (
    <nav className={`main-nav`}>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/signup">
        SignUp
      </Link>
      <Link className="nav-link nav-contact-button" to="/login">
        Login
      </Link>
    </nav>
  );
}
export default Header;
