import React from "react";
import "../css/Footer.css";
// Import social media icons
import facebookIcon from "../assets/facebook-icon.png";
import xIcon from "../assets/x-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import youtubeIcon from "../assets/youtube-icon.png";
import rumLogo from "../assets/logo_resized.png";
import gmailIcon from "../assets/gmail-icon.png"; // Add Gmail icon import
import whatsappIcon from "../assets/whatsapp-icon.png"; // Add WhatsApp icon import
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top section with columns */}
        <div className="footer-content">
          {/* Column 1: About */}
          <div className="footer-column">
            <div className="footer-logo">
              <img src={rumLogo} alt="Rum Network Logo" />
              <h3>Rum Network</h3>
            </div>
            <p className="footer-description">
              Empowering users with decentralized networking and cryptocurrency mining solutions for a secure and profitable digital future.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/roadmap">Roadmap</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-column">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
               <li><Link to="/child-safety">Child Safety Standards</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li className="contact-item">
                <img src={gmailIcon} alt="Email" className="contact-icon" />
                <a href="mailto:official.rum.network@gmail.com">official.rum.network@gmail.com</a>
              </li>
              <li className="contact-item">
                <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
            </ul>
            
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://web.facebook.com/profile.php?id=61574861663584" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://x.com/RumNetwork" target="_blank" rel="noopener noreferrer">
                  <img src={xIcon} alt="X" />
                </a>
                <a href="https://www.instagram.com/rumnetwork/?hl=en" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="https://www.youtube.com/@RumNetwork-Official" target="_blank" rel="noopener noreferrer">
                  <img src={youtubeIcon} alt="YouTube" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Rum Network. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;