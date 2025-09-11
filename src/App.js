import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './commponets/Navbar';
import Footer from './commponets/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/services';
import Gallery from './pages/Gallery';
import Contact from './pages/Countact';
import CopyRight from './commponets/Copyrights';
// import WhatsappButton from './commponets/WhatsappButton';
import Courses from './pages/Coursers';
import Login from'./pages/Login';

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
        <Route path="/auth" element={<Login />} />
      </Routes>
      { <Footer /> }
      <CopyRight />
       {/* <WhatsappButton />  */}
    </BrowserRouter>
  );
};

export default App;