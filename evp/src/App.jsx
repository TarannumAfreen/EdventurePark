


import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Desktop4 from './components/Desktop4'
import Desktop5 from './components/Desktop5'
import Desktop6 from './components/Desktop6'
import Desktop7 from './components/Desktop7'

import Desktop3 from './components/Desktop3'
import Navbar from './components/Navbar';
import Footer from './components/Footer';




const App = () => {
  return (
    <>

      <div>
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Desktop3 />} />
        <Route path="/desktop4" element={<Desktop4 />} />
        <Route path="/desktop5" element={<Desktop5 />} />
        <Route path="/desktop6" element={<Desktop6 />} />
        <Route path="/desktop7" element={<Desktop7 />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>



      </div>

    </>

  )
}

export default App

