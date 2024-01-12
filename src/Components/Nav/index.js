import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'



export default function Nav() {
  return (
    <div className='navBar'>
     
      <li><Link to="/">
      <i className="fa fa-home"></i>
    </Link></li>
      {/* <li><button><Link to="/services">Services</Link></button></li>
      <li><button><Link to="/about">About</Link></button></li>
      <li><button><Link to="/contact">Contact</Link></button></li>
       */}

    </div>
  )
}
