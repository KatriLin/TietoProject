import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      </nav>
    </div>
  );
};
export default HeaderNav;
