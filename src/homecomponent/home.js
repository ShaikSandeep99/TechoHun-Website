import React, { useRef, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';

function Home() {



  const slideRef = useRef(null); // Reference to the slide element
  const [isDragging, setIsDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleArrowClick = (direction) => {
    const slide = slideRef.current;
    const firstImgWidth = slide.querySelectorAll("img")[0].clientWidth + 14;
    slide.scrollLeft += direction === 'left' ? -firstImgWidth : firstImgWidth;
  };

  const dragStart = (e) => {
    setIsDragging(true);
    setPrevPageX(e.pageX);
    setPrevScrollLeft(slideRef.current.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const positionDiff = e.pageX - prevPageX;
    slideRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    setIsDragging(false);
  };
  const showDropdown = () => {
    setIsDropdownVisible(true); // Show dropdown
  };

  const hideDropdown = () => {
    setIsDropdownVisible(false); // Hide dropdown
  };

  return (
    <>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Technohub</title>
      <link rel="icon" type="image/x-icon" href="/img/favicon.ico.jpg" />
      {/* Add Bootstrap CSS link */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="/css-folder/home.css" />{" "}
      {/* Custom CSS for centering the navigation bar */}
      <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Josefin+Sans:wght@500&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/img/favicon.ico.jpg" />
      <section
        className="container-fluid bg-light"
        style={{ fontWeight: "bold", color: "black" }}
      >
        <div className="container text-center">
          {" "}
          {/* Center the navigation bar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img
                src="../img/technohub-logo.png"
                alt="technohub"
                id="technohub-logo"
                width={190} height={90}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {" "}
                {/* mx-auto class to center the items */}
                <li className="nav-item active">
                  <a className="nav-link" href="home.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isDropdownVisible}
                  >
                    Courses
                  </a>
                  <div
                    className={`dropdown-menu ${isDropdownVisible ? 'show' : ''
                      }`}
                    aria-labelledby="navbarDropdown"
                    id="courses-dropdown"
                  >
                    <Link className="dropdown-item" to="/java">
                      Java
                    </Link>
                    <Link className="dropdown-item" to="/python">
                      Python
                    </Link>
                    <Link className="dropdown-item" to="/react">
                      ReactJS
                    </Link>
                    <Link className="dropdown-item" to="/nodejs">
                      Node.JS
                    </Link>
                    <Link className="dropdown-item" to="/angular">
                      Angular.JS
                    </Link>
                    <Link className="dropdown-item" to="/testing">
                      Software Testing
                    </Link>
                    <Link className="dropdown-item" to="/sql">
                      SQL
                    </Link>
                    <Link className="dropdown-item" to="/android">
                      Android development
                    </Link>
                    <Link className="dropdown-item" to="/github">
                      GitHub
                    </Link>
                    <Link className="dropdown-item" to="/ionic-hybrid">
                      Ionic Hybrid
                    </Link>
                    <Link className="dropdown-item" to="/devops">
                      DEVOPS
                    </Link>
                    <Link className="dropdown-item" to="/cybersecurity">
                      Cybersecurity
                    </Link>
                    <Link className="dropdown-item" to="/microsoft-power">
                      Microsoft Power
                    </Link>
                    <Link className="dropdown-item" to="/microsoft-azure">
                      Microsoft Azure
                    </Link>
                    <Link className="dropdown-item" to="/microsoft-data-fundamental">
                      Microsoft Data Fundamentals
                    </Link>
                    <Link className="dropdown-item" to="/microsoft-infrastructure">
                      Microsoft Infrastructure
                    </Link>
                    <Link className="dropdown-item" to="/powerbi">
                      Power BI
                    </Link>

                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact US
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <section style={{ backgroundColor: "rgb(241,241,241)" }}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
          </ul>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ backgroundColor: "#EDE4DB" }}
            >
              <img src="./img/main2.jpg" alt="Slide 1" className="img-fluid" />
            </div>
            <div className="carousel-item">
              <img
                src="./img/bg-imges/Product Marketing Manager.png"
                alt="Slide 2"
                className="img-fluid"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10 mb-3" id="search-homepage">
              <div className="" id="search-span">
                <form id="searchForm">
                  <div className="search-form">
                    <span>
                      {" "}
                      <input
                        type="text"
                        name="search"
                        placeholder="what do you want learn?"
                        required="required"
                        id="searchInput"
                      />
                    </span>
                    <span>
                      {" "}
                      <input
                        className="btn btn-primary"
                        id="start-search"
                        type="submit"
                        defaultValue="Search"
                      />
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container mt-3" id="technohub-section">
          <div className="row">
            <div className="col-lg-12 mt-5">
              <h3
                className="text-center"
                style={{ color: "#0793d1", fontWeight: "bold" }}
              >
                {" "}
                Technohub{" "}
              </h3>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-1" />
            <div className="col-md-10 col-12">
              <div className="text-center mb-5">
                <span>
                  Technohub is a training Institution and a good Software Training
                  and Certification platform. Technohub follows proper work ethics
                  and has a positive environment where an individual can learn and
                  grow. We provide both offline and online courses. The competitive
                  environment at Technohub also provides the necessary edge and
                  exposure for every individual to succeed in their career in
                  Software.
                </span>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="prof">
                <img
                  src="/img/clipboard-check.svg"
                  alt="clipboard-check"
                  id="clipboard"
                />
                <div className="profes">
                  <b style={{ color: "#0793d1" }}> 500+</b> professionals trained
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="prof">
                <img src="/img/expert.png" alt="clipboard-check" id="clipboard" />
                <div className="profes">
                  <b style={{ color: "#0793d1" }}> 10+ years</b> of Experience
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="prof">
                <div className="mt-2">
                  <img
                    src="/img/clients.png"
                    alt="clipboard-check"
                    id="clipboard"
                  />
                </div>
                <div className="profes">
                  <b style={{ color: "#0793d1" }}> 30 to 40 </b> Hours Live-Project
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="prof">
                <img src="/img/success.png" alt="clipboard-check" id="clipboard" />
                <div className="profes">
                  <b style={{ color: "#0793d1" }}> 99% </b> Job Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#f0f8ff" }}>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12">
              <h3
                className="mt-4 mb-4 text-primary text-center"
                style={{ fontWeight: "bold" }}
              >
                {" "}
                Why Training Courses from Technohub
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-primary" id="exampleModalLabel">
                    <picture>
                      <img
                        width={40}
                        height={40}
                        alt="Live Interactive Learning"
                        title="Live Interactive Learning"
                        fullbase="true"
                        loading="lazy"
                        src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_live.webp"
                      />
                    </picture>
                    Live Interactive Learning
                  </h5>
                </div>
                <div className="modal-body">
                  <ol style={{ listStyleType: "disc" }}>
                    <li> World class Instructor</li>
                    <li> Expert-led mentoring sessions</li>
                    <li> Instant doubts clearing</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-primary" id="exampleModalLabel">
                    <picture>
                      <img
                        width={40}
                        height={40}
                        fullbase="true"
                        alt="Lifetime Access"
                        title="Lifetime Access"
                        loading="lazy"
                        src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_life.webp"
                      />
                    </picture>
                    Life Time Access
                  </h5>
                </div>
                <div className="modal-body">
                  <ol style={{ listStyleType: "disc" }}>
                    <li> Course access never expires</li>
                    <li> Free access to future updates</li>
                    <li> Unlimited to course content</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-primary" id="exampleModalLabel">
                    <picture>
                      <img
                        width={40}
                        height={40}
                        alt="24x7 Support"
                        title="24x7 Support"
                        fullbase="true"
                        loading="lazy"
                        src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_247.webp"
                      />
                    </picture>
                    Support
                  </h5>
                </div>
                <div className="modal-body">
                  <ol style={{ listStyleType: "disc" }}>
                    <li> one-on-one Learning Assistance</li>
                    <li> Help desk support</li>
                    <li> Resolve doubts in realtime</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-primary" id="exampleModalLabel">
                    <picture>
                      <img
                        width={40}
                        height={40}
                        fullbase="true"
                        alt="Hands-On Project Based Learning"
                        title="Hands-On Project Based Learning"
                        loading="lazy"
                        src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_handson.webp"
                      />
                    </picture>
                    Hands-on Project Based Learning
                  </h5>
                </div>
                <div className="modal-body">
                  <ol style={{ listStyleType: "disc" }}>
                    <li> Industry relevent projects</li>
                    <li> Course demo dataset &amp; files</li>
                    <li> Quizzes &amp; Assignments</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-primary" id="exampleModalLabel">
                    <picture>
                      {" "}
                      <img
                        width={40}
                        height={40}
                        fullbase="true"
                        alt="Industry Recognised Certification"
                        title="Industry Recognised Certification"
                        loading="lazy"
                        src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_certi.webp"
                      />
                    </picture>
                    Industry Recognised Certification
                  </h5>
                </div>
                <div className="modal-body">
                  <ol style={{ listStyleType: "disc" }}>
                    <li> Technohub Training certificate</li>
                    <li> Graded performance certificate</li>
                    <li> Certificate of completion</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3
                className="text-center text-dark mt-5"
                style={{ fontWeight: "bold" }}
              >
                {" "}
                Learining Options
              </h3>
            </div>
          </div>
          <div className="row mt-4 mb-5">
            <div className="col-lg-4">
              <img
                src="/img/training1.webp"
                width="100%"
                className="img-fluid img-responsive center-block d-block mx-auto mt-2"
                style={{ boxShadow: "0px 0px 5px", height: "30vh" }}
              />
              <h5
                className="mt-4"
                id="learn-opt-heading"
                style={{ backgroundColor: "rgb(0, 153, 255)" }}
              >
                {" "}
                On-Premise Classroom Training
              </h5>
            </div>
            <div className="col-lg-4">
              <img
                src="/img/learning5.webp"
                width="100%"
                className="img-fluid img-responsive center-block d-block mx-auto mt-2"
                style={{ boxShadow: "0px 0px 5px", height: "30vh" }}
              />
              <h5
                className="mt-4"
                id="learn-opt-heading"
                style={{ backgroundColor: "rgb(0, 153, 255)" }}
              >
                Instructor-Led Live,Online Training
              </h5>
            </div>
            <div className="col-lg-4">
              <img
                src="/img/learning6.png"
                width="100%"
                className=" mt-2"
                style={{ boxShadow: "0px 0px 5px", height: "30vh" }}
              />
              <h5
                className="mt-4"
                id="learn-opt-heading"
                style={{ backgroundColor: "rgb(0, 153, 255)" }}
              >
                {" "}
                Self-Paced online Training
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container" id="trainer-section">
          <div className="row">
            <div className="col-lg-4 mb-3 ">
              <div className="exp-trainer">
                <div className="trainer">
                  <div className="icon">
                    <img src="/img/classroom.png" alt="Classroom" />
                  </div>
                  <div className="text-center">
                    <h4>Experienced Trainers</h4>
                    <p>
                      We have experienced trainers with real-time experience, use
                      many formats and platforms to ensure the right content is
                      available in the best format to ensure effective knowledge/
                      skills transfer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3 ">
              <div className="exp-trainer">
                <div className="trainer">
                  <div className="icon">
                    <img src="/img/certificate.png" alt="certificate" />
                  </div>
                  <div className="text-center">
                    <h4>Certification</h4>
                    <p>
                      Unlock your potential with our comprehensive course
                      certification. Gain valuable skills and knowledge through
                      expert-led training. Boost your career prospects and join a
                      community of successful graduates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="exp-trainer">
                <div className="trainer">
                  <div className="icon">
                    <img src="/img/job-support.png" alt="job-support" />
                  </div>
                  <div className="text-center">
                    <h4>Job Support</h4>
                    <p>
                      Get the job support you need to excel in your career. Our
                      expert team is here to guide you through challenges, offer
                      valuable advice, and help you achieve success in your
                      professional journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ASAR with Uzbekistan government */}
      <section className="mou-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="mou-heading">
                Empowering Education and Innovation : Our Partnership with the
                Uzbekistan Government
              </h3>
              <p className="mou-content">
                We are delighted to announce a strategic collaboration between our
                esteemed company and the Government of Uzbekistan. In a landmark
                move, our leadership has successfully executed a Memorandum of
                Understanding (MOU) with the Uzbekistan government, solidifying our
                commitment to advance education and innovation in the region.
              </p>
              <dl className="mou-list">
                <dt>Elevating Engineering Education</dt>
                <dd>
                  At the heart of this collaboration is our pledge to support
                  engineering colleges and universities throughout Uzbekistan.
                  Recognizing the pivotal role that education plays in shaping the
                  future, we are dedicated to enhancing the quality and scope of
                  engineering programs.
                </dd>
                <dt>Cultivating a Startup Ecosystem</dt>
                <dd>
                  In tandem with our commitment to education, we are enthusiastic
                  about cultivating a vibrant startup ecosystem in Uzbekistan. Our
                  company is poised to contribute resources, expertise, and
                  mentorship to nurture the growth of startups.{" "}
                </dd>
                <dt>A Collaborative Vision for Progress</dt>
                <dd>
                  This collaboration represents more than a contractual agreement;
                  it signifies a shared vision for progress and mutual growth. By
                  working hand-in-hand with the Uzbekistan government.
                </dd>
                {/* <dt>A Collaborative Vision for Progress</dt>
                  <dd>This collaboration represents more than a contractual agreement; it signifies a shared
                      vision for progress and mutual growth. By working hand-in-hand with the Uzbekistan
                      government.</dd> */}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="mou-images">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 shadow-sm p-3 mb-5 bg-body rounded">
              <img
                src="../img/uzebekistan-imges/mou-1.jpg"
                alt="mou-1"
                width="100%"
                height="220px"
              />
            </div>
            <div className="col-lg-4 shadow-sm p-3 mb-5 bg-body rounded">
              <img
                src="../img/uzebekistan-imges/mou-2.jpg"
                alt="mou-1"
                width="100%"
                height="220px"
              />
            </div>
            <div className="col-lg-4 shadow-sm p-3 mb-5 bg-body rounded">
              <img
                src="../img/uzebekistan-imges/mou-3.jpg"
                alt="mou-1"
                width="100%"
                height="220px"
              />
            </div>
            {/* <div class="col-lg-3">
              <img src="./images/mou-1.jpg" alt="mou-1">
          </div> */}
          </div>
        </div>
      </section>
      <section
        className="galary-section"
        style={{ backgroundColor: "rgb(14, 14, 14)" }}
      >
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-12 text-center mt-4 mb-3">
              <h2 className="text-white">
                Hacathon &amp; Internship Image Gallery
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-4">
              <div className="wrapper">
                <i id="left" className="fa-solid fa-angle-left" onClick={() => handleArrowClick('left')} />
                <div className="slides" ref={slideRef} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragStop} onMouseLeave={dragStop}>
                  <img src="/img/hacathon-img/hackthon6.jpeg" alt="group-photo" />
                  <img src="/img/hacathon-img/group-photo.jpeg" alt="group-photo" />
                  <img src="/img/hacathon-img/team-photo.jpeg" alt="group-photo" />
                  <img
                    src="/img/internship-images/intenship-img1.jpg"
                    alt="group-photo"
                  />
                  <img
                    src="/img/internship-images/intenship-img2.jpg"
                    alt="group-photo"
                  />
                  <img
                    src="/img/internship-images/intenship-img3.jpg"
                    alt="group-photo"
                  />
                  <img
                    src="/img/internship-images/intenship-img4.jpg"
                    alt="group-photo"
                  />
                  <img
                    src="/img/internship-images/intenship-img5.jpg"
                    alt="group-photo"
                  />
                  <img
                    src="/img/internship-images/intenship-img6.jpg"
                    alt="group-photo"
                  />
                  <img
                    src="/img/internship-images/intenship-img7.jpg"
                    alt="group-photo"
                  />
                  <img
                    src="/img/internship-images/intenship-img8.jpg"
                    alt="group-photo"
                  />
                  <img src="/img/hacathon-img/hackthon4.jpeg" alt="group-photo" />
                  <img src="/img/hacathon-img/hackathon.jpeg" alt="group-photo" />
                  <img src="/img/hacathon-img/hackathon1.jpeg" alt="group-photo" />
                  <img src="/img/hacathon-img/hackthon3.jpeg" alt="group-photo" />
                </div>
                <i id="right" className="fa-solid fa-angle-right" onClick={() => handleArrowClick('right')} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-3">
            <div className="col-lg-0" />
            <div className="col-lg-4 mt-3 mb-3 text-center">
              <div className="demo-class">
                <form
                  id=""
                  action="https://formsubmit.co/0d9d0d6d55b0a580b48ab488a57b4b93"
                  method="POST"
                >
                  <h5 style={{ color: "blue", fontWeight: "bold" }}>Book Demo</h5>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter name"
                    required="required"
                  />{" "}
                  <br />
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    placeholder="Mobile number"
                    required="required"
                  />
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    required="required"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="course"
                    placeholder="Enter Course"
                    required="required"
                    id=""
                  />
                  <br />
                  <button className="btn btn-success" type="submit">
                    {" "}
                    Submit{" "}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-7 mt-3 mb-3">
              <h4 className="text-primary"> Office location</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1389727982096!2d77.57674171086957!3d13.026820813611725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bbe308bc23%3A0x914d4d95aac2da1!2sTechnohub%20Trainings!5e0!3m2!1sen!2sin!4v1691157585576!5m2!1sen!2sin"
                width="100%"
                style={{ border: 0, height: "85%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="" style={{ backgroundColor: "rgb(14, 14, 14)" }}>
        <div className="row text-white" style={{ marginLeft: 30 }}>
          <div className="col-lg-1" />
          <div className="col-lg-3 mt-4">
            <div className="">
              <img src="/img/logo.svg" alt="technohub" />
              {/* <h5>Hello, this is the fading text!</h5> */}
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className="">
              <h4>Site Map</h4>
              <ul
                id="site-map"
                style={{ listStyleType: "none", margin: 0, padding: 0 }}
              >
                <li>
                  {" "}
                  <a href="home.html"> Home </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> About us </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="contact.html"> Contact us </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> googleMap </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="">
              <h4> Address</h4>
              <div className="each-line">
                <div>
                  <img src="/img/marker.svg" alt="marker" />
                </div>
                <p>
                  #131A, 1st floor, 80 Feet Rd, RMV 2nd stage <br /> MET Layout,
                  Ashwath Nagar, <br />
                  Sanjaynagar, Bengaluru-94.
                </p>
              </div>
              <div className="each-line">
                <div>
                  <img src="/img/phone.svg" alt="phone" />
                </div>
                <p>9849175588</p>
              </div>
              <div className="each-line">
                <div>
                  <img src="/img/mail.svg" alt="mail" />
                </div>
                <p>shameer@technohubtrainings.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* dialogflow messenger chatbot */}
      <df-messenger
        intent="WELCOME"
        chat-title="Technohub_bot"
        agent-id="4bc203a0-315f-47d9-b1f2-2bd52990f28b"
        language-code="en"
      />
      {/* navbar dropdown folder javascript */}
      {/* accordian section javascript */}
      {/* footer section javascript */}
      {/* chatbot integration code  */}
      {/*  */}
      {/* course search option javascript */}
      {/* galary-section javascript */}
    </>
  )
}
export default Home;

