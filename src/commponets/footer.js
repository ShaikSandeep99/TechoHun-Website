import React from "react";
import "./footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
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
            <h5>QUICK LINKS</h5>
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
            <h5>OUR POLICIES</h5>
            <ul className="footer-list">
              <li>Pricing Policy</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section contact">
            <h5>CONTACT US</h5>
            <p><FaPhone /> +91 9849175588</p>
            <p><FaEnvelope /> shameer@technohubtrainings.com</p>
            <p><FaMapMarkerAlt /> #131A, 1st floor, 80 Feet Rd, RMV 2nd stage MET Layout,  
              Ashwath Nagar, Sanjaynagar, Bengaluru-94.</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <div className="social-icons">
            <a href="https://wa.me/919849175588" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/technohub_trainings/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="mailto:shameer@technohubtrainings.com">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/company/asar-it-technologies/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            © 2012 TECHNOHUB All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
