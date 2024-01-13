import React from 'react';
import './index.css';
import homenew from './Abbas-home.png';
import logohome from "./abbasLogo.png";
import { Link } from 'react-router-dom';

export default function Test() {
  return (
    <div className='flexhome'>
    <div className='main-home'>
        <div className='header-home'>    
    <img src={logohome} className="logo-home" alt="logo-home" />
    <h6 className='header-text-mobile'>"Count on Us for Financial Success – Your Numbers, Our Expertise!"</h6>
    <h6 className='header-text-desktop'>"Count on Us for Financial Success – Your Numbers, Our Expertise!"</h6>
    <div className='free-session-mobile'>
 <h6>One hour free consultation </h6>
 <button className='free-session-btn' ><Link to="/contact">click here</Link></button>
 </div>
    <img src={homenew} className="home-min" alt="invoice-pictures" />
   
  
  
 <div className='button-home'>
 <button className='button-about-us'><Link to="/about">About Us</Link></button>
 <button className='button-about-us'><Link to="/services">Services</Link></button>
 </div>
 <div className='free-session-desktop'>
 <h6>One hour free consultation </h6>
 <button className='free-session-btn' ><Link to="/contact">click here</Link></button>
 </div>

 </div>   

    <img src={homenew}  className='home-img' alt='invoice-pictures'/>
    <img src={logohome}  className='logo-min' alt='logo-img'/>
    </div>
  <footer className='footer-home'>
  <p className='footer-text'>© 2023 Gulamabass & Co. All rights reserved.</p>
  </footer>
    </div>
  )
}
