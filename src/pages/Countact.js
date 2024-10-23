import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch with Technohub</h1>
          <p>We'd love to hear from you! Feel free to reach out with any questions or inquiries.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <h2 className="text-center">Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your Message" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn-primary">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
