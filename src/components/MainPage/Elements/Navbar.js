import React, { useState, useEffect } from 'react';
import { Button } from '../../Button.js';
import '../Styles/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav id="" className='navbar'>
        <div className='navbar-container'>
            <a href="" className='navbar-logo' onClick={closeMobileMenu}>
            CoHelper
            <i class="fas fa-comments-dollar"></i>
            </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href="#news" className='nav-links' onClick={closeMobileMenu}>Новости</a>
            </li>
            <li className='nav-item'>
                <a href="#about" className="nav-links" onClick={closeMobileMenu}>О платформе</a>
            </li>
            <li className='nav-item'>
              <a href="#FAQ" className="nav-links" onClick={closeMobileMenu}>FAQ</a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Войти</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
