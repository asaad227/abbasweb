import React, { useState } from 'react';
import './BurgerMenu.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className="menu">
        <ul>
        <li><Link to="/">
      <i className="fa fa-home"></i>
    </Link></li>
        <li><Link to="/services">Services</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
