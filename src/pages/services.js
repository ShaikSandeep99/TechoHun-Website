// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./services.css";


// // Import images
// import certificate from "../assets/services-images/Industryrecognized.jpg";
// import liveprojects from "../assets/services-images/srcproject.jpg";
// import internshipImg from "../assets/services-images/srcintern1.jpg";
// import training from "../assets/services-images/intern.png";
// import onandofflearning from "../assets/services-images/blendedlearning.jpg";
// import weeklyassignments from "../assets/services-images/weeklyexams.jpg";
// import lifetimeaccess from "../assets/services-images/weeklyexams.jpg";


// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   hover: { scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" },
// };

// const servicesData = [
//     {
//         id: 1,
//         image: certificate,
//         title: "Industry Recognized Certificates",        
//         description: "Earn certificates that are recognized by top tech companies to boost your career prospects."
//     },
//     {
//         id: 2,
//         image: liveprojects,
//         title: "Real-world Projects",        
//         description: "Work on real-world projects that simulate industry scenarios, enhancing your practical skills."
//     },
//     {
//         id: 3,
//         image: internshipImg,
//         title: "Internship Opportunities",       
//         description: "Gain hands-on experience through internships with leading tech firms and startups approved by AICTE."
//     },
//     {
//         id: 4,
//         image: training,
//         title: "Expert Training",        
//         description: "Learn from industry experts through comprehensive training sessions and workshops."
//     },
//     {
//         id: 5,
//         image: onandofflearning,
//         title: "Blended Learning",        
//         description: "Enjoy the flexibility of both online and offline learning to suit your schedule."
//     },
//     {
//         id: 6,
//         image: weeklyassignments,
//         title: "Weekly Assignments",        
//         description: "Stay on track with regular assignments that reinforce your learning and understanding."
//     },
//     {
//         id: 7,
//         image: lifetimeaccess,
//         title: "Lifetime Access",        
//         description: "Get lifetime access to course materials and updates, ensuring you stay current in your field."
//     },
// ];


// const HomePage = () => {
//   return (
//     <div className="service_homepage">
//       {/* Hero Section */}
//       <motion.section
//         id="home"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="service_hero-section"
//       >
//         <div
//           className="service_hero-bg"
//           style={{
//             backgroundImage: url(${require("../assets/services-images/servicesBbImg.png")}),
//           }}
//         ></div>

//         <div className="service_hero-content">
//           <h1>
//             Empower Your <br /> Learning Journey
//           </h1>
//           <p>
//             Discover top courses, expert mentorship, and level up your skills <br />
//             with flexible, practical, and career-aligned programs.
//           </p>
//           <div className="service_hero-buttons">
//             <Link to="/courses" className="service_btn service_btn-primary">
//               Browse Courses
//             </Link>
//             <Link to="/auth" className="service_btn service_btn-primary">
//               Login
//             </Link>
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Services */}
//       <section id="services" className="services">
//         <h2>Our Services</h2>

//          <p style={{
//                 color:  'black',
//                 fontSize: '17px',
//                 maxWidth: 700,
//                 margin: 'auto',
//                 marginBottom: '80px'
//               }}>
//                 Discover hands-on services designed to help you gain real skills and launch yourself
                
//               </p>

//         <div className="services-list">
//           {[
//             {
//               id: "online-training",
//               title: "Online IT Training",
//               img: require("../assets/services-images/OnilneTraining.png"),
//               desc: Our online IT training programs are built to help both working people and learners grow their skills from anywhere, at any time. They are budget-friendly, flexible, and easy to use. Each course is thoughtfully planned to keep you interested and involved, even while studying online. You’ll gain useful, real-life knowledge along with strong basic understanding. These programs are created to prepare you for real-world challenges in today’s fast-changing tech field.,
//             },
//             {
//               id: "classroom-training",
//               title: "Classroom Training",
//               img: require("../assets/services-images/classroomTraining.png"),
//               desc: We also provide classroom-based IT training for those who prefer direct, hands-on learning. These in-person sessions create a friendly and interactive space where learners and trainers work together. Students get to meet industry experts face-to-face and take part in practical projects that help them learn by doing. This mode also strengthens teamwork, communication, and presentation skills.,
//             },
//             {
//               id: "internships",
//               title: "Internship Programs",
//               img: require("../assets/services-images/intern.png"),
//               desc: The world of IT is growing and changing every single day. With new tools, technologies, and trends coming up often, it’s important for IT professionals to keep learning and updating their skills. Our internship programs bridge this gap, offering practical industry exposure and teamwork, leadership, and communication development.,
//             },
//           ].map((service, idx) => (
//             <section
//               id={service.id}
//               key={service.id}
//               className={service-item ${idx % 2 === 1 ? "reverse" : ""}}
//             >
//               <img src={service.img} alt={service.title} />
//               <div className="service-text">
//                 <h3>{service.title}</h3>
//                 <p>{service.desc}</p>
//                 <Link to="/contact" className="service_btn service_btn-primary mt-4">
//                   Explore More
//                 </Link>
//               </div>
//             </section>
//           ))}
//         </div>
//       </section>

