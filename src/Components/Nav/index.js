import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <div className='navBar'>
     
      <li><Link to="/">
      <i className="fa fa-home"></i>
      Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/about">About us</Link></li>
      <li><button><Link to="/contact">Contact</Link></button></li>
      

    </div>
  )
}
