import React, { useState } from 'react';
import './Navbar.css';
import menu_img from '../../assets/menu-bar.png';
import close_img from '../../assets/arrow.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close menu after scroll
  };

  return (
    <div className="navbar">
      <h1 className="jr">JR.</h1>

      {/* Toggle menu icon (only visible on mobile) */}
      <img
        src={menuOpen ? close_img : menu_img}
        alt="menu"
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => handleScroll('home')}>Home</li>
        <li onClick={() => handleScroll('about')}>About me</li>
        <li onClick={() => handleScroll('skills')}>Skills</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
        <li onClick={() => handleScroll('links')}>Profiles</li>
      </ul>

      <div className="nav-contact" onClick={() => handleScroll('contact')}>
        Connect with me
      </div>
    </div>
  );
};

export default Navbar;

