import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="hero-content">
          <h1>Our Courses</h1>
          <p>Explore our range of industry-relevant courses designed to help you excel in your career.</p>
        </div>
      </section>

      {/* Courses List */}
      <section className="courses-list-section">
        <div className="container">
          <div className="courses-grid">
            <div className="course-card">
              <img src="/img/coursesname-images/javafullcourse.png" alt="Java Programming" />
              <h3>Java Programming</h3>
              <p>Master Java programming with hands-on projects and expert instructors.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src="/img/coursesname-images/ReactDev.png" alt="React Development" />
              <h3>React Development</h3>
              <p>Learn how to build modern web applications using the power of React.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src="/img/coursesname-images/PythonDS.png" alt="Python for Data Science" />
              <h3>Python for Data Science</h3>
              <p>Develop expertise in Python for data analysis, machine learning, and more.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src='/img/coursesname-images/PythonFS.png' alt='Python Fullstack'/>
              <h3>Python FullStack</h3>
              <p>Build modern web applications with Python, React, databases, and advanced frameworks.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src='/img/coursesname-images/AIML.png' alt='AI/ML'/>
              <h3>AI/ML</h3>
              <p>Develop modern solutions using Artificial Intelligence and Machine Learning for automation, prediction, and innovation.</p>
              <a href="/auth"className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src='/img/coursesname-images/GenAI.png' alt='Generative AI'/>
              <h3>GEN AI</h3>
              <p>Create intelligent content, code, and solutions using generative artificial intelligence.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src='/img/coursesname-images/PowerBI.png' alt='Power BI'/>
              <h3>Power BI</h3>
              <p>Visualize data, create interactive dashboards, and generate insights for decision-making.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src='/img/coursesname-images/CloudCom.png' alt='Cloud Computing'/>
              <h3>Cloud Computing</h3>
              <p>Enable flexible, reliable, and cost-effective solutions across global platforms.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src='/img/coursesname-images/UIUX.png' alt='UI/UX Design'/>
              <h3>UI/UX Design</h3>
              <p>Craft engaging, user-friendly interfaces ensuring seamless digital experiences and improved usability.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src='/img/coursesname-images/DevOps.png' alt='DevOps'/>
              <h3>DevOps</h3>
              <p>Streamline development and operations, enabling faster delivery, automation, and continuous integration.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src='/img/coursesname-images/CyberSec.png' alt='Cybersecurity'/>
              <h3>Cybersecurity</h3>
              <p>Protect systems, networks, and data from threats through prevention, detection, and response.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src='/img/coursesname-images/DataAnal.png' alt='Data Analytics'/>
              <h3>Data Analytics</h3>
              <p>Analyze and interpret data to generate actionable insights for businesses.</p>
              <a href="/auth" className="enroll-btn">Enroll Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;



// import React from 'react';
// import './Courses.css';

// const Courses = () => {
//   return (
//     <div className="courses-page">
//       {/* Hero Section */}
//       <section className="courses-hero">
//         <div className="hero-content">
//           <h1>Our Courses</h1>
//           <p>Explore our range of industry-relevant courses designed to help you excel in your career.</p>
//         </div>
//       </section>

//       {/* Courses List */}
//       <section className="courses-list-section">
//         <div className="container">
//           <div className="courses-grid">
//             <div className="course-card">
//               <img src="/img/coursesname-images/javafullcourse.png" alt="Java Programming" />
//               <h3>Java Programming</h3>
//               <p>Master Java programming with hands-on projects and expert instructors.</p>
//             </div>
//             <div className="course-card">
//               <img src="/img/coursesname-images/ReactDev.png" alt="React Development" />
//               <h3>React Development</h3>
//               <p>Learn how to build modern web applications using the power of React.</p>
//             </div>
//             <div className="course-card">
//               <img src="/img/coursesname-images/PythonDS.png" alt="Python for Data Science" />
//               <h3>Python for Data Science</h3>
//               <p>Develop expertise in Python for data analysis, machine learning, and more.</p>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/PythonFS.png' alt='Python Fullstack'/>
//               <h3>Python FullStack</h3>
//               <p>Build modern web applications with Python, React, databases, and advanced frameworks.</p>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/AIML.png' alt='AI/ML'/>
//               <h3>AI/ML</h3>
//               <p>Develop modern solutions using Artificial Intelligence and Machine Learning for automation, prediction, and innovation.</p>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/GenAI.png' alt='Generative AI'/>
//               <h3>GEN AI</h3>
//               <p>Create intelligent content, code, and solutions using generative artificial intelligence.</p>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/PowerBI.png' alt='Power BI'/>
//               <h3>Power BI</h3>
//               <p>Visualize data, create interactive dashboards, and generate insights for decision-making.</p>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/CloudCom.png' alt='Cloud Computing'/>
//               <h3>Cloud Computing</h3>
//               <p>Enable flexible, reliable, and cost-effective solutions across global platforms.</p>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/UIUX.png' alt='UI/UX Design'/>
//               <h3>UI/UX Design</h3>
//               <p>Craft engaging, user-friendly interfaces ensuring seamless digital experiences and improved usability.</p>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/DevOps.png' alt='DevOps'/>
//               <h3>DevOps</h3>
//               <p>Streamline development and operations, enabling faster delivery, automation, and continuous integration.</p>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/CyberSec.png' alt='Cybersecurity'/>
//               <h3>Cybersecurity</h3>
//               <p>Protect systems, networks, and data from threats through prevention, detection, and response.</p>
//             </div>
//             <div className="course-card">
//               <img src='/img/coursesname-images/DataAnal.png' alt='Data Analytics'/>
//               <h3>Data Analytics</h3>
//               <p>Analyze and interpret data to generate actionable insights for businesses.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Courses;