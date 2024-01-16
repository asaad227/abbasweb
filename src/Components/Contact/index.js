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
        <h2 >Contact Us</h2>
        <p>For any enquiries, please fill in the form below and we will get back to you as soon as possible.</p>
        <img src={canary} alt='canary'/>
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