import { useState, useEffect } from 'react';
import logo from "../assets/logo_resized.png";
import { FaFacebook, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../css/Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Desktop View */}
        <div className="desktop-header">
          {/* Logo and Brand Name */}
          <div className="brand">
            <img src={logo} alt="RUM Network Logo" className="logo" />
            <div className="brand-text">
              <h1 className="brand-name">RUM NETWORK</h1>
              <p className="brand-tagline">Decentralized Future</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/roadmap" className="nav-link">Roadmap</Link>
            <Link to="/whitepaper" className="nav-link">Whitepaper</Link>
            <Link to="/features" className="nav-link">Features</Link>
          </nav>

          {/* Social Media and CTA */}
          <div className="social-container">
            <div className="social-icons">
              <a href="https://x.com/RumNetwork" className="social-icon xtwitter" aria-label="X (Twitter)">
                <FaXTwitter />
              </a>
              <a href="https://web.facebook.com/profile.php?id=61574861663584" className="social-icon facebook" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/rumnetwork/?hl=en" className="social-icon instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@RumNetwork-Official" className="social-icon youtube" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
            <button className="follow-button">Follow Us</button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="mobile-header">
          {/* Logo and Brand for Mobile */}
          <div className="brand">
            <img src={logo} alt="RUM Network Logo" className="logo" />
            <div className="brand-text">
              <h1 className="brand-name">RUM NETWORK</h1>
              <p className="brand-tagline">Decentralized Future</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/roadmap" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Roadmap</Link>
              <Link to="/whitepaper" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Whitepaper</Link>
              <Link to="/features" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Features</Link>
            </nav>

            <div className="mobile-social">
              <a href="https://x.com/RumNetwork" className="social-icon xtwitter" aria-label="X (Twitter)">
                <FaXTwitter />
              </a>
              <a href="https://web.facebook.com/profile.php?id=61574861663584" className="social-icon facebook" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/rumnetwork/?hl=en" className="social-icon instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@RumNetwork-Official" className="social-icon youtube" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>

            <div className="mobile-cta">
              <button className="follow-button">Follow Us</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;