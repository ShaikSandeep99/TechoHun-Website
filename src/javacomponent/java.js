import React, { useState } from 'react';
// import './style.css';
import { Link } from 'react-router-dom';
function Java () {
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
  {/* Add Bootstrap CSS link */}
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="/css-folder/home.css" />{" "}
  {/* Custom CSS for centering the navigation bar */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  />
  <link rel="stylesheet" href="/css-folder/courses.css" />
  <section>
    <div className="" id="enquery-sec">
      <div>
        <label htmlFor=""> New Course Enquery : +916363086929</label>
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
      <img src="/img/java.jpg" alt="" className="img-fluid" width="100%" />
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
  <section>
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-lg-1" />
        <div className="col-lg-7 mt-3">
          <h2 className="mb-3 text-primary" style={{ fontWeight: "bold" }}>
            Why Learn Java
          </h2>
          <p className="mb-3">
            learning Java is a valuable investment in your career as a software
            developer. Its widespread use, versatility, cross-platform
            compatibility, and strong community support make it an essential
            language for those entering the programming world or looking to
            advance their careers in the tech industry.
          </p>
          <h5 className="mb-3" style={{ fontWeight: "bold" }}>
            Benefits
          </h5>
          <p className="mb-3">
            Most Java courses include hands-on coding exercises, quizzes, and
            projects to reinforce learning and provide practical experience.
            Additionally, some courses might cover advanced topics, such as Java
            Enterprise Edition (Java EE) for building web applications or other
            specialized Java libraries and frameworks based on the course's
            objectives.
          </p>
        </div>
        <div className="col-lg-3 mt-3 mb-3 text-center">
          <div className="demo-class">
            <h5 className="mb-4" style={{ fontWeight: "bold" }}>
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
  <section>
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-lg-1" />
        <div className="col-lg-11 mt-4">
          <h4>
            <b>Java Course</b>
          </h4>
          <p>
            {" "}
            <b>1.Introduction to Java:</b> An overview of Java, its history,
            features, and advantages over other programming languages.
          </p>
          <p>
            {" "}
            <b>2.Variables and Data Types:</b> Understanding how to define and
            manipulate variables, and the different data types available inJava.
          </p>
          <p>
            {" "}
            <b>3.Control Flow Statements:</b> Learning how to use if-else,
            loops, and other control flow statements to control the flow of
            aprogram.
          </p>
          <p>
            {" "}
            <b>4.Object-Oriented Programming:</b> Understanding the fundamentals
            of object-oriented programming in Java, including classes, objects,
            and inheritance.
          </p>
          <p>
            {" "}
            <b>5.Methods:</b> Learning how to define and call methods in Java,
            as well as the concept of method parameters and return values.
          </p>
          <p>
            {" "}
            <b>6.Arrays and Collections:</b> Understanding how to use arrays and
            collections to store and manipulate collections of data.
          </p>
          <p>
            {" "}
            <b>7.File Handling:</b> Learning how to read from and write to files
            using Java.
          </p>
          <p>
            {" "}
            <b>8.Exception Handling:</b> Understanding how to handle errors and
            exceptions in Java programs.
          </p>
          <p>
            {" "}
            <b>9.Multithreading:</b> Learning how to implement multithreading in
            Java to handle time-consuming tasks and improve performance.
          </p>
          <p>
            {" "}
            <b>10.Networking and I/O:</b> Understanding how to use Java's
            networking and I/O classes to communicate with other computers and
            devices over the network.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-light">
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="col-lg-12 text-center">
          <h2 className="text-primary mt-4">
            Why enroll for Java Certification Course?
          </h2>
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
                Rated #1 in TIOBE Popular programming languages index (15th
                Consecutive Year)
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
                AUsed by 10 Million developers worldwide to develop applications
                for 15 Billion devices supporting Java
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
                Average Salary of professionals with Java skills is $110k
                (Indeed salary data)
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
              className="fa fa-book-open-reader"
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
          Java Course Syllabus
        </h3>
        <div className="col-lg-2" />
        <div className="col-lg-8 mb-5">
        <button
              className="accordion btn btn-light btn-block"
              onClick={() => toggleAccordion(0)}
            > Introduction to Java</button>
         <div className="panel" style={{ display: openIndex === 0 ? 'block' : 'none' }}>
          <ol>
              <li> Overview of Java and its features</li>
              <li>
                {" "}
                Installing Java Development Kit (JDK) and setting up the
                development environment{" "}
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(1)}
            >Basic Syntax and Data Types</button>
          <div className="panel" style={{ display: openIndex === 1 ? 'block' : 'none' }}>
            <ol>
              <li>
                {" "}
                Variables and data types (integers, floating-point numbers,
                strings, etc.){" "}
              </li>
              <li> Operators (arithmetic, relational, logical) </li>
              <li>Input and output (using Scanner and System.out)</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(2)}
            >Control Flow and Loops</button>
          <div className="panel" style={{ display: openIndex === 2 ? 'block' : 'none' }}>
            <ol>
              <li>Conditional statements (if, else, switch) </li>
              <li> Looping structures (for, while, do-while)</li>
              <li> Break and continue statements</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(3)}
            >
            Object-Oriented Programming (OOP)
          </button>
          <div className="panel" style={{ display: openIndex === 3 ? 'block' : 'none' }}>
            <ol>
              <li> Classes and objects</li>
              <li> Constructors and methods</li>
              <li>Inheritance, polymorphism, and encapsulation</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(4)}
            >Arrays and Collections</button>
         <div className="panel" style={{ display: openIndex === 4 ? 'block' : 'none' }}>
            <ol>
              <li>
                {" "}
                Working with arrays (single-dimensional and multi-dimensional)
              </li>
              <li>
                Introduction to Java Collections Framework (List, Set, Map){" "}
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(5)}
            >Exception Handling</button>
           <div className="panel" style={{ display: openIndex === 5 ? 'block' : 'none' }}>
            <ol>
              <li>Handling runtime exceptions using try-catch blocks</li>
              <li>Throwing and creating custom exceptions</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(6)}
            >File I/O</button>
         <div className="panel" style={{ display: openIndex === 6 ? 'block' : 'none' }}>
            <ol>
              <li>
                {" "}
                Reading from and writing to files using FileReader, FileWriter,
                etc.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(7)}
            >Interfaces and Abstract Classes</button>
          <div className="panel" style={{ display: openIndex === 7 ? 'block' : 'none' }}>
            <ol>
              <li>Understanding interfaces and abstract classes</li>
              <li>Implementing interfaces and extending abstract classes</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(8)}
            >Multithreading and Concurrency</button>
          <div className="panel" style={{ display: openIndex === 8 ? 'block' : 'none' }}>
            <ol>
              <li>Basics of multithreading in Java</li>
              <li>Synchronization and thread safety</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(9)}
            >
            Java Standard Library (Java API)
          </button>
          <div className="panel" style={{ display: openIndex === 9 ? 'block' : 'none' }}>
            <ol>
              <li>
                Overview of commonly used classes and methods in the Java API
              </li>
              <li>
                Exploring utility classes in packages like java.lang, java.util,
                etc.{" "}
              </li>
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
  {/* course search option javascript */}
</>

    )
}
export default Java;