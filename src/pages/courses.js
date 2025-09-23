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
      { title: "SAP ABAP", img: "/img/coursesname-images/SapABAP.png", desc: "Develop custom applications, reports, and enhancements using SAP language.", link: "/auth" },
      { title: "SAP BASIS", img: "/img/coursesname-images/SapBasis.png", desc: "Manage SAP systems, configuration, tuning, and user administration efficiently.", link: "/auth" },
      { title: "SAP BW / BW4HANA", img: "/img/coursesname-images/SapBw4.png", desc: "Build data warehouses, ETL processes, and real-time analytics reports.", link: "/auth" },
      { title: "SAP HANA", img: "/img/coursesname-images/SapHana.png", desc: "Master in-memory data modeling, analytics, and high-speed processing.", link: "/auth" },
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