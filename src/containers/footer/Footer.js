import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo1.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__center">
        <div className="footer__links">
          <div className="footer__linksLogo">
            <img src={logo} alt="logo" />
          </div>

          <div className="footer__link">
            <h4>Entreprise</h4>
            <p>À propos de nous</p>
            <p>Carrières</p>
            <p>Partenariats</p>
          </div>

          <div className="footer__link">
            <h4>Contact</h4>
            <p>123 Avenue Électrique, Ville Tech</p>
            <p>(+216) 22.830.811</p>
            <p>(+216) 72.287.463</p>

            <p>digitalelectronique@gmail.com</p>
          </div>

          <div className="footer__socials">
            <a href="https://www.facebook.com/people/Soci%C3%A9t%C3%A9-Digital-electrique/100090719380809" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className="footer__copyright">
      <p>Made with ❤️ by Bechir Lahoueg</p>
        &copy; {new Date().getFullYear()} Digital Electric. All rights deserved.
      </p>
    </div>
  );
};

export default Footer;
