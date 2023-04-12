import React from 'react';

import Home from './src/components/pages/Home'
import About from './src/components/pages/About';
import Contact from './src/components/pages/Contact';



function App() {
    return(
        <>
        <Router>
            <NavTabs/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/' element={<Home />} />
            <Routes/>
        <Router/>
     </>
     </>
     </>
    )
} 