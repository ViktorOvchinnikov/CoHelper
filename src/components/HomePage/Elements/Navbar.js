import React, { useState, useEffect } from 'react';
import { Button } from '../../Button.js';
import { Link } from 'react-router-dom';
import '../../MainPage/Styles/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // const handleClick = () => setClick(!click);
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
            <nav id="" className='navbar-auth'>
                <div className='navbar-container-auth'>
                    <a href="/homepage" className='navbar-logo-auth' onClick={closeMobileMenu}>
                        CoHelper
                        <i className="fas fa-comments-dollar"></i>
                    </a>
                    
                    <ul className='nav-menu-auth'>
                        <li className='navbar-logo-auth'>
                            <i className="fas fa-bell"></i>
                        </li>
                        <li className='navbar-logo-auth'>
                            <i className="fas fa-comments"></i>
                        </li>
                                            
                    </ul>
                    <div className='into-btn-auth'><Link to='/'>{button && <Button buttonStyle='btn--outline'>Выйти</Button>}</Link></div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
