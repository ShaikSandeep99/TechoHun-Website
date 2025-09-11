import React from 'react';
import { motion } from 'framer-motion';

// Import images
import reactImg from '../assets/images/react.jpg';
import backendImg from '../assets/images/backend.jpg';
import dsImg from '../assets/images/ds.jpg';
import csImg from '../assets/images/cs.jpg';
import mdaImg from '../assets/images/mda.jpg';
import ccImg from '../assets/images/cc.jpg';
import doImg from '../assets/images/do1.jpg';
import uiuxImg from '../assets/images/uiux.jpg';
import mlImg from '../assets/images/ml.jpg';
import fsdImg from '../assets/images/fsd.jpg';
import dbmsImg from '../assets/images/dbms.jpg';

const internships = [
  {
    id: 1,
    name: 'React Developer',
    image: reactImg,
  
    description: 'Work on modern React projects and contribute to real-world applications.',
  },
  {
    id: 2,
    name: 'Backend Developer',
    image: backendImg,
    
    description: 'Node.js, Express, and API development with hands-on backend challenges.',
  },
  {
    id: 3,
    name: 'Data Science Intern',
    image: dsImg,
    
    description: 'Explore data, build models, and learn the basics of analytics and ML.',
  },
  {
    id: 4,
    name: 'Cybersecurity Trainee',
    image: csImg,
  
    description: 'Learn the essentials of keeping systems secure with practical labs.',
  },
  {
    id: 5,
    name: 'Mobile App Intern',
    image: mdaImg,
    
    description: 'Participate in designing and building Android/iOS mobile apps.',
  },
  {
    id: 6,
    name: 'Cloud Computing Intern',
    image: ccImg,
    
    description: 'Work with AWS/Azure to provision, deploy, and manage scalable cloud solutions.',
  },
  {
    id: 7,
    name: 'DevOps Intern',
    image: doImg,
    
    description: 'Work with AWS/Azure to provision, deploy, and manage scalable cloud solutions.',
  },
  {
    id: 8,
    name: 'UI/UX Designer',
    image: uiuxImg,
    
    description: 'Design user-friendly interfaces',
  },
  {
    id: 9,
    name: 'Machine Learning Engineer',
    image: mlImg,
    
    description: 'Build intelligent systems',
  },
  {
    id: 10,
    name: 'Full Stack Developer',
    image: fsdImg,
    
    description: 'End-to-end web development',
  },
  {
    id: 11,
    name: 'Database Administrator',
    image: dbmsImg,
    
    description: 'Manage and optimize databases',
  },
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

const buttonStyle = {
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

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.10, backgroundColor: "#1883f7", transition: { duration: 0.15 } },
  tap: { scale: 0.95 }
};

export default function InternshipList() {
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
            <motion.button
              style={buttonStyle}
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => alert(`Applied for ${name}`)}
            >
              Apply Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

