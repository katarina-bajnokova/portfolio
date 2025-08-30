import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-header__brand" to="/">
          Katarina Bajnoková
        </NavLink>
        <nav className="site-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
