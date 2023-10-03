import React from 'react'
import './index.css'
import Nav from '../Nav';
export default function Services() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted");
    }
  return (
    <div>
    <Nav/>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Message" />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
