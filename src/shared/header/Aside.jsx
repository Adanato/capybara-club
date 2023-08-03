import { Link } from "react-router-dom";

import "./Aside.css";

function Aside({ handleSideBarToggle, isOpen }) {
  console.log(isOpen);
  return (
    <>
      {/* Turns off closing div */}
      {isOpen && (
        <div className="closing-div" onClick={handleSideBarToggle}></div>
      )}
      <aside className={`aside-bar ${isOpen ? "open" : ""}`}>
        <nav className={`aside-nav`}>
          <Link className="aside-link" to="/">
            Home
          </Link>
          <Link className="aside-link" to="/about">
            About
          </Link>
          <Link className="aside-link" to="/facts">
            CapyFacts
          </Link>
          <Link className="aside-link" to="/pictures">
            Pictures
          </Link>
          <Link className="aside-link" to="/auth">
            Signup/Login
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
