import React from 'react';
import './Footer.css'; // Create a custom CSS file for the footer styles
import aicteLogo from '../assets/images/aicte.png'; 
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/img/technohub-logo.png" alt="technohub" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h4>Site Map</h4>
          <ul className="footer-list">
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About us</a></li>
            <li><a href="contact.html">Contact us</a></li>
            <li><a href="#">Google Map</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Address</h4>
          <p>#131A, 1st floor, 80 Feet Rd, RMV 2nd stage<br />
            MET Layout, Ashwath Nagar, Sanjaynagar, Bengaluru-94.
          </p>
          <p>Phone: 9849175588</p>
          <p>Email: shameer@technohubtrainings.com</p>
        </div>
        {/* <div className="aicte-logo-mobile ">
        <img src={aicteLogo} alt="AICTE Logo" className="footer-aicte-logo" />
      </div> */}
      </div>
     
     
    </footer>
  );
}

export default Footer;
