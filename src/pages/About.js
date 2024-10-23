import React from 'react';
import './About.css'; // Custom CSS

const About = () => {
  return (
    <div className="about-page">
      <section className="about-us py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>About Technohub</h1>
              <p className="lead text-muted">
                Technohub is dedicated to providing top-tier education for professionals.
                With over 10 years of experience, we help students achieve their career goals through both online and offline courses.
              </p>
              <button className="btn btn-primary btn-lg mt-4">Learn More</button>
            </div>
            <div className="col-md-6">
              <img src="/img/about-image.png" alt="About Technohub" className="img-fluid"/>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">Empowering Education and Innovation</h3>
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                We are delighted to announce a strategic collaboration with the Government of Uzbekistan.
                This partnership solidifies our commitment to advancing education and innovation in the region.
              </p>
              <ul className="list-unstyled text-center">
                <li><strong>Elevating Engineering Education</strong> - Enhancing the quality of engineering programs in Uzbekistan.</li>
                <li><strong>Startup Ecosystem</strong> - Supporting the growth of startups in the region.</li>
                <li><strong>A Collaborative Vision for Progress</strong> - Building a shared vision for progress.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
