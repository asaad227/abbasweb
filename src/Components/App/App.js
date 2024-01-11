import React from 'react'
import './App.css';
import Home from '../Home';
import Services from '../Services';
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
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    </div>
  )
}
