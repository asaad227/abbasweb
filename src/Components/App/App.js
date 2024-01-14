import React from 'react'
import './App.css';
import Services from '../Services/index';
import About from '../About';
import { Routes, Route } from 'react-router-dom';
import { ContactUs } from '../Contact';
import Test from '../test';
import CookieConsent from 'react-cookie-consent';
import Privacy from '../Privacy';


export default function App() {
  return (
    <div>
<Routes>
    <Route path='/' element={<Test/>}/>
    <Route path="*" element={<h1>404 Not Found</h1>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/privacy' element={<Privacy/>}/>
    </Routes>
    <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myCookieConsent"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      >
        This website uses cookies to enhance the user experience. More info <a href="/privacy">here</a>.
      </CookieConsent>
    </div>
  )
}
