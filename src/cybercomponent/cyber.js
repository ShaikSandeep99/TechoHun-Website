import React, { useState } from 'react';
import cyberjs from './cyberjs';
import { Link } from 'react-router-dom';
// import './style.css';
function Cybersecurityjs() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }
    const showDropdown = () => {
      setIsDropdownVisible(true); // Show dropdown
  };

  const hideDropdown = () => {
      setIsDropdownVisible(false); // Hide dropdown
  };
    return (
    
<>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Technohub</title>
  <link rel="icon" type="image/x-icon" href="/img/favicon.ico.jpg" />
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css"
    integrity="sha384-PJsj/BTMqILvmcej7ulplguok8ag4xFTPryRq8xevL7eBYSmpXKcbNVuy+P0RMgq"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  />
  {/* Add Bootstrap CSS link */}
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="/css-folder/home.css" />{" "}
  {/* Custom CSS for centering the navigation bar */}
  <link rel="stylesheet" href="/css-folder/courses.css" />
  <section>
    <div className="d-flex justify-content-around" id="enquery-sec">
      <div>
        <label htmlFor=""> New Course Enquery : +918247023831</label>
      </div>
      <div>
        <label htmlFor=""> E-mail : info@technohubtrainings.com</label>
      </div>
    </div>
  </section>
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
            src="/img/technohub-logo.png"
            alt="technohub"
            id="technohub-logo"
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
            <li className="nav-item">
              <a className="nav-link" href="home.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className="nav-item active dropdown"
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
                aria-expanded="false"
              >
                Courses
              </a>
              <div
                className={`dropdown-menu ${
                  isDropdownVisible ? 'show' : ''
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
            {/* <li class="nav-item">
                      <a class="nav-link" href="index.html">Testing</a>
                  </li> */}
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
  <section className="">
    <div className="">
      <img
        src="/img/Cybersecurity.png"
        alt=""
        className="img-fluid"
        width="100%"
      />
    </div>
  </section>
  <section>
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-1" />
        <div className="col-lg-10 " id="search-homepage">
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
  <section>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-1" />
        <div className="col-lg-7 mt-3">
          <h3 className=" mb-3 text-primary" style={{ fontWeight: "bold" }}>
            Why Learn Cybersecurity Course
          </h3>
          <p className="mb-3">
            learning cybersecurity is not only a valuable and in-demand skill
            but also a vital responsibility in today's interconnected world.
            Cybersecurity professionals play a pivotal role in defending against
            cyber threats, protecting critical assets, and ensuring the privacy
            and safety of individuals and organizations. Whether you are
            interested in a cybersecurity career or simply want to enhance your
            digital security knowledge, learning cybersecurity has numerous
            benefits that extend beyond personal and professional growth.
          </p>
          <h5 className="mb-3" style={{ fontWeight: "bold" }}>
            Benefits
          </h5>
          <p className="mb-5">
            The course may include hands-on labs, practical exercises,
            real-world scenarios, and simulations to reinforce learning and
            provide participants with practical experience in cybersecurity.
            Upon completion of the course, participants should have a solid
            foundation in cybersecurity principles, methodologies, and best
            practices, enabling them to contribute to the protection of digital
            assets and data in various professional settings.
          </p>
        </div>
        <div className="col-lg-3 mt-3 mb-3 text-center">
          <div className="demo-class">
            <h5 className="mb-4" style={{ color: "blue", fontWeight: "bold" }}>
              Book Demo
            </h5>
            <form
              id=""
              action="https://formsubmit.co/0d9d0d6d55b0a580b48ab488a57b4b93"
              method="POST"
            >
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
                Send Request{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-light">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-1" />
        <div className="col-lg-10 mt-4">
          <h3 className="mt-2 text-primary">
            <b>Cybersecurity Course</b>
          </h3>{" "}
          <br />
          <p>
            {" "}
            <b>1.Introduction to Cybersecurity:</b> Understanding the basics of
            cybersecurity, its importance, and the challenges faced in
            protecting digital systems.
          </p>
          <p>
            {" "}
            <b>2.Network Security:</b> Exploring network security concepts,
            including firewalls, intrusion detection systems, and securing
            wireless networks.
          </p>
          <p>
            {" "}
            <b>3.Secure Coding Practices:</b> Learning about secure coding
            practices and techniques to prevent common vulnerabilities, such as
            injection attacks and cross-site scripting.
          </p>
          <p>
            {" "}
            <b>4.Web Application Security:</b> Understanding the security
            considerations for web applications, including authentication,
            authorization, and securing against common web vulnerabilities.
          </p>
          <p>
            {" "}
            <b>5.Encryption and Cryptography: </b>Exploring encryption
            algorithms, cryptographic protocols, and the use of encryption to
            protect data confidentiality andintegrity.
          </p>
          <p>
            {" "}
            <b>6.Vulnerability Assessment and Penetration Testing: </b>Learning
            how to conduct vulnerability assessments and penetration tests to
            identify and address security weaknesses.
          </p>
          <p>
            {" "}
            <b>7.Identity and Access Management:</b> Understanding the
            principles of identity and access management, including
            authentication, authorization, anduser provisioning.
          </p>
          <p>
            {" "}
            <b>8.Security Incident Response and Management:</b> Exploring
            strategies and best practices for responding to security incidents,
            managing breaches, and conducting incident investigations.
          </p>
          <p>
            {" "}
            <b>9.Secure Network Communication:</b> Understanding secure
            communication protocols and techniques, such as SSL/TLS, VPNs, and
            secure email.
          </p>
          <p>
            {" "}
            <b>10.Ethical Hacking and Defense Strategies:</b> Learning about
            ethical hacking techniques, understanding attacker methodologies,
            and developing effective defense strategies.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-light">
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="col-lg-12 text-center">
          <h3 className="text-primary mt-4">
            Why enroll for Ionic Hybrid Applications Course?
          </h3>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-4 mb-2">
          <div className="why-enroll">
            <div className="mt-2 text-center">
              <img
                src="/img/box_traning_1.webp"
                className="mt-3"
                alt="box_traning_3"
                width="50px"
              />
            </div>
            <div className="why-enroll-second">
              <p className="mt-2">
                The number of unfilled cyber security jobs is expected to reach
                3.5 million in 2025
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-2">
          <div className="why-enroll">
            <div className="mt-2 text-center">
              <img
                src="/img/box_traning_2.webp"
                className="mt-3"
                alt="box_traning_3"
                width="50px"
              />
            </div>
            <div className="why-enroll-second">
              <p>
                Global cyber security industry is estimated to cross $248.26
                billion by 2023 – forbes.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-2">
          <div className="why-enroll">
            <div className="mt-2 text-center">
              <img
                src="/img/box_traning_3.webp"
                className="mt-3"
                alt="box_traning_3"
                width="50px"
              />
            </div>
            <div className="why-enroll-second">
              <p>
                Average salary of Cyber security Professional varies from
                $84,000 – $110,000 - Indeed.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="row mt-4 mb-5">
        <div className="col-lg-3 mb-2">
          <div className="card">
            <p className="it-software"> IT Software Course</p>
            <i
              className="fa-solid fa-building"
              aria-hidden="true"
              style={{ fontSize: 60, color: "rgb(0, 162, 255)" }}
            />
            <p className="text-center mt-1" style={{ fontWeight: 500 }}>
              Fully Hands-On IT Training
            </p>
          </div>
        </div>
        <div className="col-lg-3 mb-2">
          <div className="card">
            <p className="it-software"> Work on Live-Project</p>
            <i
              className="fa-solid fa-desktop"
              aria-hidden="true"
              style={{ fontSize: 60, color: "rgb(0, 162, 255)" }}
            />
            <p className="text-center mt-1" style={{ fontWeight: 500 }}>
              30 to 40 Hours Live Project
            </p>
          </div>
        </div>
        <div className="col-lg-3 mb-2">
          <div className="card">
            <p className="it-software"> Interview Preparation</p>
            <i
              className="fa-solid fa-book-open-reader"
              aria-hidden="true"
              style={{ fontSize: 60, color: "rgb(0, 162, 255)" }}
            />
            <p className="text-center mt-1" style={{ fontWeight: 500 }}>
              Unlimited Interview Calls
            </p>
          </div>
        </div>
        <div className="col-lg-3 mb-2">
          <div className="card">
            <p className="it-software"> Job &amp; Placements</p>
            <i
              className="fa-solid fa-person-circle-check"
              aria-hidden="true"
              style={{ fontSize: 60, color: "rgb(0, 162, 255)" }}
            />
            <p className="text-center mt-1" style={{ fontWeight: 500 }}>
              99% Placements
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="" style={{ backgroundColor: "#c5eded" }}>
    <div className="Container">
      <div className="row">
        <h3
          className="text-primary text-center mb-4 mt-4"
          style={{ fontWeight: "bold" }}
        >
          Cybersecurity Course Course Syllabus
        </h3>
        <div className="col-lg-2" />
        <div className="col-lg-8 mb-5">
       
        <button
              className="accordion btn btn-light btn-block"
              onClick={() => toggleAccordion(0)}
            >Introduction to Cybersecurity </button>
                     <div className="panel" style={{ display: openIndex === 0 ? 'block' : 'none' }}>           
                                    <ol>
                                        <li>
                                            Overview of cybersecurity, its importance, and the evolving cyber threat landscape.
                                        </li>
                                        <li>
                                            Understanding the principles of confidentiality, integrity, and availability (CIA triad).
                                        </li>
                                    </ol>
                                    </div>
                            
                                    <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(1)}
            >Information Security Fundamentals</button>
                                <div className="panel" style={{ display: openIndex === 1 ? 'block' : 'none' }}>
                                    <ol>
                                        <li>Understanding information security concepts and terminology.</li>
                                        <li>Identifying common security vulnerabilities and threats.</li>
                                    </ol>
                              </div>
                              <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(2)}
            >Network Security</button>
                                <div className="panel" style={{ display: openIndex === 2 ? 'block' : 'none' }}>
                                    <ol>
                                        <li>Securing networks and network devices from unauthorized access and attacks.</li>
                                        <li>Configuring firewalls, routers, and switches for enhanced security.</li>
                                    </ol>
                                    </div>
                                    <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(3)}
            >Cryptography and Encryption</button>
                                <div className="panel" style={{ display: openIndex === 3 ? 'block' : 'none' }}>
                                    <ol>
                                        <li>Understanding encryption algorithms, cryptographic protocols, and their applications.</li>
                                        <li>Using encryption to protect data at rest and in transit.</li>
                                    </ol>
                                </div>
                                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(4)}
            >Web Application Security</button>
                              <div className="panel" style={{ display: openIndex === 4 ? 'block' : 'none' }}>
                                    <ol>
                                        <li>Identifying and mitigating common web application vulnerabilities (e.g., SQL injection, XSS, CSRF).</li>
                                        <li>Securing web servers and web applications.</li>
                                    </ol>
                               </div>
                               <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(5)}
            >Operating System Security</button>
                               <div className="panel" style={{ display: openIndex === 5 ? 'block' : 'none' }}>
                                    <ol>
                                        <li>Hardening operating systems to prevent unauthorized access and malware infections.</li>
                                        <li>Applying security patches and updates.</li>
                                    </ol>
                                </div>
                                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(6)}
            >Malware and Threat Analysis</button>
                               <div className="panel" style={{ display: openIndex === 6 ? 'block' : 'none' }}>
                                    <ol>
                                        <li>Identifying and analyzing different types of malware (viruses, worms, Trojans, etc.).</li>
                                        <li>Understanding malware behavior and propagation techniques.</li>
                                    </ol>
                               </div>
                               <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(7)}
            >Incident Response and Handling</button>
                                <div className="panel" style={{ display: openIndex === 7 ? 'block' : 'none' }}>
                                    <ol>
                                        <li>Developing incident response plans and procedures.</li>
                                        <li>Investigating and mitigating security incidents and breaches.</li>
                                    </ol>
                               </div>
                               <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(8)}
            >Ethical Hacking and Penetration Testing</button>
                                <div className="panel" style={{ display: openIndex === 8 ? 'block' : 'none' }}>
                                    <ol>
                                        <li>Understanding ethical hacking principles and methodologies.</li>
                                        <li>Conducting penetration tests to identify and remediate vulnerabilities.</li>
                                    </ol>
                                </div>
                                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(9)}
            >Network Monitoring and Intrusion Detection </button>
                               <div className="panel" style={{ display: openIndex === 9 ? 'block' : 'none' }}>
                                    <ol>
                                        <li>Implementing network monitoring tools and intrusion detection systems (IDS/IPS).</li>
                                        <li>Analyzing network traffic for suspicious activities and potential intrusions.</li>
                                    </ol>
                                </div>
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
              #131A, 1st floor, 80 Feet Rd, RMV 2nd stage
              <br /> MET Layout, Ashwath Nagar, <br />
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
  {/* search section javascript */}
</>
 )
}
export default Cybersecurityjs;