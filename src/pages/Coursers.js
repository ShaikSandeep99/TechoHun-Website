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
              <img src="/assets/images/java-course.jpg" alt="Java Programming" />
              <h3>Java Programming</h3>
              <p>Master Java programming with hands-on projects and expert instructors.</p>
            </div>
            <div className="course-card">
              <img src="/assets/images/react-course.jpg" alt="React Development" />
              <h3>React Development</h3>
              <p>Learn how to build modern web applications using the power of React.</p>
            </div>
            <div className="course-card">
              <img src="/assets/images/python-course.jpg" alt="Python for Data Science" />
              <h3>Python for Data Science</h3>
              <p>Develop expertise in Python for data analysis, machine learning, and more.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
