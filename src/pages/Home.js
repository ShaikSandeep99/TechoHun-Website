import React, { useState, useEffect } from "react";
import img1 from "../assets/images/bg-imges/img1.png"; // professionals trained
import img2 from "../assets/images/bg-imges/img2.jpg";
import img3 from "../assets/images/bg-imges/img3.jpg";
import img4 from "../assets/images/bg-imges/img4.jpg";
import img5 from "../assets/images/bg-imges/img5.jpg";
import img6 from "../assets/images/bg-imges/img6.jpg";
import image1 from "../assets/images/bg-imges/bg1.jpg"
import image2 from "../assets/images/bg-imges/bg2.jpg";
import image4 from "../assets/images/bg-imges/bg4.jpg";
import icon1 from "../assets/images/bg-imges/icon1.svg"; 
import icon2 from "../assets/images/bg-imges/icon2.png"; 
import icon3 from "../assets/images/bg-imges/icon3.png"; 
import icon4 from "../assets/images/bg-imges/icon4.png"; 
import { motion } from "framer-motion";

import "./home.css";



const Hero = () => {
  // Hero Section Slideshow Data
  const slides = [
    {
      backgroundImage: image1,
      heading: "Transform Your Career with Technohub",
      description:
        "Join our professional courses and start your journey toward a successful career. Explore a variety of training programs tailored just for you!",
      // buttonText: "Get Started",
      image: "/img/hero-image1.png",
    },
    {
      backgroundImage: image2,
      heading: "Learn from the Best in the Industry",
      description:
        "Our expert instructors provide real-world knowledge to help you achieve your goals.",
      // buttonText: "Discover Courses",
      image: "/img/hero-image2.png",
    },
    
    {
      backgroundImage: image4,
      heading: "“Education is the passport to the future”",
      // buttonText: "Explore More",
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
          {/* <button className="btn btn-danger btn-lg mt-3"> */}
            {slide.buttonText}
          {/* </button> */}
        </div>
      </div>


{/* About Technohub Section */}
<div className="container text-center my-5">
  <motion.h2
    className="fw-bold"
    style={{ color: "#007BFF" }}
    initial={{ opacity: 0, rotateX: -90 }}
    whileInView={{ opacity: 1, rotateX: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    About Technohub
  </motion.h2>

  <motion.p
    className="mt-3"
    initial={{ opacity: 0, rotateY: -90 }}
    whileInView={{ opacity: 1, rotateY: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    style={{ transformOrigin: "left center" }}
  >
    Technohub is a training Institution and a good Software Training and
    Certification platform. Technohub follows proper work ethics and has a
    positive environment where an individual can learn and grow. We provide
    both offline and online courses. The competitive environment at Technohub
    also provides the necessary edge and exposure for every individual to
    succeed in their career in Software.
  </motion.p>
</div>

      

  {/* Feature Cards Section */}
<div className="container text-center my-4">
  <div className="row g-2 justify-content-center">
    {[
      { icon: icon1, text: "500+ Professionals Trained" },
      { icon: icon2, text: "10+ Years of Experience" },
      { icon: icon3, text: "30 to 40 Hours Live-Project" },
      { icon: icon4, text: "100% Job Assistance" },
    ].map((card, idx) => (
      <motion.div
        className="col-md-3 mb-3"
        key={idx}
        initial={{ y: 30, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.4, delay: idx * 0.1 }}
      >

        <motion.div
          className="card feature-card shadow p-3 h-100 border-0 rounded-4"
          style={{ maxWidth: "220px", margin: "0 auto", cursor: "pointer", transformStyle: "preserve-3d",boxShadow: "0 8px 20px rgba(0, 123, 255, 0.6)", border: "2px solid #007BFF", }}
          whileHover={{ rotateX: 8, rotateY: 8 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * -8;
            e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
          }}
        >
          <div className="card-body">
            <img src={card.icon} alt="Feature Icon" width="40" className="feature-icon" />
            <h6 className="mt-2 fw-bold feature-text">{card.text}</h6>
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>

{/* Explore Our Featured Courses Section */}
<div className="container text-center my-5">
  <h2 className="fw-bold" style={{ color: "#007BFF" }}>
    Explore Our Featured Courses
  </h2>

  <div className="row g-4 mt-4">
    {[
      { title: "Java Programming", desc: "Learn Java from scratch and become an expert in backend development.", border: "#007BFF" },
      { title: "React Development", desc: "Master React and build powerful front-end web applications.", border: "#007BFF" },
      { title: "Python for Data Science", desc: "Learn Python for Data Science and build machine learning models.", border: "#007BFF" },
      { title: "DevOps Essentials", desc: "Understand the fundamentals of DevOps and streamline development processes.", border: "#007BFF" },
  
    ].map((card, idx) => (
      <motion.div
        className="col-md-3"
        key={idx}
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.8, delay: idx * 0.1 }}
      >
        <motion.div
          className="card h-100 text-center p-4 border-0 rounded-4"
          style={{
            border: `2px solid ${card.border}`,
            boxShadow: card.isGift
              ? "0 4px 15px rgba(255, 215, 0, 0.6)" // gold glow for gift card
              : "0 4px 12px rgba(0, 123, 255, 0.3)",
            transformStyle: "preserve-3d",
            cursor: "pointer",
          }}
          whileHover={{ rotateX: 8, rotateY: 8 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * -8;
            e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
          }}
        >
          <h6
            className="fw-bold"
            style={{ color: card.isGift ? "#FFD700" : "#007BFF" }}
          >
            {card.title}
          </h6>
          <p className="text-muted small">{card.desc}</p>

          {/* Only Gift Card has button */}
          {card.isGift && (
            <button className="btn btn-warning btn-sm fw-bold mt-2">
              Grab Now
            </button>
          )}
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>

{/* Why Training Courses Section */}
<div className="container text-center my-5">
  <h2 className="fw-bold" style={{ color: "#007BFF" }}>
    Why Training Courses from Technohub
  </h2>
  
  <div className="row g-4 mt-4">
    {[
      { img: img1, title: "Live Interactive Learning", desc: "World-class Instructor <br /> Expert-led mentoring sessions <br /> Instant doubt clearing", border: "#0022ffff" },
      { img: img2, title: "Lifetime Access", desc: "Course access never expires <br /> Free access to future updates <br /> Unlimited course content", border: "#007BFF" },
      { img: img3, title: "24x7 Support", desc: "One-on-one learning assistance <br /> Help desk support <br /> Resolve doubts in real time", border: "#007BFF" },
      { img: img4, title: "Industry-Aligned Curriculum", desc: "Up-to-date course content <br /> Real-time projects <br /> Hands-on practical knowledge", border: "#007BFF" },
      { img: img5, title: "Job Assistance", desc: "Resume building workshops <br /> Mock interview sessions <br /> Job placement support", border: "#007BFF" },
      { img: img6, title: "Flexible Learning", desc: "Self-paced learning options <br /> Live online sessions <br /> Learn at your convenience", border: "#007BFF" },
    ].map((card, idx) => (
      <motion.div
        className="col-md-4"
        key={idx}
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.8, delay: idx * 0.1 }}
      >
        <motion.div
          className="card h-100 text-center p-4 border-0 rounded-4"
          style={{
            border: `2px solid ${card.border}`,
            boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
            transformStyle: "preserve-3d",
            cursor: "pointer",
          }}
          whileHover={{ rotateX: 8, rotateY: 8 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * -8;
            e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
          }}
        >
          <img src={card.img} alt={card.title} className="mx-auto mb-3" style={{ height: "100px", objectFit: "contain" }} />
          <h4 className="fw-bold text-primary">{card.title}</h4>
          <p className="text-muted small" dangerouslySetInnerHTML={{ __html: card.desc }} />
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>

{/* Placement Section with Carousel */}
<div className="container my-5">
  <h2 className="fw-bold text-center" style={{ color: "#007BFF" }}>
    Our Successful Placements
  </h2>

  <div
    id="placementCarousel"
    className="carousel slide mt-4"
    data-bs-ride="carousel"
    data-bs-interval="3000"   // Auto rotate every 3 sec
  >
    <div className="carousel-inner">

      {/* Placement 1 */}
      <div className="carousel-item active" data-bs-interval="3000">
        <div className="d-flex align-items-center justify-content-center p-4 shadow rounded-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Sarath Sai"
            className="rounded-circle me-3"
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
          <div>
            <h5 className="fw-bold mb-1" style={{ color: "#007BFF" }}>
              Sarath Sai
            </h5>
            <p className="mb-1 text-muted small">
              Placed at <strong>ASAR IT TECHNOLOGY</strong> as Software Developer
            </p>
            <p className="text-muted small">
              “Joined as an intern, has been successfully placed as a Software Developer at ASAR IT Technology in 2024.”
            </p>
          </div>
        </div>
      </div>

      {/* Placement 2 */}
      <div className="carousel-item" data-bs-interval="3000">
        <div className="d-flex align-items-center justify-content-center p-4 shadow rounded-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Yamini"
            className="rounded-circle me-3"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <div>
            <h6 className="fw-bold mb-1" style={{ color: "#007BFF" }}>
              Yamini
            </h6>
            <p className="mb-1 text-muted small">
              Placed at <strong>ASAR IT Technology</strong> as Software Developer
            </p>
            <p className="text-muted small">
              “Joined as an intern, has been successfully placed as a Software Developer at ASAR IT Technology in 2024.”
            </p>
          </div>
        </div>
      </div>

    </div>

    {/* Carousel Indicators */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#placementCarousel"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#placementCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>

    {/* Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#placementCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#placementCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>


    
    </section>
  );
};

export default Hero;
