import React from 'react';
import './index.css';
import homenew from './Abbas-home.png';
import logohome from "./abbasLogo.png";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';



export default function Home() {
  
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
    <div className='flexhome'>
    <div className='main-home'>
        <div className='header-home'>    
    <img src={logohome} className="logo-home" alt="logo-home" />
    {/* <p><strong>Mobile:</strong>+44 078 9426 6018 <br></br> 
   <strong>Email:</strong> info@gulamabbasaccountants.co.uk</p> */}
   <TypeAnimation
  cursor={false}
  sequence={[ 'Count on Us for Financial Success – Your Numbers, Our Expertise!']}
  wrapper="h6"
  repeat={1}
  repeatDelay={2000}
  className='header-text-mobile'
/>
<TypeAnimation
  cursor={false}
  sequence={[ 'Count on Us for Financial Success – Your Numbers, Our Expertise!']}
  wrapper="h5"
  repeat={1}
  repeatDelay={2000}
  className='header-text-desktop'
/>

    {/* <h6 className='header-text-mobile'>"Count on Us for Financial Success – Your Numbers, Our Expertise!"</h6>
    <h5 className='header-text-desktop'>"Count on Us for Financial Success – Your Numbers, Our Expertise!"</h5> */}
    <div className='free-session-mobile'>
 <h6>One hour free consultation </h6>
 <button className='free-session-btn' ><Link to="/promotion" onClick={(e) => handleMenuItemClick(e, 'promotion')}>
         <i className="fas fa-about">Free Session</i>
        </Link></button>
 </div>
    <img src={homenew} className="home-min" alt="invoice-pictures" />
   
  
  

 <div className='free-session-desktop'>
 <h6>One hour free consultation </h6>
 <button className='free-session-btn' > <Link to="/promotion" onClick={(e) => handleMenuItemClick(e, 'promotion')}>
         <i className="fas fa-about">Free Session</i>
        </Link></button>
 </div>

 </div>   

    <img src={homenew}  className='home-img' alt='invoice-pictures'/>
    <img src={logohome}  className='logo-min' alt='logo-img'/>
    </div>

    
 
    </div>
  )
}
