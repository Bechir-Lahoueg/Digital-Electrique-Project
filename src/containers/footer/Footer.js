import logo from '../../assets/logo1.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='section-center footer__center'>
        <div className='footer__heading'>
          <h1 className='gradient__text'>
            Do you want to step in to the future before others
          </h1>
        </div>

        <div className='footer__btn'>
          <button>Get Early Access</button>
        </div>

        <div className='footer__links'>
          <div className='footer__linksLogo'>
            <img src={logo} alt='logo' />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

          <div className='footer__link'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>

          <div className='footer__link'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div className='footer__link'>
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>

        <p className='footer__copyright'>
          &copy; {new Date().getFullYear().toString()}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
