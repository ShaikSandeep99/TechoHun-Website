// import React, { useState, useEffect } from "react";

// const advisors = [
//   {
//     name: "Dr. John Doe",
//     role: "AI Research Expert",
//     description: "Expert in artificial intelligence and deep learning applications.",
//     details:
//       "Dr. John Doe has worked on cutting-edge AI projects across healthcare, finance, and robotics. He advises Fortune 500 companies on deep learning adoption.",
//     img: "/img/industry/akhila.jpeg"
//   },
//   {
//     name: "Ms. Jane Smith",
//     role: "Cybersecurity Specialist",
//     description: "Leader in enterprise security solutions and data protection.",
//     details:
//       "Ms. Jane Smith has 15+ years in cybersecurity, specializing in enterprise solutions, ethical hacking, and regulatory compliance frameworks.",
//     img: "/img/industry/shabeer.png"
//   },
//   {
//     name: "Mr. Robert Lee",
//     role: "Cloud Architect",
//     description: "Specialist in multi-cloud strategies and scalable infrastructures.",
//     details:
//       "Robert Lee has architected multi-cloud solutions for top tech companies, ensuring scalability, high availability, and cost efficiency.",
//     img: "/img/coursesname-images/GenAI.png"
//   },
//   {
//     name: "Dr. Emily Clark",
//     role: "Data Scientist",
//     description: "Experienced in analytics, predictive modeling, and AI-driven insights.",
//     details:
//       "Dr. Emily Clark is a senior data scientist who has published research papers in machine learning, and works on predictive modeling for global businesses.",
//     img: "/img/coursesname-images/UIUX.png"
//   }
// ];

// export default function IndustryAdvisors() {
//   const [expanded, setExpanded] = useState(null);

//   const toggleExpand = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       @keyframes industryFadeIn {
//         from { opacity: 0; transform: translateY(30px); }
//         to { opacity: 1; transform: translateY(0); }
//       }
//     `;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <section style={industryStyles.industrySection}>
//       <h2 style={industryStyles.industryHeading}>Our Industry Advisors</h2>
//       <div style={industryStyles.industryContainer}>
//         {advisors.map((advisor, index) => {
//           const isExpanded = expanded === index;
//           return (
//             <div
//               key={index}
//               style={{
//                 ...industryStyles.industryCard,
//                 height: isExpanded ? "auto" : "360px",
//                 transform: isExpanded ? "scale(1.05)" : "scale(1)",
//                 zIndex: isExpanded ? 10 : 1,
//                 transition: "all 0.4s ease"
//               }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.transform =
//                   "scale(1.08) translateY(-10px)")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.transform = isExpanded
//                   ? "scale(1.05)"
//                   : "scale(1)")
//               }
//             >
//               <div style={industryStyles.imageWrapper}>
//                 <img
//                   src={advisor.img}
//                   alt={advisor.name}
//                   style={industryStyles.industryImage}
//                 />
//               </div>
//               <div style={industryStyles.industryName}>{advisor.name}</div>
//               <div style={industryStyles.industryRole}>{advisor.role}</div>
//               <div style={industryStyles.industryDescription}>
//                 {advisor.description}
//               </div>
//               {isExpanded && (
//                 <div style={industryStyles.industryDetails}>
//                   {advisor.details}
//                 </div>
//               )}
//               <span
//                 onClick={() => toggleExpand(index)}
//                 style={industryStyles.industryMoreLink}
//               >
//                 {isExpanded ? "SHOW LESS" : "MORE"}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// const industryStyles = {
//   industrySection: {
//     textAlign: "center",
//     padding: "60px 20px",
//     background: "#fff", // White background
//     minHeight: "100vh",
//     animation: "industryFadeIn 1s ease forwards"
//   },
//   industryHeading: {
//     fontSize: "42px",
//     marginBottom: "50px",
//     fontWeight: "bold",
//     color: "#333",
//     textShadow: "2px 2px 6px rgba(0,0,0,0.1)",
//     letterSpacing: "2px",
//     animation: "industryFadeIn 1.5s ease-in-out"
//   },
//   industryContainer: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "35px",
//     alignItems: "flex-start"
//   },
//   industryCard: {
//     background: "#fff",
//     padding: "30px 25px",
//     width: "280px",
//     borderRadius: "20px",
//     boxShadow: "0 12px 30px rgba(0,0,0,0.12), 0 0 15px rgba(72,202,228,0.2)", // Highlighted glow
//     transition: "all 0.4s ease",
//     textAlign: "center",
//     cursor: "pointer",
//     transformStyle: "preserve-3d",
//     overflow: "hidden",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     border: "1px solid #e6f4f7"
//   },
//   imageWrapper: {
//     width: "120px",
//     height: "120px",
//     borderRadius: "50%",
//     overflow: "hidden",
//     marginBottom: "15px",
//     boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0
//   },
//   industryImage: {
//     width: "120px",
//     height: "120px",
//     borderRadius: "50%",
//     objectFit: "cover",
//     flexShrink: 0
//   },
//   industryName: {
//     fontSize: "22px",
//     fontWeight: "700",
//     marginBottom: "6px",
//     color: "#222",
//     letterSpacing: "1px"
//   },
//   industryRole: {
//     fontSize: "15px",
//     color: "#555",
//     marginBottom: "12px",
//     fontStyle: "italic"
//   },
//   industryDescription: {
//     fontSize: "14px",
//     color: "#444",
//     marginBottom: "18px",
//     lineHeight: 1.6
//   },
//   industryDetails: {
//     fontSize: "14px",
//     color: "#222",
//     marginTop: "12px",
//     marginBottom: "18px",
//     lineHeight: 1.6,
//     textAlign: "left"
//   },
//   industryMoreLink: {
//     display: "inline-block",
//     fontWeight: "bold",
//     textDecoration: "none",
//     color: "#0077b6",
//     cursor: "pointer",
//     marginTop: "12px",
//     transition: "color 0.3s ease"
//   }
// };
