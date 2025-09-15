import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp icon

import Navbar from './commponets/navbar';
import Footer from './commponets/footer';

import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Industry from './pages/industry';
import Register from './pages/register';
import Internships from "./pages/internships";   // ✅ correct
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
        <Route path="/internships" element={<Internships  />} />
      </Routes>

      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210" // <-- replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "40px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          zIndex: 1000,
          textDecoration: "none",
        }}
      >
        <FaWhatsapp />
      </a>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
