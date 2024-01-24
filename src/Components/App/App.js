import React from 'react'
import './App.css';
import Services from '../Services/index';
import About from '../About';
import { ContactUs } from '../Contact';
import Home from '../Home';
import CookieConsent from 'react-cookie-consent';
import ACCA from '../Home/ACCA LOGO RED.png';
// import Nav from '../Nav';
import Promotion from '../FreeSession/index';
import BurgerMenu from '../Navburger/BurgerMenu';
import Nav from '../Nav';


export default function App() {
  return (
    <div className='App'>
<BurgerMenu />
<Nav />

    <div id='home'><Home/></div>
      <div id='services'><Services/></div>
    <div id='about'> <About/></div>
   <div id='contact'> <ContactUs/></div>
    <div id='promotion'><Promotion/></div>
    <footer className='footer-home'>
  <img src={ACCA} alt='acca logo'/>
  <p className='footer-text'>© 2023 Gulamabass & Co. All rights reserved.<br></br> <a href="/privacy">Privacy policy</a> | Design by Ahammed Saad </p>
  </footer>
    <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton={true}
        cookieName="myCookieConsent"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        declineButtonStyle={{ color: 'white', fontSize: '13px' }}
      >
        This website uses cookies to enhance the user experience. More info <a style={{color:'gold', textDecoration:'none'}} href="/privacy">here</a>.
      </CookieConsent>
    </div>
  )
}
