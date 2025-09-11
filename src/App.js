import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './commponets/Navbar';
<<<<<<< HEAD
//  import Footer from './commponets/Footer';
=======
import Footer from './commponets/Footer';
>>>>>>> c4ff8cc8f517377667953ccbaade2551355bd0c2
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Coursers';
import Gallery from './pages/Gallery';
import Contact from './pages/Countact';
import CopyRight from './commponets/Copyrights';
// import WhatsappButton from './commponets/WhatsappButton';
import Courses from './pages/Coursers';
import Login from './pages/Login';
import Register from './pages/Register';   // ✅ Import Registern

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
        <Route path="/register" element={<Register />} /> {/* ✅ Registration route */}
      </Routes>
      { <Footer /> }
      <CopyRight />
       {/* <WhatsappButton />  */}
    </BrowserRouter>
  );
};

export default App;