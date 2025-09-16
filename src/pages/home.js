// export default Hero;
import React, { useState, useEffect } from "react";

// import heroBg from "../assets/images/bg-imges/bg1.jpg";
import img1 from "../assets/images/bg-imges/img1.png"; 
import img2 from "../assets/images/bg-imges/img2.jpg";
import img3 from "../assets/images/bg-imges/img3.jpg";
import img4 from "../assets/images/bg-imges/img4.jpg";
import img5 from "../assets/images/bg-imges/img5.jpg";
import img6 from "../assets/images/bg-imges/img6.jpg";
import image1 from "../assets/images/bg-imges/bg1.jpg"
import image2 from "../assets/images/bg-imges/bg2.jpg";
import image3 from "../assets/images/bg-imges/bg3.jpg";
import icon1 from "../assets/images/bg-imges/icon1.svg"; 
import icon2 from "../assets/images/bg-imges/icon2.png"; 
import icon3 from "../assets/images/bg-imges/icon3.png"; 
import icon4 from "../assets/images/bg-imges/icon4.png"; 
import amazon from "../assets/images/bg-imges/amazon.png";
import infosys from "../assets/images/bg-imges/infosys.png";
import shell from "../assets/images/bg-imges/shell.png";
import strive from "../assets/images/bg-imges/strive.png";
import global from "../assets/images/bg-imges/global.png";
import revature from "../assets/images/bg-imges/revature.png";
import asar from "../assets/images/bg-imges/ASAR.png";
import atpar from "../assets/images/bg-imges/@par.png";
import cognizant from "../assets/images/bg-imges/cognizant.png";
import ceoPhoto from "../assets/images/gallery/colleges/ceo.png";
// Placement achievers images
import Shanmukh from "../assets/images/bg-imges/shannu.jpg";
import Yeshwanth from "../assets/images/bg-imges/yeshwanth.jpg";
import Bhanusrinivasareddy from "../assets/images/bg-imges/bhanu.jpg";
import Rajesh from "../assets/images/bg-imges/rajesh.jpg";
import Hemanthkumar from "../assets/images/bg-imges/hemanth.jpg";
import VijayBhaskarreddy from "../assets/images/bg-imges/vijay.jpg";
import Sarathsai from "../assets/images/bg-imges/sarath.jpg";
import Abbas from "../assets/images/bg-imges/abbas.jpg";
import Yamini from "../assets/images/bg-imges/yamini.jpg";
// Intern images
import Bhaskar from "../assets/images/bg-imges/bhaskar.jpg";
import Anilkumar from "../assets/images/bg-imges/anil.jpg";
import Hemabindu from "../assets/images/bg-imges/bindu.jpg";
import Manjunath from "../assets/images/bg-imges/g.manjunath.jpg";
import Surya from "../assets/images/bg-imges/surya.jpg";
import Balaji from "../assets/images/bg-imges/balaji.jpg";
import Damodhar from "../assets/images/bg-imges/damodhar.jpg";
import Udaykiran from "../assets/images/bg-imges/uday.jpg";
import VManjunath from "../assets/images/bg-imges/manjunath.jpg";
import Bayanna from "../assets/images/bg-imges/bayanna.jpg";
import Sneha from "../assets/images/bg-imges/sneha.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "./home.css";

// ⬇️ Added leaders array here
// const leaders = [
//   {
//     name: "M. Shameer Dharmavarm",
//     title: "Founder & CEO",
//     image: ceoPhoto,
//     bio:
//       "Technohub, founded in 2021, has grown into a bridge between learning and career success. With a strong focus on hands-on training, industry mentorship, and real-world exposure, we prepare every learner to step confidently into the future of technology.",
//     stats: [
//       { label: "Founded", value: "2012" },
//       { label: "Students Trained", value: "5,000+" },
//       { label: "Students Placed", value: "2,000+" },
//       { label: "Workshops & Webinars", value: "20+" },
//     ],
//     quote:
//       "At Technohub, we don’t just teach technology—we connect ambition with opportunity, building a true bridge to success.",
//   },
// ];

