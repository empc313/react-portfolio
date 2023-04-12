

import React from 'react';

import Home from './components/Home'
import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import Portfolio from './components/Portfolio';
// import NavTabs from './components/NavTabs';


 export default function App() {
    return(
        <>
        <Router>
            <NavTabs/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
        </Router> 
    </>
    )
} 

