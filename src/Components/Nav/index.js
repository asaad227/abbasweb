import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'




export default function Nav() {
  const handleMenuItemClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 75,
        behavior: 'smooth',
      });
    }
  }
  return (
    <div className='navBar'>
     

        <Link to="/" onClick={(e) => handleMenuItemClick(e, 'home')}>
        <i className="fas fa-home"></i>
        </Link>
        <Link to="/services" onClick={(e) => handleMenuItemClick(e, 'services')}>
         <i className="fas fa-services">Services</i>
        </Link>

        <Link to="/about" onClick={(e) => handleMenuItemClick(e, 'about')}>
         <i className="fas fa-about">About</i>
        </Link>
        <Link to="/contact" onClick={(e) => handleMenuItemClick(e, 'contact')}>
         <i className="fas fa-contact">Contact</i>
        </Link>
      
        </div>
 
    


  )
}
