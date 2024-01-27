import React, { useRef } from 'react';
import './index.css'
import emailjs from '@emailjs/browser'
import freeconsultation from "../pictures/free-consultation.jpg"

export default function Promotion() {
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
    <div className='promotion'>
      <div className='promotion-main'>
       <h1>Free Consultation</h1>
        <p className='form-note'>For one hour free consultation, please fill in the form below and we will get back to you as soon as possible.</p>
        <img src={freeconsultation} alt='free-consultation'/>
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
  )
}
