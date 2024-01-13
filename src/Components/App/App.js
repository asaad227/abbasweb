import React from 'react'
import './App.css';
import Service from '../Services/service';
import Services from '../Services/index';
import About from '../About';

import { Routes, Route } from 'react-router-dom';
import { ContactUs } from '../Contact';
import Test from '../test';


export default function App() {
  return (
    <div>
<Routes>
    <Route path='/' element={<Test/>}/>
    <Route path="*" element={<h1>404 Not Found</h1>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    </div>
  )
}
