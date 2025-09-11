import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './commponets/Navbar';
import Footer from './commponets/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Countact';
import Industry from './pages/industry';
import Register from './pages/register';
import CopyRight from './commponets/Copyrights';
// import WhatsappButton from './commponets/WhatsappButton';
import Courses from './pages/Coursers';
import Login from './pages/login';


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
        <Route path="/industry" element={<Industry/>}/>
        <Route path="/courses" element={<Courses />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/auth" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* ✅ Registration route */}
      </Routes>
      { <Footer /> }
      <CopyRight />
       {/* <WhatsappButton />  */}
    </BrowserRouter>
  );
};

export default App;