//       {/* Career Value */}
//       <section className="service_career-value" id="career-value">
//         <div className="service_container">
//           <h2>The Bright Place to Build The Best Career Value</h2>
//           <p>Best Opportunity To Learn From Currently Working Professionals</p>

//           <div className="service_career-buttons">
//             <button className="service_btn service_green">Online Training</button>
//             <button className="service_btn service_blue">Classroom Training</button>
//           </div>

//           <div className="service_career-buttons">
//             <button className="service_btn service_orange">Internships</button>
//           </div>
//         </div>
//       </section>



//     <motion.div
//       className="services-container"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       {/* Hero / Gradient Section */}
//       <motion.div
//         className="services-hero"
//         initial={{ opacity: 0, y: -36 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.1 }}
//       ></motion.div>

//       {/* Cards Grid */}
//       <div className="service_cards-grid">
//         {servicesData.map(({ id, image, title, link, description }) => (
//           <motion.div
//             key={id}
//             className="service_card"
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//           >
//             <img src={image} alt={title} />
//             <a href={link}>{title}</a>
//             <p className="service_desc">{description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
       

      

//       {/* Training Features */}
//       <section className="service_features">
//         <h2>Our Training Features</h2>
//         <div className="service_features-grid">
//           <div className="service_feature-card">
//             <i className="fas fa-calendar-check icon blue"></i>
//             <h3>In-time Course Completion</h3>
//             <p>
//               We ensure every course is completed on time with a perfect balance
//               of theory and practice.
//             </p>
//           </div>
//           <div className="service_feature-card">
//             <i className="fas fa-building icon green"></i>
//             <h3>State-of-the-art Infrastructure</h3>
//             <p>
//               At TECHNOHUB, students study in a learning environment supported
//               by modern infrastructure, tools and labs.
//             </p>
//           </div>
//           <div className="service_feature-card">
//             <i className="fas fa-sync-alt icon red"></i>
//             <h3>Blended Training Approach</h3>
//             <p>
//               We adopt an integrated approach to training that helps our
//               students get both IT knowledge and skills.
//             </p>
//           </div>
//           <div className="service_feature-card">
//             <i className="fas fa-handshake icon yellow"></i>
//             <h3>Free Demo Sessions</h3>
//             <p>
//               We also provide prospective students with the option to try the
//               courses with free demo sessions.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="service_why-choose-us" id="why-choose-us">
//         <div className="service_container">
//           <h2>Why Choose Us?</h2>
//           <p>
//             Our platform is built to provide not only knowledge but also
//             mentorship and career acceleration with real-world projects and
//             industry-aligned curriculum.
//           </p>
//           <div className="service_why-grid">
//             <div className="service_why-card">
//               <h3>Expert Mentors</h3>
//               <p>
//                 Learn from professionals who actively work in the industry with
//                 years of experience.
//               </p>
//             </div>
//             <div className="service_why-card">
//               <h3>Real Projects</h3>
//               <p>
//                 Work on actual business problems to prepare for interviews and
//                 the workplace.
//               </p>
//             </div>
//             <div className="service_why-card">
//               <h3>Career Support</h3>
//               <p>
//                 Mock interviews, resume reviews, and job referrals for our
//                 top-performing students.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>





     
//     </div>
//   );
// };

// export default HomePage;