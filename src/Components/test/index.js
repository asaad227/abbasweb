import React from 'react';
import './index.css';
import homenew from './Abbas-home.png';
import logohome from "../Home/abbasLogo.png";
import { Link } from 'react-router-dom';

export default function Test() {
  return (
    <div>
    <div className='main-home'>
        <div className='header-home'>    
    <img src={logohome} className="logo-home" alt="logo-home" />
    <img src={homenew} className="home-min" alt="invoice-pictures" />
 <div className='button-home'>
 <button className='button-get-in' ><Link to="/contact">Get in touch</Link></button>
 <button className='button-about-us'><Link to="/about">About Us</Link></button>
 </div>
 </div>   
    <img src={homenew}  className='home-img' alt='invoice-pictures'/>
    <img src={logohome}  className='logo-min' alt='logo-img'/>

    </div>
  
    </div>
  )
}
