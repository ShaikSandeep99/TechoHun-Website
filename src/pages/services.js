import React from 'react';
import { motion } from 'framer-motion';
// Import images
import certificate from "../assets/images/Industryrecognized.png";
import liveprojects from "../assets/images/srcproject.jpg";
import internshipImg from "../assets/images/srcintern1.jpeg";
import training from "../assets/images/srctraining.jpeg";
import onandofflearning from "../assets/images/blendedlearning.jpg";
import weeklyassignments from "../assets/images/weeklyexams.jpg";
import lifetimeaccess from "../assets/images/LTA1.jpg";

const servicesData = [
    {
        id: 1,
        image: certificate,
        title: "Industry Recognized Certificates",
        link: "#",
        description: "Earn certificates that are recognized by top tech companies to boost your career prospects."
    },
    {
        id: 2,
        image: liveprojects,
        title: "Real-world Projects",
        link: "#",
        description: "Work on real-world projects that simulate industry scenarios, enhancing your practical skills."
    },
    {
        id: 3,
        image: internshipImg,
        title: "Internship Opportunities",
        link: "#",
        description: "Gain hands-on experience through internships with leading tech firms and startups."
    },
    {
        id: 4,
        image: training,
        title: "Expert Training",
        link: "#",
        description: "Learn from industry experts through comprehensive training sessions and workshops."
    },
    {
        id: 5,
        image: onandofflearning,
        title: "Blended Learning",
        link: "#",
        description: "Enjoy the flexibility of both online and offline learning to suit your schedule."
    },
    {
        id: 6,
        image: weeklyassignments,
        title: "Weekly Assignments",
        link: "#",
        description: "Stay on track with regular assignments that reinforce your learning and understanding."
    },
    {
        id: 7,
        image: lifetimeaccess,
        title: "Lifetime Access",
        link: "#",
        description: "Get lifetime access to course materials and updates, ensuring you stay current in your field."
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
  color: '#1883f7',
  fontWeight: 600,
  fontSize: '1.13rem',
  marginBottom: 8,
  marginTop: 0,
  textDecoration: 'underline',
  cursor: 'pointer',
  display: 'block',
};

const descStyle = {
  color: '#555f6d',
  fontSize: '1rem',
  margin: '0 auto 18px auto',
  minHeight: 48,
  maxWidth: 280,
};

const buttonStyle = {
  marginTop: 'auto',
  padding: '10px 24px',
  backgroundColor: '#00B5F7',
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

export default function ServicesList() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ minHeight: '100vh', background: '#0080ffff' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          background: 'linear-gradient(90deg, #15bffe, #54e5ff 90%)',
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
          Our Services
        </h1>
        <p style={{
          color: '#f8fbfe',
          fontSize: '1.18rem',
          maxWidth: 700,
          margin: '0 auto'
        }}>
          Discover our hands-on services designed to help you gain real skills and launch your career.
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
        {servicesData.map(({ id, image, title, link, description }) => (
          <motion.div
            key={id}
            style={cardStyle}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <img src={image} alt={title} style={imgStyle} />
            <a href={link} style={linkStyle}>{title}</a>
            <div style={descStyle}>{description}</div>
            <motion.button
              style={buttonStyle}
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => alert(`Interested in ${title}`)}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
