import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footername-wrapper">
          <p className="footername">Katri Lindvall</p>
        </div>
        <div className="links-section">
          <ul>
            <li>
              <Link className="footerlinks" to="/">
                Etusivu
              </Link>
            </li>
            <li>
              <Link className="footerlinks" to="/about">
                Minusta
              </Link>
            </li>

            <li>
              <Link className="footerlinks" to="/workexperience">
                Työkokemus
              </Link>
            </li>
            <Link className="footerlinks" to="/studies">
              Koulutus
            </Link>
          </ul>
        </div>

        <div className="social-icons">
          <a
            href="mailto:lindvallkatri@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-icon"
          >
            <FontAwesomeIcon icon={faEnvelope} size="1x" className="icon" />
          </a>
          <a
            href="https://fi.linkedin.com/in/katri-lindvall-3bb3b356"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" className="icon" />
          </a>
          <a
            href="https://github.com/KatriLin"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" className="icon" />
          </a>
          <a
            href="tel:+358442977058"
            target="_blank"
            rel="noopener noreferrer"
            className="phone-icon"
          >
            <FontAwesomeIcon icon={faPhone} size="1x" className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-divider">
        <div className="footer-bottom">
          <div className="white-line"></div>
          <p className="copyright">@Katri Lindvall 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