const Hero = () => {
  // Hero Section Slideshow Data
  const slides = [
    {
      backgroundImage: image1,
      heading: "Unlock New Career Opportunities with Technohub",
      description:
        "“Join our professional courses and start your journey toward a successful career. Explore a variety of training programs tailored just for you!”",
      buttonText: "Get Started",
      path: "/auth",
      image: "/img/hero-image1.png",
    },
    {
      backgroundImage: image2,
      heading: "Learn from the Best in the Industry",
      description:
        "“Our expert instructors provide real-world knowledge to help you achieve your goals.”",
      buttonText: "Discover Courses",
      path: "/courses", 
      image: "/img/hero-image2.png",
    },
    {
      backgroundImage: image3,
      heading: "Empowering You with Real-World Software Skills",
      description:"“Unlock top courses, expert guidance, and skill growth with flexible, practical, and career-driven programs.”",
      buttonText: "Get Services",
      path: "/services",

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
  

  const companySliderSettings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
  };

  const profileSliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const placementAchievers = [
    { name: "B. Shanmukh", image: Shanmukh, company: "REVARTURE" },
    { name: "B. Yeshwanth", image: Yeshwanth, company: "ASAR IT TECHNOLOGIES" },
     { name: "Hemabindu", image: Hemabindu, company: "AMAZON" },
    { name: "C. Bhanusrinivas reddy", image: Bhanusrinivasareddy, company: "ASAR IT TECHNOLOGIES" },
    { name: "T. Rajesh", image: Rajesh, company: "VIRTUSA" },
    { name: "M. Hemanthkumar", image: Hemanthkumar, company: "SYNECHRON" },
    { name: "P. VijayBhaskar reddy", image: VijayBhaskarreddy, company: "REVARTURE" },
    { name: "C. Sarathsai ", image: Sarathsai, company: "ASAR IT TECHNOLOGIES" },
    { name: "K. Yamini", image: Yamini, company: "ASAR IT TECHNOLOGIES" },
    { name: "A. Afroz Abbas", image: Abbas, company: "Amazon" },
  ];

  const interns = [
    { name: "Bhaskar", image: Bhaskar, company: "ASAR IT TECHNOLOGIES" },
    { name: "Anil kumar", image: Anilkumar, company: "ASAR IT TECHNOLOGIES" },
    { name: "G.Manjunath", image: Manjunath, company: "ASAR IT TECHNOLOGIES" },
    { name: "G. Surya", image: Surya, company: "ASAR IT TECHNOLOGIES" },
    { name: "K. Balaji", image: Balaji, company: "ASAR IT TECHNOLOGIES" },
    { name: "K. Damodhar", image: Damodhar, company: "ASAR IT TECHNOLOGIES" },
    { name: "R. Udaykiran", image: Udaykiran, company: "ASAR IT TECHNOLOGIES" },
    { name: "V. Manjunath", image: VManjunath, company: "ASAR IT TECHNOLOGIES" },
    { name: "Y. Bayanna", image: Bayanna, company: "ASAR IT TECHNOLOGIES" },
    { name: "Sneha", image: Sneha, company: "ASAR IT TECHNOLOGIES" },
  ];

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
        <div style={{ position: "relative", zIndex: 2, color: "#efe8e8ff" }}>
  <motion.h1
    key={slide.heading}
    className="fw-bold display-4"
    style={{ color: "#acf2feff" }} // change color as you like
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {slide.heading}
  </motion.h1>
  <motion.p
  key={slide.description}
    className="lead mt-3"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    style={{
    textShadow: "2px 2px 8px rgba(0,0,0,0.6)" // ✅ adds shadow
  }}
  >
    {slide.description}
  </motion.p>

{/* Hero Buttons */}
  {slide.buttonText && slide.path && (
    slide.buttonText === "Get Started" ? (
      <Link to={slide.path} className="hero-gift-card-btn btn-primary  mt-3">
        {slide.buttonText}
      </Link>
    ) : (
      <Link to={slide.path} className="hero-oval-btn btn-primary mt-3">
        {slide.buttonText}
      </Link>
    )
  )}
</div>
      </div>

      {/* About Technohub Section */}
      <div className="container text-center my-5">
        <motion.h2
          className="fw-bold"
          style={{ color: "#007BFF",}}
          initial={{ opacity: 0, rotateX: -90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <b> About Technohub</b>
        </motion.h2>

        <motion.p
          className="mt-3"
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ transformOrigin: "left center" }}
        >
          Technohub is a training institution and a reputable Software Training and
          Certification platform. Technohub follows proper work ethics and has a
          positive environment where individual can learn and grow. We provide
          both offline and online courses. The competitive environment at Technohub
          also provides the necessary edge and exposure for every individual to
          succeed in their career in Software.
        </motion.p>
      </div>

    {/* Leadership Section */}
{/* <div className="container my-5">
  {leaders.map((leader, idx) => (
    <motion.div
      key={idx}
      className="col-12"
      initial={{ y: 30, opacity: 0, scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
    >
       */}
      {/* Header: photo left, text right */}
      {/* <div
        className="card leader-card shadow p-4 border-0 rounded-4 text-center"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          boxShadow: "0 8px 20px rgba(0, 123, 255, 0.3)",
          border: "2px solid #007BFF",
        }}
      > */}
        {/* Header: photo + info */}
        {/* <div className="leader-header d-flex flex-column flex-md-row align-items-center text-md-start mb-4">
        <img
          src={leader.image}
          alt={leader.name}
           className="leader-img rounded-circle mb-3 mb-md-0"
           style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
     <div className="leader-info ms-md-4">
  <h3 className="leader-name fw-bold text-primary d-flex align-items-center flex-wrap">
    {leader.name}
    <span
      className="ms-2 px-3 py-1 rounded-pill"
      style={{
        backgroundColor: "#e9f2ff",
        color: "#007BFF",
        fontSize: "0.9rem",
        fontWeight: "600",
      }}
    >
      {leader.title}
    </span>
  </h3>
  <p className="leader-bio mt-2 text-muted">{leader.bio}</p>
</div>


        </div> */}
          
      {/* Stats Section */}
      {/* <div className="leader-stats row text-center my-4">
          {leader.stats.map((stat, sIdx) => (
            <div key={sIdx} className="col-6 col-md-3 mb-3">
              <div className="stat-box p-3 rounded-3 h-100">
                <h5 className="fw-bold text-primary">{stat.value}</h5>
                <p className="small text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div> */}

       {/* Quote */}
        {/* <div className="leader-quote fst-italic text-primary">
          <p>“{leader.quote}”</p>
        </div>
      </div>
    </motion.div>
  ))}
</div> */}


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
                style={{ maxWidth: "220px", margin: "0 auto", cursor: "pointer", boxShadow: "0 8px 20px rgba(0, 123, 255, 0.6)", border: "2px solid #007BFF" }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
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
            { title: "Java fullstack", desc: "Learn Java from scratch and become an expert in backend development.", border: "#007BFF" },
            { title: "React Development", desc: "Master React and build powerful front-end web applications.", border: "#007BFF" },
            { title: "Python fullstack ", desc: "Learn Python fullstack and build machine learning models.", border: "#007BFF" },
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
                    ? "0 4px 15px rgba(66, 139, 204, 0.6)"
                    : "0 4px 12px rgba(0, 123, 255, 0.3)",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <h6
                  className="fw-bold"
                  style={{ color: card.isGift ? "#FFD700" : "#007BFF" }}
                >
                  {card.title}
                </h6>
                <p className="text-muted small">{card.desc}</p>
                {card.isGift && (
                  <button className="btn btn-warning btn-sm fw-bold mt-2">
                    Grab Now
                  </button>
                )}

              </motion.div>
            </motion.div>
          ))}
            
   {/* View All Button after DevOps */}
