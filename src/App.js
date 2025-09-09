import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './commponets/Navbar';
// import Footer from './commponets/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Coursers';
import Gallery from './pages/Gallery';
import Contact from './pages/Countact';
import CopyRight from './commponets/Copyrights';
import Courses from './pages/Coursers';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      {/* <Footer /> */}
      <CopyRight />
    </BrowserRouter>
  );
};

export default App;
