import React, { useState } from "react";
import "./courses.css";

const Courses = () => {
  // Technology categories with related courses
  const technologies = {
    Frontend: [
      { title: "HTML, CSS, & JS", img: "/img/coursesname-images/JCH.png", desc: "HTML structures, CSS styles, JavaScript adds interactivity dynamically..", link: "/auth" },
      { title: "React JS", img: "/img/coursesname-images/ReactDev.png", desc: "Builds dynamic, component-based UIs using JavaScript efficiently.", link: "/auth" },
      { title: "UI/UX Design", img: "/img/coursesname-images/UIUX.png", desc: "Creates visually appealing, user-friendly, and intuitive digital experiences.", link: "/auth" },
      { title: "Angular", img: "/img/coursesname-images/Angular.png", desc: "Develops dynamic, single-page web applications with TypeScript framework.", link: "/auth" },
      { title: "Vue.js", img: "/img/coursesname-images/Vue.png", desc: "Builds progressive, reactive, and component-based web interfaces.", link: "/auth" },
      { title: "Next.js", img: "/img/coursesname-images/Next.png", desc: "Creates fast, server-rendered React applications with SEO optimization.", link: "/auth" },
    ],
    Backend: [
      { title: "Java Programming", img: "/img/coursesname-images/Java.png", desc: "Builds robust, secure, and scalable applications across platforms.", link: "/auth" },
      { title: "Python Programming", img: "/img/coursesname-images/Python.png", desc: "Simplifies coding with powerful libraries and easy-to-learn syntax.", link: "/auth" },
      { title: "Next.js", img: "/img/coursesname-images/Node.png", desc: "Creates fast, server-rendered React applications with SEO optimization.", link: "/auth" },
      { title: "Java Spring Boot", img: "/img/coursesname-images/SBoot.png", desc: "Creates rapid, production-ready Java web applications efficiently.", link: "/auth" },
    ],
    FullStack: [
      { title: "Mern Stack", img: "/img/coursesname-images/Mern.png", desc: "Develops end-to-end web apps using MongoDB, Express, React, Node.", link: "/auth" },
      { title: "Java FullStack", img: "/img/coursesname-images/javafullcourse.png", desc: "Builds complete web applications using Java, Spring, and frontend.", link: "/auth" },
      { title: "Python FullStack", img: "/img/coursesname-images/PythonFS.png", desc: "Develops complete applications using Python, Django/Flask, and frontend.", link: "/auth" },
    ],
     Database: [
      { title: "MongoDB", img: "/img/coursesname-images/Mongo.png", desc: "Stores data as flexible, scalable, JSON-like NoSQL documents.", link: "/auth" },
      { title: "MySQL", img: "/img/coursesname-images/Mysql.png", desc: "Manages structured data with fast, reliable relational database system.", link: "/auth" },
      { title: "PostgreSQL", img: "/img/coursesname-images/Postgre.png", desc: "Advanced, open-source relational database with features and scalability.", link: "/auth" },
      { title: "SQL", img: "/img/coursesname-images/Sql.png", desc: "Manages and queries structured data in relational databases efficiently.", link: "/auth" },
    ],
    "AI & ML": [
      { title: "Python for Data Science", img: "/img/coursesname-images/PythonDS.png", desc: "Analyzes, visualizes, and models data using Python libraries.", link: "/auth" },
      { title: "AI/ML", img: "/img/coursesname-images/AIML.png", desc: "Enables systems to learn, adapt, and make intelligent decisions.", link: "/auth" },
      { title: "Generative AI", img: "/img/coursesname-images/GenAI.png", desc: "Creates new content like text, images, or code intelligently.", link: "/auth" },
      { title: "Data Analytics", img: "/img/coursesname-images/DataAnal.png", desc: "Transforms raw data into meaningful insights for informed decisions.", link: "/auth" },
      { title: "Power BI", img: "/img/coursesname-images/PowerBI.png", desc: "Visualizes data interactively for business intelligence and decision-making.", link: "/auth" },
    ],
    Cloud: [
      { title: "Cloud Computing", img: "/img/coursesname-images/CloudCom.png", desc: "Provides on-demand computing resources over the internet with scalability.", link: "/auth" },
      { title: "DevOps", img: "/img/coursesname-images/DevOps.png", desc: "Automates development, deployment, and CI/CD for faster, reliable delivery.", link: "/auth" },
      { title: "Google Cloud Platform", img: "/img/coursesname-images/Gcp.png", desc: "Provides scalable cloud services for computing, storage, and AI.", link: "/auth" },
      { title: "Azure", img: "/img/coursesname-images/Azure.png", desc: "Delivers cloud services for computing, analytics, storage, and networking.", link: "/auth" },
      { title: "AWS", img: "/img/coursesname-images/Aws.png", desc: "Offers scalable cloud solutions for computing, storage, and deployment.", link: "/auth" },
      
    ],
    Cybersecurity: [
      { title: "Cybersecurity", img: "/img/coursesname-images/CyberSec.png", desc: "Safeguards digital systems, networks, and data from malicious attacks.", link: "/auth" },
      { title: "Ethical Hacking", img: "/img/coursesname-images/Ethical.png", desc: "Identifies and fixes security vulnerabilities to protect systems safely.", link: "/auth" },
      { title: "Networking", img: "/img/coursesname-images/Network.png", desc: "Connects devices to share data, resources, and ensure communication.", link: "/auth" },
      { title: "Cloud Security", img: "/img/coursesname-images/CloudS.png", desc: "Protects cloud systems, data, and applications from cyber threats.", link: "/auth" },
    ],
    SAP: [
      { title: "Cybersecurity", img: "/img/coursesname-images/CyberSec.png", desc: "Safeguards digital systems, networks, and data from malicious attacks.", link: "/auth" },
      { title: "Ethical Hacking", img: "/img/coursesname-images/Ethical.png", desc: "Identifies and fixes security vulnerabilities to protect systems safely.", link: "/auth" },
      { title: "Networking", img: "/img/coursesname-images/Network.png", desc: "Connects devices to share data, resources, and ensure communication.", link: "/auth" },
      { title: "Cloud Security", img: "/img/coursesname-images/CloudS.png", desc: "Protects cloud systems, data, and applications from cyber threats.", link: "/auth" },
    ],
  };

  const [selectedTech, setSelectedTech] = useState("Frontend");

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="courses-content">
          <h1>Our Courses</h1>
          <p>Explore industry-relevant courses to boost your career.</p>
        </div>
      </section>

      {/* Sidebar + Courses */}
      <section className="courses-section">
        <div className="courses-container">
          {/* Left Sidebar */}
          <aside className="sidebar">
            <h2>Technologies</h2>
            <ul>
              {Object.keys(technologies).map((tech) => (
                <li
                  key={tech}
                  className={selectedTech === tech ? "active" : ""}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </aside>

          {/* Right Content */}
          <div className="courses-grid">
            {technologies[selectedTech].map((course, index) => (
              <div className="course-card" key={index}>
                <img src={course.img} alt={course.title} />
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <a href={course.link} className="enroll-btn">
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;





// import React from 'react';
// import './courses.css';

// const Courses = () => {
//   return (
//     <div className="courses-page">
   
//       <section className="courses-hero">
//         <div className="courses-content">
//           <h1>Our Courses</h1>
//           <p>Explore our range of industry-relevant courses designed to help you excel in your career.</p>
//         </div>
//       </section>

     
//       <section className="courses-list-section">
//         <div className="container">
//           <div className="courses-grid">
//             <div className="course-card">
//               <img src="/img/coursesname-images/javafullcourse.png" alt="Java Programming" />
//               <h3>Java Programming</h3>
//               <p>Master Java programming with hands-on projects and expert instructors.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src="/img/coursesname-images/ReactDev.png" alt="React Development" />
//               <h3>React Development</h3>
//               <p>Learn how to build modern web applications using the power of React.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src="/img/coursesname-images/PythonDS.png" alt="Python for Data Science" />
//               <h3>Python for Data Science</h3>
//               <p>Develop expertise in Python for data analysis, machine learning, and more.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/PythonFS.png' alt='Python Fullstack'/>
//               <h3>Python FullStack</h3>
//               <p>Build modern web applications with Python, React, databases, and advanced frameworks.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/AIML.png' alt='AI/ML'/>
//               <h3>AI/ML</h3>
//               <p>Develop modern solutions using Artificial Intelligence and Machine Learning for automation, prediction, and innovation.</p>
//               <a href="/auth"className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/GenAI.png' alt='Generative AI'/>
//               <h3>GEN AI</h3>
//               <p>Create intelligent content, code, and solutions using generative artificial intelligence.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/PowerBI.png' alt='Power BI'/>
//               <h3>Power BI</h3>
//               <p>Visualize data, create interactive dashboards, and generate insights for decision-making.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/CloudCom.png' alt='Cloud Computing'/>
//               <h3>Cloud Computing</h3>
//               <p>Enable flexible, reliable, and cost-effective solutions across global platforms.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/UIUX.png' alt='UI/UX Design'/>
//               <h3>UI/UX Design</h3>
//               <p>Craft engaging, user-friendly interfaces ensuring seamless digital experiences and improved usability.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/DevOps.png' alt='DevOps'/>
//               <h3>DevOps</h3>
//               <p>Streamline development and operations, enabling faster delivery, automation, and continuous integration.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/CyberSec.png' alt='Cybersecurity'/>
//               <h3>Cybersecurity</h3>
//               <p>Protect systems, networks, and data from threats through prevention, detection, and response.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/DataAnal.png' alt='Data Analytics'/>
//               <h3>Data Analytics</h3>
//               <p>Analyze and interpret data to generate actionable insights for businesses.</p>
//               <a href="/auth" className="enroll-btn">Enroll Now</a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Courses;

