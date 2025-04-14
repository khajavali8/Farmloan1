import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";
import "../../styles/Navbar.css"; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">
        <div className="footer-left">
          <p>&copy; 2025 <strong>Farm IT</strong>. All Rights Reserved</p>
          <span>Designed by <a href="https://github.com/khajavali8/Farmloan1">Khajavali</a></span>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/healthofin-innovations-787148335/"><FaLinkedin /></a>
          </div>
          <a href="#" className="scroll-top"><FaArrowUp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
