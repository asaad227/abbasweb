import React from 'react'
import './index.css'
import BurgerMenu from '../Navburger/BurgerMenu'
import { useState } from 'react'
import services from '../lib'

export default function Services() {
  const [libary, setLibary] = useState(services)
  return (
    <div >
      <BurgerMenu />

      <div className='services'>
        <h1>Services</h1>
        <p>Here at Golamabbas & Co, we offer a wide range of services to help you and your business. We are always happy to discuss your requirements and tailor our services to your needs. Please see below for a list of services we offer.</p>
        {libary.map((e)=>{
          return(
            <div key={e.id} className='service'>
              <div className='service-container'>
            <h2>{e.title}</h2>
              <p>{e.description}</p>
              <img src={e.img} alt={e.alt}/>
              </div>
             
            </div>
          )
        })}
        </div>
    </div>

  )
}
