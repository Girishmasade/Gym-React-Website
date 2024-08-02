import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Footer from './components/Footer/Footer';
import About from './Pages/About';
import Services from './Pages/Services';
import Trainner from './Pages/Trainner';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/trainner' element={<Trainner/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
