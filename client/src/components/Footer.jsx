import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Vinayak Soni. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/vinayak-soni-593273397/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/vinayak-boot" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:vinayaksoni446@gmail.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
