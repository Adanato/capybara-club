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
      <button className="menu-icon">Menu</button>
    </header>
  );
}

export default Header;
