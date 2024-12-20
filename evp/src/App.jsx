


import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Desktop1 from './components/Desktop1'

import Desktop4 from './components/Desktop4'
import Desktop5 from './components/Desktop5'
import Desktop6 from './components/Desktop6'
import Desktop7 from './components/Desktop7'

import Desktop3 from './components/Desktop3'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Desktop2 from './components/Desktop2';
import Home from './components/Home';




const App = () => {
  return (
    <>

      <div>
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/desktop4" element={<Desktop4 />} />
        <Route path="/desktop5" element={<Desktop5 />} />
        <Route path="/desktop6" element={<Desktop6 />} />
        <Route path="/desktop7" element={<Desktop7 />} />
        <Route path="/desktop1" element={<Desktop1 />} />
        <Route path="/desktop2" element={<Desktop2 />} />
        <Route path="/desktop3" element={<Desktop3 />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>



      </div>

    </>

  )
}

export default App

