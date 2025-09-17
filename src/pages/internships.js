import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Images (check your filenames; “could.jpg” → likely “cloud.jpg”)
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

// ---------------------- Theme & shared styles ----------------------
const theme = {
  bg: "#fff",
  brand: "#0d47a1",
  brand2: "#0d47a1",
  brandDark: "#1883f7",
  link: "#047bfb",
  text: "#1f2937",
  muted: "#566070",
  cardBg: "#ffffff",
  shadowSm: "0 2px 10px rgba(21,101,192,.12)",
  shadowMd: "0 4px 24px rgba(30,60,150,.10)",
  shadowLg: "0 8px 30px rgba(24,131,247,.16)",
};

const internships = [
  { id: 1, name: "React Developer", image: reactImg, description: "Work on modern React projects and contribute to real-world applications." },
  { id: 2, name: "Backend Developer", image: backendImg, description: "Node.js, Express, and API development with hands-on backend challenges." },
  { id: 3, name: "Data Science Intern", image: dsImg, description: "Explore data, build models, and learn the basics of analytics and ML." },
  { id: 4, name: "Cybersecurity Trainee", image: csImg, description: "Learn the essentials of keeping systems secure with practical labs." },
  { id: 5, name: "Mobile App Intern", image: mdaImg, description: "Participate in designing and building Android/iOS mobile apps." },
  { id: 6, name: "Cloud Computing Intern", image: ccImg, description: "Work with AWS/Azure to provision, deploy, and manage scalable cloud solutions." },
  { id: 7, name: "DevOps Intern", image: doImg, description: "CI/CD, containers, monitoring, and release automation in real projects." }, // ← not duplicated copy
  { id: 8, name: "UI/UX Designer", image: uiuxImg, description: "Design user-friendly interfaces with wireframes, prototypes, and usability tests." },
  { id: 9, name: "Machine Learning Engineer", image: mlImg, description: "Build intelligent systems and experiment with model training & evaluation." },
  { id: 10, name: "Full Stack Developer", image: fsdImg, description: "End-to-end web development across frontend, backend, and deployment." },
  { id: 11, name: "Database Administrator", image: dbmsImg, description: "Manage and optimize databases, backups, and performance tuning." },
];

// ---------------------- Motion variants ----------------------
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", duration: 0.45 } },
  hover: { scale: 1.03, boxShadow: theme.shadowLg },
};

// ---------------------- Motion variants ----------------------
const buttonVariants = {
  rest: { 
    scale: 1,
    backgroundColor: theme.brand 
  },
  hover: { 
    scale: 1.06, 
    backgroundColor: "#47bdf4ff",  
    transition: { duration: 0.2 } 
  },
  tap: { scale: 0.96 },
};


// ---------------------- Component ----------------------
export default function InternshipList() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ minHeight: "100vh", background: theme.bg , marginBottom: "40px"}}
    >
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        style={{
          background: `linear-gradient(90deg, ${theme.brand}, ${theme.brand2} 90%)`,
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: ".02em",
            marginBottom: 15,
          }}
        >
          Our Internships
        </h1>
        <p
          style={{
            color: "#eef7ff",
            fontSize: "1.12rem",
            margin: "2px auto 0",
            maxWidth: 760,
            lineHeight: 1.5,
          }}
        >
          Discover hands-on internships designed to help you gain real skills and launch your career.
        </p>
      </motion.section>

      {/* Cards Grid */}
      <section
        style={{
          maxWidth: 1200,
          margin: "32px auto 0px",
          padding: "0 4px",
          
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "32px", // ← spacing between cards (no per-card margins)
           
          }}
        >
          {internships.map(({ id, image, name, description }) => (
            <motion.article
              key={id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              style={{
                background: theme.cardBg,
                borderRadius: 18,
                boxShadow: theme.shadowMd,
                padding: "22px 22px 26px",
                margin:15,
                textAlign: "center",
                minWidth: 280,
                maxWidth: 360,
                flex: "1 1 280px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={image}
                alt={name}
                loading="lazy"
                style={{
                  width: "100%",
                  height: 140,
                  maxWidth: 260,
                  objectFit: "cover",
                  borderRadius: 12,
                  marginBottom: 16,
                  background: "#e3f2fd",
                  boxShadow: theme.shadowSm,
                }}
              />

              {/* Title as a real heading for a11y */}
              <h3
                style={{
                  color: theme.text,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  margin: "4px 0 6px",
                }}
              >
                {name}
              </h3>

              <p
                style={{
                  color: theme.muted,
                  fontSize: "0.98rem",
                  margin: "0 0 16px",
                  minHeight: 52, // keeps rows aligned without forcing huge heights
                  maxWidth: 300,
                  lineHeight: 1.45,
                }}
              >
                {description}
              </p>

              {/* CTA */}
              <motion.button
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                type="button"
                onClick={() => navigate("/auth")}
                style={{
                  marginTop: "auto",
                  padding: "10px 22px",
                  backgroundColor: theme.brand,
                  color: "#fff",
                  border: "none",
                  borderRadius: 24,
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: ".02em",
                  boxShadow: "0 2px 12px rgba(1,133,214,.18)",
                  cursor: "pointer",
                  outline: "none",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate("/login");
                  }
                }}
              >
                Apply Now
              </motion.button>
            </motion.article>
          ))}
        </div>
      </section>


    </motion.div>
  );
}
