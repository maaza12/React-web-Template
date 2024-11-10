import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = ({ onHomeClick, onNewSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
//  this is header
  return (
    <header className="header">
      <h1 className="header-title">My App</h1>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/" className="nav-link" onClick={onHomeClick}>Menu</Link> {/* Changed to Link */}
          </li>
          <li className="nav-item">
            <Link to="#about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
          {/* New Menu Item */}
        </ul>

        <i className="fas fa-search icon" title="Search"></i>
        <i className="fas fa-shopping-cart icon" title="Cart"></i>

        {/* Burger Icon for small screens */}
        <i 
          className={`fas fa-bars burger-icon ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu} 
          title="Menu"
        ></i>
      </nav>
    </header>
  );
};

export default Header;
