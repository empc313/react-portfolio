import React from 'react';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import NavTabs from './components/NavTabs';
import Footer from '../src/components/footer';
import Header from '../src/components/header'

 export default function App() {
    return(
           <>
           <Header/>
        <Router>
            <NavTabs/>
        <Routes>
        <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
        </Router>
        <Footer/>
    </>
    )
} 

