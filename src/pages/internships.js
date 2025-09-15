import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";  // ✅ For navigation

// Import images
import reactImg from '../assets/images/bg-imges/react.jpg';
import backendImg from '../assets/images/bg-imges/backend.jpg';
import dsImg from '../assets/images/bg-imges/datascience.jpg';
import csImg from '../assets/images/bg-imges/cyber.jpg';
import mdaImg from '../assets/images/bg-imges/mobile.jpg';
import ccImg from '../assets/images/bg-imges/could.jpg';
import doImg from '../assets/images/bg-imges/devops.jpg';
import uiuxImg from '../assets/images/bg-imges/uxui.jpg';
import mlImg from '../assets/images/bg-imges/machine.jpg';
import fsdImg from '../assets/images/bg-imges/fullstack.jpg';
import dbmsImg from '../assets/images/bg-imges/dbms.jpg';

const internships = [
  { id: 1, name: 'React Developer', image: reactImg, link: '#', description: 'Work on modern React projects and contribute to real-world applications.' },
  { id: 2, name: 'Backend Developer', image: backendImg, link: '#', description: 'Node.js, Express, and API development with hands-on backend challenges.' },
  { id: 3, name: 'Data Science Intern', image: dsImg, link: '#', description: 'Explore data, build models, and learn the basics of analytics and ML.' },
  { id: 4, name: 'Cybersecurity Trainee', image: csImg, link: '#', description: 'Learn the essentials of keeping systems secure with practical labs.' },
  { id: 5, name: 'Mobile App Intern', image: mdaImg, link: '#', description: 'Participate in designing and building Android/iOS mobile apps.' },
  { id: 6, name: 'Cloud Computing Intern', image: ccImg, link: '#', description: 'Work with AWS/Azure to provision, deploy, and manage scalable cloud solutions.' },
  { id: 7, name: 'DevOps Intern', image: doImg, link: '#', description: 'Work with AWS/Azure to provision, deploy, and manage scalable cloud solutions.' },
  { id: 8, name: 'UI/UX Designer', image: uiuxImg, link: '#', description: 'Design user-friendly interfaces' },
  { id: 9, name: 'Machine Learning Engineer', image: mlImg, link: '#', description: 'Build intelligent systems' },
  { id: 10, name: 'Full Stack Developer', image: fsdImg, link: '#', description: 'End-to-end web development' },
  { id: 11, name: 'Database Administrator', image: dbmsImg, link: '#', description: 'Manage and optimize databases' },
];

const cardStyle = {
  background: '#fff',
  borderRadius: '18px',
  boxShadow: '0 4px 24px 0 rgba(30,60,150,0.09)',
  padding: '28px 22px 32px',
  textAlign: 'center',
  minWidth: 290,
  maxWidth: 370,
  flex: '1 1 290px',
  margin: '0 0 32px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const imgStyle = {
  width: '100%',
  maxWidth: 240,
  height: 130,
  objectFit: 'cover',
  borderRadius: '10px',
  marginBottom: 22,
  background: "#e3f2fd",
  boxShadow: '0 2px 10px #1565c018'
};

const linkStyle = {
  color: '#047bfbff',
  fontWeight: 600,
  fontSize: '1.13rem',
  marginBottom: 8,
  marginTop: 0,
  textDecoration: 'underline',
  cursor: 'pointer',
  display: 'block',
};

const descStyle = {
  color: '#555f6dff',
  fontSize: '1rem',
  margin: '0 auto 18px auto',
  minHeight: 48,
  maxWidth: 280,
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.10, backgroundColor: "#1883f7", transition: { duration: 0.15 } },
  tap: { scale: 0.95 }
};

// Framer-motion variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      when: "beforeChildren",
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", duration: 0.4 } },
  hover: { scale: 1.04, boxShadow: "0 8px 30px rgba(24,131,247,0.12)" }
};

export default function InternshipList() {
  const navigate = useNavigate(); // ✅ Navigation hook

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ minHeight: '100vh', background: '#c3e1ffff' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          background: 'linear-gradient(90deg, #00bbffff, #00d9ffff 90%)',
          padding: '64px 0 48px 0',
          textAlign: 'center'
        }}
      >
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '12px',
          letterSpacing: '.03em'
        }}>
          Our Internships
        </h1>
        <p style={{
          color: '#f8fbfe',
          fontSize: '1.18rem',
          maxWidth: 700,
          margin: '0 auto'
        }}>
          Discover hands-on internships designed to help you gain real skills and launch yourself.
        </p>
      </motion.div>
      
      {/* Cards Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '36px',
        maxWidth: 1200,
        margin: '-70px auto 0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 2,
      }}>
        {internships.map(({ id, image, name, link, description }) => (
          <motion.div
            key={id}
            style={cardStyle}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <img src={image} alt={name} style={imgStyle} />
            <a href={link} style={linkStyle}>{name}</a>
            <div style={descStyle}>{description}</div>

            {/* Apply Now Button */}
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate("/login")} // ✅ Redirects to /login
              style={{
                marginTop: 'auto',
                padding: '10px 24px',
                backgroundColor: '#00b5f7ff',
                color: 'white',
                border: 'none',
                borderRadius: 25,
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: '.02em',
                boxShadow: '0 2px 12px rgba(1, 133, 214, 0.13)',
                cursor: 'pointer',
                outline: 'none',
                transition: 'background .2s',
              }}
            >
              Apply Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
