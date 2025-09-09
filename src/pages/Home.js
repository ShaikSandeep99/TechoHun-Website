import React, { useState, useEffect } from "react";
import "./Home.css"; // Your custom CSS file
import gif1 from "../assets/images/bg-imges/life-time-unscreen.gif";
import gif2 from "../assets/images/bg-imges/live-interaction-unscreen.gif";
import gif3 from "../assets/images/bg-imges/24-7-unscreen.gif";
import steps from "../assets/images/bg-imges/steps.jpg";
import image1 from '../assets/images/bg-imges/bg-1.jpg';

const Home = () => {
  // Hero Section Slideshow Data
  const slides = [
    {
      backgroundImage: image1,
      heading: "Transform Your Career with Technohub",
      description:
        "Join our professional courses and start your journey toward a successful career. Explore a variety of training programs tailored just for you!", 
      buttonText: "Get Started",
      image: "/img/hero-image1.png",
    },
    {
      backgroundImage:"/img/bg3.jpg",
      heading: "Learn from the Best in the Industry",
      description:
        "Our expert instructors provide real-world knowledge to help you achieve your goals.",
      buttonText: "Discover Courses",
      image: "/img/hero-image2.png",
    },
    {
      backgroundImage: "/img/bg3.jpg",
      heading: "Upgrade Your Skills Today", 
      description:
        "Stay ahead in your career with the latest tools and technologies.",
      buttonText: "Join Now",
      image: "/img/hero-image3.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);  // Cleanup on unmount
  }, [slides.length]);

  const { backgroundImage, heading, description, buttonText, image } =
    slides[currentSlide];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold">{heading}</h1>
              <p className="lead text-muted">{description}</p>
              <button className="btn btn-primary btn-lg mt-5">{buttonText}</button>
            </div>
            <div className="col-md-6">
              <img src={image} alt="Slide Content" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Technohub Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-primary text-center fw-bold">
                Why Training Courses from Technohub
              </h3>
            </div>
          </div>
          <div className="row mt-4 d-flex justify-content-center">
            {[{
              gif: gif2,
              title: "Live Interactive Learning",
              points: ["World-class Instructor", "Expert-led mentoring sessions", "Instant doubt clearing"]
            },
            {
              gif: gif1,
              title: "Lifetime Access",
              points: ["Course access never expires", "Free access to future updates", "Unlimited course content"]
            },
            {
              gif: gif3,
              title: "24x7 Support",
              points: ["One-on-one learning assistance", "Help desk support", "Resolve doubts in real time"]
            },
            {
              gif: gif2,
              title: "Industry-Aligned Curriculum",
              points: ["Up-to-date course content", "Real-time projects", "Hands-on practical knowledge"]
            },
            {
              gif: gif2,
              title: "Job Assistance",
              points: ["Resume building workshops", "Mock interview sessions", "Job placement support"]
            },
            {
              gif: gif2,
              title: "Flexible Learning",
              points: ["Self-paced learning options", "Live online sessions", "Learn at your convenience"]
            }].map(({ gif, title, points }, index) => (
              <div className="col-lg-4 col-md-6 mb-5" key={index}>
                <div className="card h-100 shadow d-flex align-items-center justify-content-center text-start">
                  <div className="card-body">
                    <img src={gif} width="200px" height="100px" className="icon mb-3" />
                    <h5 className="card-title text-primary">{title}</h5>
                    <ul className="list-unstyled">
                      {points.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* Technohub Overview Section */}
        <section className="experience-section py-1 bg-light">
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
            {[{
              title: "Java Programming",
              text: "Learn Java from scratch and become an expert in backend development."
            },
            {
              title: "React Development",
              text: "Master React and build powerful front-end web applications."
            },
            {
              title: "Python for Data Science",
              text: "Learn Python for Data Science and build machine learning models."
            },
            {
              title: "DevOps Essentials",
              text: "Understand the fundamentals of DevOps and streamline development processes."
            }].map(({ title, text }, index) => (
              <div className="col-md-3" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-muted">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* Statistics Section */}
        <section className="stats-section bg-dark text-white py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Let Us Build Your Skills for the Future</h3>
          <div className="row g-4">
            {[
              { stat: "10K+", text: "Courses Completed" },
              { stat: "5K+", text: "Happy Students" },
              { stat: "4.9/5", text: "Course Ratings" },
            ].map(({ stat, text }, index) => (
              <div className="col-md-4" key={index}>
                <h4 className="display-4 fw-bold">{stat}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
