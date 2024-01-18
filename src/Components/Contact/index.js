import React, { useRef } from 'react';
import './index.css'
import emailjs from '@emailjs/browser'
import BurgerMenu from '../Navburger/BurgerMenu';
import canary from "../pictures/canary-wharf.jpeg"



export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yz52h2j', 'template_lhtax6l', form.current, '0TrUO2PCatiT4SOjy')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <BurgerMenu />
      <div className='contact-main'>
      <div className='contact-info'>
          <h1>Contact Information</h1>
          <img src={canary} alt='canary'/>
          <h3>Phone & Email</h3>
          <p><strong> Mobile:</strong>+44 078 9426 6018 <br></br>
            <strong> Email:</strong> info@gulamabbasaccountants.co.uk</p>
          <h3>Address</h3>
          <p>Unit 7, Vulcan House, Restmor Way, Hackbridge, Surrey SM6 7AH</p>
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday - Sunday: Closed</p>
         
        <h3>Get in touch</h3>
        <p className='form-note'>For one hour free consultation or more enquiries, please fill in the form below and we will get back to you as soon as possible.</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label >Name</label>
          <input type="text" name="user_name" />
          <label  >Email</label>
          <input type="email" name="user_email" />
          <label >Message</label>
          <textarea style={{ height: 200 }} className='form-control' name="message" />
          <input type="submit" className='btn btn-primary btn-submit' value="Send" />
        </form>
        
   
      </div>

    </div>
  );
};