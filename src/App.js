import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import NavTabs from './components/NavTabs';
import Header from './components/pages/header';
import Footer from './components/pages/footer';

 export default function App() {
    return(
        <>
        <Router>
            <NavTabs/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/footer' element={<Footer />} />
            <Route path='/header' element={<Header />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
        </Router> 
    </>
    )
} 

