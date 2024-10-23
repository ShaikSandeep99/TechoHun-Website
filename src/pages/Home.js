import React from 'react';
import './Home.css'; // Add your custom CSS for extra styling

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold">Transform Your Career with Technohub</h1>
              <p className="lead text-muted">
                Join our professional courses and start your journey toward a successful career.
                Explore a variety of training programs tailored just for you!
              </p>
              <button className="btn btn-primary btn-lg mt-5">Get Started</button>
            </div>
            <div className="col-md-6">
              <img src="/img/hero-image.png" alt="Technohub Education" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

     
  {/* Why Technohub Section */}
  <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-primary text-center fw-bold">Why Training Courses from Technohub</h3>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <img src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_live.webp" alt="Interactive Learning" className="icon mb-3"/>
                  <h5 className="card-title text-primary">Live Interactive Learning</h5>
                  <ul className="list-unstyled">
                    <li>World-class Instructor</li>
                    <li>Expert-led mentoring sessions</li>
                    <li>Instant doubt clearing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <img src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_life.webp" alt="Lifetime Access" className="icon mb-3"/>
                  <h5 className="card-title text-primary">Lifetime Access</h5>
                  <ul className="list-unstyled">
                    <li>Course access never expires</li>
                    <li>Free access to future updates</li>
                    <li>Unlimited course content</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <img src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_247.webp" alt="Support" className="icon mb-3"/>
                  <h5 className="card-title text-primary">24x7 Support</h5>
                  <ul className="list-unstyled">
                    <li>One-on-one learning assistance</li>
                    <li>Help desk support</li>
                    <li>Resolve doubts in real time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technohub Overview Section */}
      <section className="experience-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">Real Results from 10+ Years of Experience</h2>
              <p className="text-muted">
                We have trained over 5,000 professionals, offering high-quality software training programs 
                with real-world results. Our courses are designed to enhance your skills and help you grow.
              </p>
            </div>
            <div className="col-md-6">
              <img src="/img/experience.png" alt="Experience" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses-section py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Explore Our Featured Courses</h3>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Java Programming</h5>
                  <p className="card-text text-muted">Learn Java from scratch and become an expert in backend development.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">React Development</h5>
                  <p className="card-text text-muted">Master React and build powerful front-end web applications.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Python for Data Science</h5>
                  <p className="card-text text-muted">Learn Python for Data Science and build machine learning models.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">DevOps Essentials</h5>
                  <p className="card-text text-muted">Understand the fundamentals of DevOps and streamline development processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section bg-dark text-white py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Let Us Build Your Skills for the Future</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h4 className="display-4 fw-bold">10K+</h4>
              <p>Courses Completed</p>
            </div>
            <div className="col-md-4">
              <h4 className="display-4 fw-bold">5K+</h4>
              <p>Happy Students</p>
            </div>
            <div className="col-md-4">
              <h4 className="display-4 fw-bold">4.9/5</h4>
              <p>Course Ratings</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
