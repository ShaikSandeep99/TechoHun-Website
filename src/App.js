import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './commponets/navbar';
import Footer from './commponets/footer';

import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Industry from './pages/industry';
import Register from './pages/register';
import Internship from "./pages/Internships";
import Courses from './pages/courses';
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
        <Route path="/industry" element={<Industry />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/Internships" element={<Internship />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
