import React, { useState } from "react";

const advisors = [
  {
    name: "Dr. John Doe",
    role: "AI Research Expert",
    description: "Expert in artificial intelligence and deep learning applications.",
    details:
      "Dr. John Doe has worked on cutting-edge AI projects across healthcare, finance, and robotics. He advises Fortune 500 companies on deep learning adoption.",
    img: "/img/coursesname-images/javafullcourse.png"
  },
  {
    name: "Ms. Jane Smith",
    role: "Cybersecurity Specialist",
    description: "Leader in enterprise security solutions and data protection.",
    details:
      "Ms. Jane Smith has 15+ years in cybersecurity, specializing in enterprise solutions, ethical hacking, and regulatory compliance frameworks.",
    img: "/img/coursesname-images/AIML.png"
  },
  {
    name: "Mr. Robert Lee",
    role: "Cloud Architect",
    description: "Specialist in multi-cloud strategies and scalable infrastructures.",
    details:
      "Robert Lee has architected multi-cloud solutions for top tech companies, ensuring scalability, high availability, and cost efficiency.",
    img: "/img/coursesname-images/GenAI.png"
  },
  {
    name: "Dr. Emily Clark",
    role: "Data Scientist",
    description: "Experienced in analytics, predictive modeling, and AI-driven insights.",
    details:
      "Dr. Emily Clark is a senior data scientist who has published research papers in machine learning, and works on predictive modeling for global businesses.",
    img: "/img/coursesname-images/UIUX.png"
  }
];

export default function IndustryAdvisors() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Our Industry Advisors</h2>
      <div style={styles.container}>
        {advisors.map((advisor, index) => {
          const isExpanded = expanded === index;
          return (
            <div
              key={index}
              style={{
                ...styles.card,
                height: isExpanded ? "auto" : "330px",
                transform: isExpanded ? "scale(1.05)" : "scale(1)",
                zIndex: isExpanded ? 10 : 1,
                transition: "all 0.4s ease"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.08) translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = isExpanded ? "scale(1.05)" : "scale(1)")
              }
            >
              <img src={advisor.img} alt={advisor.name} style={styles.image} />
              <div style={styles.name}>{advisor.name}</div>
              <div style={styles.role}>{advisor.role}</div>
              <div style={styles.description}>{advisor.description}</div>
              {isExpanded && (
                <div style={styles.details}>{advisor.details}</div>
              )}
              <span onClick={() => toggleExpand(index)} style={styles.moreLink}>
                {isExpanded ? "SHOW LESS" : "MORE"}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const styles = {
  section: {
    textAlign: "center",
    padding: "50px 20px",
    background: "linear-gradient(135deg, #60bdcbff, #89e0ef)"
  },
  heading: {
    fontSize: "36px",
    marginBottom: "50px",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "2px 2px 5px rgba(0,0,0,0.3)"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    alignItems: "flex-start" // important to keep all cards aligned to top
  },
  card: {
  background: "#fff",
  padding: "25px 20px",
  width: "260px",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  transition: "all 0.4s ease",
  textAlign: "center",
  cursor: "pointer",
  transformStyle: "preserve-3d",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"  // <-- centers all children including the image
},
image: {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "contain",
  background: "#f0f0f0",
  padding: "5px",
  marginBottom: "15px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
},

  name: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "5px",
    color: "#333"
  },
  role: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px"
  },
  description: {
    fontSize: "13px",
    color: "#444",
    marginBottom: "20px"
  },
  details: {
    fontSize: "13px",
    color: "#222",
    marginTop: "10px",
    marginBottom: "15px",
    lineHeight: 1.5,
    textAlign: "left"
  },
  moreLink: {
    display: "inline-block",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#0077b6",
    cursor: "pointer",
    marginTop: "10px"
  }
};
