import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import logo from '../Home/logo.png';


export default function Nav() {
  return (
    <div className='navBar'>
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
     
      <li><Link to="/">
      <i className="fa fa-home"></i>
    </Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/about">About us</Link></li>
      <li><button><Link to="/contact">Get in touch</Link></button></li>
      

    </div>
  )
}
