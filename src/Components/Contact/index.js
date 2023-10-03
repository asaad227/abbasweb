import React, { useRef } from 'react';
import './index.css'
import emailjs from '@emailjs/browser'
import Nav from '../Nav';


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
    <Nav/>
    <form className='container-fluid' style={{width:500}}  ref={form} onSubmit={sendEmail}>
      <label className='form-label' style={{color:'white'}}>Name</label>
      <input className='form-control'  type="text" name="user_name" />
      <label className='form-label' style={{color:'white'}}>Email</label>
      <input className='form-control' type="email" name="user_email" />
      <label className='form-label' style={{color:'white'}}>Message</label>
      <textarea style={{height:200}} className='form-control' name="message" />
      <input type="submit" className='btn btn-primary btn-submit' value="Send" />
    </form>
    </div>
  );
};