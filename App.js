import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import {Home} from './components/pages/Home';
import {Contact} from './components/pages/Contact';
import {About} from './components/pages/About';


function App() {
  return (
   <div className='App'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
   </div>
  );
}

export default App
