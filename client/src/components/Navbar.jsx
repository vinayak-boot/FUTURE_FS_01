import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <h1 className="navbar-logo">
                        <i className="ri-code-s-slash-line"></i> Personal Portfolio
                    </h1>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={isOpen ? 'bar open' : 'bar'}></div>
                    <div className={isOpen ? 'bar open' : 'bar'}></div>
                    <div className={isOpen ? 'bar open' : 'bar'}></div>
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#home" className="nav-links" onClick={toggleMenu}>
                            <i className="ri-home-4-line"></i> Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={toggleMenu}>
                            <i className="ri-user-3-line"></i> About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-links" onClick={toggleMenu}>
                            <i className="ri-briefcase-line"></i> Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links" onClick={toggleMenu}>
                            <i className="ri-mail-send-line"></i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
