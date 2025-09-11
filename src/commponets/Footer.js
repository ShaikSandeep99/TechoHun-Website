import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin,  FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/images/bg-imges/tchnohub logo.png"; 
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      {/* Top Footer */}
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Left Section - Logo + About */}
          <div className="footer-section about">
            <img src={logo} alt="Technohub Logo" className="footer-logo" />
            <p>
              TechnoHub empowers tech learners with expert training and hands-on 
              experience. Our mission is to build a brighter tech future for everyone.
            </p>
          </div>

         {/* Quick Links */}
<div className="footer-section">
  <h5 style={{ color: "#E63946" }}>QUICK LINKS</h5>
  <ul className="footer-list">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/courses">Courses</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/internships">Internships</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
  </ul>
</div>

          {/* Policies */}
          <div className="footer-section">
            <h5 style={{ color: "#E63946" }}>OUR POLICIES</h5>
            <ul className="footer-list">
              <li>Pricing Policy</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section contact">
            <h5 style={{ color: "#E63946" }}>CONTACT US</h5>
            <p><FaPhone /> +91 9849175588</p>
            <p><FaEnvelope /> shameer@technohubtrainings.com</p>
            <p><FaMapMarkerAlt /> #131A, 1st floor, 80 Feet Rd, RMV 2nd stage MET Layout,  
               Ashwath Nagar, Sanjaynagar, Bengaluru-94.</p>
            <p>
              <a href="https://chat.whatsapp.com/" target="_blank" rel="noreferrer" className="whatsapp-link">
                Click Here To Join Our WhatsApp Group For Latest Updates
              </a>
            </p>
          </div>
        </div>
      </div>
{/* Social Media Section */}
<div
  className="footer-section social-icons"
  style={{
    textAlign: "center",
    backgroundColor: "#b8ecf3ff",
    padding: "10px 5px",
    margin: "0",
    width: "100%",
  }}
>
  <h4>FOLLOW US</h4>
  <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
    <a
      href="https://wa.me/919849175588"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black", fontSize: "20px" }}
    >
      <FaWhatsapp />
    </a>
    <a
      href="https://www.instagram.com/technohub_trainings/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black", fontSize: "20px" }}
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.facebook.com/yourpage"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black", fontSize: "20px" }}
    >
      <FaFacebook />
    </a>
    <a href="mailto:shameer@technohubtrainings.com" style={{ color: "black", fontSize: "20px" }}>
      <FaEnvelope />
    </a>
    <a
      href="https://www.linkedin.com/company/yourcompany"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black", fontSize: "20px" }}
    >
      <FaLinkedin />
    </a>
  </div>
  {/* Copyright */}
  <p style={{ marginTop: "15px", color: "#333", fontSize: "14px" }}>
    © 2012 TECHNOHUB All Rights Reserved.
  </p>
</div>

    </footer>
  );
};

export default Footer;