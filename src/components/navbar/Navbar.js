import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo1.png';
import './Navbar.css';

const Menu = () => {
  return (
    <>
      <p>
        <a href='#home'>Accueil</a>
      </p>

      <p>
        <a href='#whatgpt3'>À propos</a>
      </p>

      <p>
        <a href='#possibility'>Services</a>
      </p>

      <p>
        <a href='#features'>Contact</a>
      </p>

      <p>
        <a href='#blog'>ff</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar'>
      <div className='section-center navbar__center'>
        <div className='navbar__links'>
          {/* Logo */}
          <div className='navbar__linksLogo'>
            <img src={logo} alt='gpt3 logo' />
          </div>

          {/* Links */}
          <div className='navbar__linksContainer'>
            <Menu />
          </div>

        
          {/* Mobile Menu */}
          <div className='navbar__menu'>
            {toggleMenu ? (
              <RiCloseLine
                color='#fff'
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color='#fff'
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}

            {toggleMenu && (
              <div className='navbar__menuContainer scale-up-center'>
                <div className='navbar__menuContainerLinks'>
                  <Menu />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
