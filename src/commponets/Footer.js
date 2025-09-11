import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/images/bg-imges/tchnohub logo.png"; // update your logo path

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
            <h4>QUICK LINKS</h4>
            <ul className="footer-list">
              <li><a href="/home">Home</a></li>
              <li><a href="/online-training">Online Training</a></li>
              <li><a href="/classroom-training">Classroom Training</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="footer-section">
            <h4>OUR POLICIES</h4>
            <ul className="footer-list">
              <li><a href="/pricing-policy">Pricing Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/refund">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section contact">
            <h4>CONTACT US</h4>
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

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="social-icons">
          <span>FOLLOW US :</span>
          <a href="https://chat.whatsapp.com/"><FaWhatsapp /></a>
          <a href="https://chat.whatsapp.com/"><FaInstagram /></a>
          <a href="https://chat.whatsapp.com/"><FaFacebook /></a>
          <a href="https://chat.whatsapp.com/"><FaLinkedin /></a>
          <a href="https://chat.whatsapp.com/"><FaYoutube /></a>
        </div>
        <p>© 2025 TECHNOHUB All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
