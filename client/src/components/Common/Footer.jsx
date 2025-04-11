import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../../styles/Navbar.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>&copy; 2025 Farm IT. All rights reserved.</p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
