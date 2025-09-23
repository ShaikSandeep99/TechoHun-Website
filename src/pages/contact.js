import React from 'react';
import { motion } from "framer-motion";
import './contact.css';

const Contact = () => {
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
        transition={{ duration: 1 }}
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
            className="contact-form"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <label>Name</label>
              <input type="text" placeholder="Your Name" className="form-control" />
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <label>Email</label>
              <input type="email" placeholder="Your Email" className="form-control" />
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <label>Message</label>
              <textarea placeholder="Your Message" className="form-control"></textarea>
            </motion.div>

            <motion.button 
              type="submit" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
