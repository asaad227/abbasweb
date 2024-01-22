import React from 'react'
import './index.css'
import { useState } from 'react'
import services from '../lib'

export default function Services() {
  const [libary,] = useState(services)
  return (


      <div className='services'>
        <h1>Services</h1>
        <p>Here at Gulamabbas & Co, we offer a wide range of services to help you and your business. We are always happy to discuss your requirements and tailor our services to your needs. Please see below for a list of services we offer.</p>
        {libary.map((e)=>{
          return(
            <div key={e.id} className='service'>
              
              <h3>{e.title}</h3>
              <img src={e.img} alt={e.alt}/>
             
            
              <p>{e.description}</p>
              
             
            </div>
          )
        })}
        </div>


  )
}
