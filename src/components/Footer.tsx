import React from 'react';
import './Footer.css'; // Assuming you will create a CSS file for footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>GripRidersLuxury</h3>
                <p>Contact us: info@gripridersluxury.com</p>
                <div className="social-links">
                    <a href="https://facebook.com/gripridersluxury" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com/gripridersluxury" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://twitter.com/gripridersluxury" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <nav className="footer-nav">
                    <a href="/about">About Us</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;