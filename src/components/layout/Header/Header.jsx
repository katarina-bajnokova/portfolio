import { useEffect, useState } from "react";
import "./Header.scss";

export default function Header() {
  const [active, setActive] = useState("work");

  useEffect(() => {
    const update = () => {
      const hash = window.location.hash.replace("#", "");
      setActive(hash === "about" ? "about" : "work");
    };
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/">
          Katarina Bajnoková
        </a>
        <nav className="site-nav">
          <a href="#work" className={active === "work" ? "is-active" : ""}>
            Work
          </a>
          <a href="#about" className={active === "about" ? "is-active" : ""}>
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