<div style={{ textAlign: "center", marginTop: "10px" }}>
  <Link to="/courses" className="view-all-btn">View All</Link>
</div>

          
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
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <img src={card.img} alt={card.title} className="mx-auto mb-3" style={{ height: "100px", objectFit: "contain" }} />
                <h4 className="fw-bold text-primary">{card.title}</h4>
                <p className="text-muted small" dangerouslySetInnerHTML={{ __html: card.desc }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

    {/* Company Logos Slider Section */}
<div className="container my-5">
 


  <h2 className="fw-bold text-center" style={{ color: "#007BFF",marginBottom: "100px", marginTop: "200px" }}>
    Collaborated Companies
  </h2>

  <Slider
    infinite={true}
    speed={3000}
    slidesToShow={6}   // 👈 show more logos per row
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={1500}
    arrows={false}
    pauseOnHover={false}
    responsive={[
    {
      breakpoint: 1024, // tablets
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 3,   // ✅ only 2 logos per row
        slidesToScroll: 1,
      },
    },
  ]}
  >
    {[atpar, amazon, asar, global, infosys, revature, shell, strive, cognizant].map(
      (logo, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 15px",  // 👈 reduce spacing between logos
            margin: "0",
          }}
        >
          <img
            src={logo}
            alt={`Company ${idx}`}
            style={{
              maxWidth: "120px",   // ✅ keep original size
              maxHeight: "60px",
              objectFit: "contain",
            }}
          />
        </div>
      )
    )}
  </Slider>
</div>
{/* Placement Achievers Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold" style={{ color: "#007BFF", marginBottom: "50px", marginTop: "150px" }}>
          Placement Achievers
        </h2>
        <Slider {...profileSliderSettings}>
          {placementAchievers.map(({ image, name, company }, idx) => (
            <motion.div
              key={idx}
              className="p-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="profile-card text-center" style={{ cursor: "pointer" }}>
                <img src={image} alt={name} />
                <h6>{name}</h6>
                <p className="text-primary small">{company}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Interns Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold" style={{ color: "#007BFF", marginBottom: "30px" }}>
          Interns
        </h2>
        <Slider {...profileSliderSettings}>
          {interns.map(({ image, name, company }, idx) => (
            <motion.div
              key={idx}
              className="p-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="profile-card text-center" style={{ cursor: "pointer" }}>
                <img src={image} alt={name} />
                <h6>{name}</h6>
                <p className="text-primary small">{company}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>    
    </section>
  );
};

export default Hero;