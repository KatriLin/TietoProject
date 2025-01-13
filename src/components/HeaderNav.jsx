import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/de/thumb/f/f8/Tietoevry_logo.svg/2560px-Tietoevry_logo.svg.png"
            alt="Tietoevry Logo"
            className="tietoevry-logo"
          />
        </div>
        <ul>
          <li>
            <Link className="navlinks" to="/">
              Etusivu
            </Link>
          </li>
          <li>
            <Link className="navlinks" to="/about">
              Minusta
            </Link>
          </li>
          <li>
            <Link className="navlinks" to="/workexperience">
              Työkokemus
            </Link>
          </li>
          <li>
            <Link className="navlinks" to="/studies">
              Koulutus
            </Link>
          </li>
        </ul>
        {/* Hamburger-menu */}
        <div
          className={`hamburger ${isHome ? "home" : ""} ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      {/* Hamburger-menu */}
      {menuOpen && (
        <div className={`dropdown-menu ${isHome ? "home" : "other"}`}>
          <ul className="overlay-menu">
            <li>
              <Link className="hamburgerlinks" to="/" onClick={toggleMenu}>
                Etusivu
              </Link>
            </li>
            <li>
              <Link
                className="hamburgerlinks"
                to="/workexperience"
                onClick={toggleMenu}
              >
                Työkokemus
              </Link>
            </li>
            <li>
              <Link className="hamburgerlinks" to="/about" onClick={toggleMenu}>
                Minusta
              </Link>
            </li>
            <li>
              <Link
                className="hamburgerlinks"
                to="/studies"
                onClick={toggleMenu}
              >
                Koulutus
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default HeaderNav;
