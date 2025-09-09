import React, { useState, useEffect } from "react";
import heroBg from "../assets/images/bg-imges/bg1.jpg";
import img1 from "../assets/images/bg-imges/img1.png"; // professionals trained
import img2 from "../assets/images/bg-imges/img2.jpg";
import img3 from "../assets/images/bg-imges/img3.jpg";
import img4 from "../assets/images/bg-imges/img4.jpg";
import img5 from "../assets/images/bg-imges/img5.jpg";
import img6 from "../assets/images/bg-imges/img6.jpg";
import image1 from "../assets/images/bg-imges/bg1.jpg";
import image2 from "../assets/images/bg-imges/bg2.jpg";
import image3 from "../assets/images/bg-imges/bg3.jpg";
import image4 from "../assets/images/bg-imges/bg4.jpg";
import icon1 from "../assets/images/bg-imges/icon1.svg"; 
import icon2 from "../assets/images/bg-imges/icon2.png"; 
import icon3 from "../assets/images/bg-imges/icon3.png"; 
import icon4 from "../assets/images/bg-imges/icon4.png"; 

const Hero = () => {
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
      backgroundImage: image2,
      heading: "Learn from the Best in the Industry",
      description:
        "Our expert instructors provide real-world knowledge to help you achieve your goals.",
      buttonText: "Discover Courses",
      image: "/img/hero-image2.png",
    },
    {
      backgroundImage: image3,
      heading: "Upgrade Your Skills Today",
      description:
        "Stay ahead in your career with the latest tools and technologies.",
      buttonText: "Join Now",
      image: "/img/hero-image3.png",
    },
    {
      backgroundImage: image4,
      heading: "“Education is the passport to the future”",
      buttonText: "Explore More",
      image: "../assets/images/bg-imges/bg3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section>
      {/* Hero Background Section */}
      <div
        style={{
          backgroundImage: `url(${slide.backgroundImage})`,
          backgroundSize: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        ></div>

        {/* Text */}
        <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
          <h1 className="fw-bold display-4">{slide.heading}</h1>
          <p className="lead mt-3">{slide.description}</p>
          <button className="btn btn-danger btn-lg mt-3">
            {slide.buttonText}
          </button>
        </div>
      </div>

      {/* About Technohub Section */}
      <div className="container text-center my-5">
      <h2 className="fw-bold" style={{ color: "#007BFF" }}>About Technohub</h2>
        <p className="mt-3">
          Technohub is a training Institution and a good Software Training and
          Certification platform. Technohub follows proper work ethics and has a
          positive environment where an individual can learn and grow. We provide
          both offline and online courses. The competitive environment at Technohub
          also provides the necessary edge and exposure for every individual to
          succeed in their career in Software.
        </p>
      </div>

   {/* Feature Cards Section */}
<div className="container text-center my-4">
<div className="row g-2 justify-content-center">
    {/* Professionals Trained */}
    <div className="col-md-3 mb-3">
      <div
        className="card feature-card shadow p-3 h-100 border-0 rounded-4"
        style={{ maxWidth: "220px", margin: "0 auto" }}
      >
        <div className="card-body">
          <img src={icon1} alt="Professionals Trained" width="40" className="feature-icon" />
        <h6 className="mt-2 fw-bold feature-text">
  <span style={{ color: "#007BFF" }}>500+</span> Professionals Trained
</h6>
        </div>
      </div>
    </div>

    {/* Years of Experience */}
    <div className="col-md-3 mb-3">
      <div
        className="card feature-card shadow p-3 h-100 border-0 rounded-4"
        style={{ maxWidth: "220px", margin: "0 auto" }}
      >
        <div className="card-body">
          <img src={icon2} alt="Experience" width="40" className="feature-icon" />
          <h6 className="mt-2 fw-bold feature-text">
            <span style={{color:"#007BFF"}}>10+ Years </span> of Experience </h6>
        </div>
      </div>
    </div>

    {/* Live Project Hours */}
    <div className="col-md-3 mb-3">
      <div
        className="card feature-card shadow p-3 h-100 border-0 rounded-4"
        style={{ maxWidth: "220px", margin: "0 auto" }}
      >
        <div className="card-body">
          <img src={icon3} alt="Live Project" width="40" className="feature-icon" />
          <h6 className="mt-2 fw-bold feature-text">
           <span style={{color:"#007BFF"}}>30 to 40 </span>Hours Live-Project</h6>
        </div>
      </div>
    </div>

    {/* Job Assistance */}
    <div className="col-md-3 mb-3">
      <div
        className="card feature-card shadow p-3 h-100 border-0 rounded-4"
        style={{ maxWidth: "220px", margin: "0 auto" }}
      >
        <div className="card-body">
          <img src={icon4} alt="Job Assistance" width="40" className="feature-icon" />
          <h6 className="mt-2 fw-bold feature-text">
            <span style={{color:"#007BFF"}}>100% </span>Job Assistance</h6>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Explore Our Featured Courses Section */}
<div className="container text-center my-5">
  <h2 className="fw-bold" style={{ color: "#007BFF" }}>
    Explore Our Featured Courses
  </h2>
  <div className="row g-3 justify-content-center mt-4">
    
    {/* Java Programming */}
    <div className="col-md-3">
      <div className="card shadow-sm p-3 h-100 border-0 rounded-4">
        <div className="card-body">
          <h6 className="fw-bold" style={{ color: "#007BFF" }}>
            Java Programming
          </h6>
          <p className="text-muted small">
            Learn Java from scratch and become an expert in backend development.
          </p>
        </div>
      </div>
    </div>

    {/* React Development */}
    <div className="col-md-3">
      <div className="card shadow-sm p-3 h-100 border-0 rounded-4">
        <div className="card-body">
          <h6 className="fw-bold" style={{ color: "#007BFF" }}>
            React Development
          </h6>
          <p className="text-muted small">
            Master React and build powerful front-end web applications.
          </p>
        </div>
      </div>
    </div>

    {/* Python for Data Science */}
    <div className="col-md-3">
      <div className="card shadow-sm p-3 h-100 border-0 rounded-4">
        <div className="card-body">
          <h6 className="fw-bold" style={{ color: "#007BFF" }}>
            Python for Data Science
          </h6>
          <p className="text-muted small">
            Learn Python for Data Science and build machine learning models.
          </p>
        </div>
      </div>
    </div>
{/* DevOps Essentials */}
    <div className="col-md-3">
      <div className="card shadow-sm p-3 h-100 border-0 rounded-4">
        <div className="card-body">
          <h6 className="fw-bold" style={{ color: "#007BFF" }}>
            DevOps Essentials
          </h6>
          <p className="text-muted small">
            Understand the fundamentals of DevOps and streamline development processes.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Why Training Courses Section */}
<div className="container text-center my-5">
  <h2 className="fw-bold" style={{ color: "#007BFF" }}>
    Why Training Courses from Technohub
  </h2>
  
<div className="row g-4 mt-4">
  {/* Card 1 */}
  <div className="col-md-4">
    <div
      className="card h-100 text-center p-4 border-0 rounded-4"
      style={{
        border: "2px solid #ff00f2ff",
        boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
      }}
    >
      <img src={img1} alt="Live Learning" className="mx-auto mb-3" style={{ height: "60px", objectFit: "contain" }} />
      <h6 className="fw-bold text-primary">Live Interactive Learning</h6>
      <p className="text-muted small">
        World-class Instructor <br /> Expert-led mentoring sessions <br /> Instant doubt clearing
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="col-md-4">
    <div
      className="card h-100 text-center p-4 border-0 rounded-4"
      style={{
        border: "2px solid #007BFF",
        boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
      }}
    >
      <img src={img2} alt="Lifetime Access" className="mx-auto mb-3" style={{ height: "60px", objectFit: "contain" }} />
      <h6 className="fw-bold text-primary">Lifetime Access</h6>
      <p className="text-muted small">
        Course access never expires <br /> Free access to future updates <br /> Unlimited course content
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="col-md-4">
    <div
      className="card h-100 text-center p-4 border-0 rounded-4"
      style={{
        border: "2px solid #007BFF",
        boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
      }}
    >
      <img src={img3} alt="Support" className="mx-auto mb-3" style={{ height: "60px", objectFit: "contain" }} />
      <h6 className="fw-bold text-primary">24x7 Support</h6>
      <p className="text-muted small">
        One-on-one learning assistance <br /> Help desk support <br /> Resolve doubts in real time
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="col-md-4">
    <div
      className="card h-100 text-center p-4 border-0 rounded-4"
      style={{
        border: "2px solid #007BFF",
        boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
      }}
    >
      <img src={img4} alt="Industry Curriculum" className="mx-auto mb-3" style={{ height: "60px", objectFit: "contain" }} />
      <h6 className="fw-bold text-primary">Industry-Aligned Curriculum</h6>
      <p className="text-muted small">
        Up-to-date course content <br /> Real-time projects <br /> Hands-on practical knowledge
      </p>
    </div>
  </div>

  {/* Card 5 */}
  <div className="col-md-4">
    <div
      className="card h-100 text-center p-4 border-0 rounded-4"
      style={{
        border: "2px solid #007BFF",
        boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
      }}
    >
      <img src={img5} alt="Job Assistance" className="mx-auto mb-3" style={{ height: "60px", objectFit: "contain" }} />
      <h6 className="fw-bold text-primary">Job Assistance</h6>
      <p className="text-muted small">
        Resume building workshops <br /> Mock interview sessions <br /> Job placement support
      </p>
    </div>
  </div>

  {/* Card 6 */}
  <div className="col-md-4">
    <div
      className="card h-100 text-center p-4 border-0 rounded-4"
      style={{
        border: "2px solid #007BFF",
        boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
      }}
    >
      <img src={img6} alt="Flexible Learning" className="mx-auto mb-3" style={{ height: "60px", objectFit: "contain" }} />
      <h6 className="fw-bold text-primary">Flexible Learning</h6>
      <p className="text-muted small">
        Self-paced learning options <br /> Live online sessions <br /> Learn at your convenience
      </p>
    </div>
  </div>
</div>


</div>
    </section>
  );
};

export default Hero;
