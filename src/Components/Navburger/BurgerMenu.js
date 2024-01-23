import React, { useState } from 'react';
import './BurgerMenu.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import logo from "../Home/ACCA LOGO RED.png"

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 75,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  }

  return (
    <div className='menuBar'>
    <div className='acca-logo'>
        <Link to="https://www.accaglobal.com/gb/en/member/find-an-accountant/directory-of-member/results.html?isocountry=GB&FirstName=abbas&Surname=gulamabbas&Location=&inputcountrysuspended=&orgid=ACCA&orby=FNA&ipp=5&pn=1&hid=&requestcount=1"><img src={logo} alt='logo' /></Link>
      </div>
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className="menu">
        <ul>
        <li><Link to="/" onClick={(e) => handleMenuItemClick(e, 'home')}>
      <i className="fa fa-home"></i>
    </Link></li>
        <li><Link to="/services" onClick={(e) => handleMenuItemClick(e, 'services')}>Services</Link></li>
      <li><Link to="/about" onClick={(e) => handleMenuItemClick(e, 'about')}>About</Link></li>
      <li><Link to="/contact" onClick={(e) => handleMenuItemClick(e, 'contact')}>Contact</Link></li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default BurgerMenu;
