import React from 'react'
import './App.css';
import Services from '../Services/index';
import About from '../About';
import { Routes, Route } from 'react-router-dom';
import { ContactUs } from '../Contact';
import Home from '../Home';
import CookieConsent from 'react-cookie-consent';
import Privacy from '../Privacy';

import Promotion from '../FreeSession';


export default function App() {
  return (
    <div className='App'>


<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="*" element={<h1>404 Not Found</h1>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/promotion' element={<Promotion/>}/>
    <Route path='/privacy' element={<Privacy/>}/>
    </Routes>
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
