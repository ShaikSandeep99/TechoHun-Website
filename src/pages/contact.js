import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  // ✅ Your EmailJS credentials
  const SERVICE_ID = 'service_1t0xfyn';
  const TEMPLATE_ID = 'template_m6nsz9y';
  const PUBLIC_KEY = 'zbszqJVErV_pbyOsB';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("✅ Your message has been sent successfully!");
          form.current.reset();

          // Hide message after 3 seconds
          setTimeout(() => setStatusMessage(""), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("❌ Oops! Something went wrong. Please try again.");
          setTimeout(() => setStatusMessage(""), 3000);
        }
      );
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Get in Touch with Technohub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We'd love to hear from you! Feel free to reach out with <br /> 
            any questions or inquiries.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        className="contact-form-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 6 }}
      >
        <div className="container">
          <motion.h2 
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h2>

          <motion.form 
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="from_name" 
                placeholder="your Name" 
                className="form-control" 
                required 
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="from_email" 
                placeholder="your Email" 
                className="form-control" 
                required 
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message" 
                placeholder="Your Message" 
                className="form-control" 
                required
              ></textarea>
            </div>

            <motion.button 
              type="submit" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Send Email
            </motion.button>
          </motion.form>

          {/* ✅ Success/Error message */}
          {statusMessage && (
            <motion.p 
              className="status-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ 
                color: statusMessage.includes('✅') ? 'green' : 'red', 
                marginTop: '15px', 
                textAlign: 'center' 
              }}
            >
              {statusMessage}
            </motion.p>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;




