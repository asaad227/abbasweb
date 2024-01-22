import React from 'react';
import './index.css'

import canary from "../pictures/canary-wharf.jpeg"



export const ContactUs = () => {



  return (

    <div className='contact-main'>
      <div className='contact-info'>
        <h1>Contact Information</h1>
        <img src={canary} alt='canary' />
        <h3>Phone & Email</h3>
        <p><strong> Mobile:</strong>+44 078 9426 6018 <br></br>
          <strong> Email:</strong> info@gulamabbasaccountants.co.uk</p>
        <h3>Address</h3>
        <p>Unit 7, Vulcan House, Restmor Way, Hackbridge, Surrey SM6 7AH</p>
        <h3>Opening Hours</h3>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday - Sunday: Closed</p>
      </div>


    </div>

  );
};