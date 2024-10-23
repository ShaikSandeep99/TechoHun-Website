import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
function Testing() {
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
    return(
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
  {/* Google fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Josefin+Sans:wght@500&family=Roboto&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="/css-folder/courses.css" />
  <section>
    <div className="d-flex justify-content-around" id="enquery-sec">
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
        src="/img/automation.jpg"
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
      <div className="row">
        <div className="col-lg-1" />
        <div className="col-lg-7">
          <h2 className=" mb-3 text-primary" style={{ fontWeight: "bold" }}>
            Why Learn Software Testing
          </h2>
          <p className="mb-3">
            learning software testing offers a rewarding career path,
            contributes to the overall success of software projects, and
            provides individuals with valuable skills that are in demand across
            various industries. Whether you want to specialize in testing or add
            testing skills to your software development toolkit, understanding
            software testing is an asset for any aspiring IT professional.
          </p>
          <h5 className="mb-3" style={{ fontWeight: "bold" }}>
            Benefits
          </h5>
          <p className="mb-5">
            software testing is a crucial aspect of software development that
            ensures high-quality, reliable, and secure products. Its benefits
            extend beyond just finding and fixing bugs, positively impacting
            customer satisfaction, business reputation, and long-term success.
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
          {/* <h3 class="text-container">Python</h3> */}
          <h3 className="mt-2 text-primary">
            <b>Software Testing Course</b>
          </h3>{" "}
          <br />
          <p>
            {" "}
            <b>1.Bug Detection and Prevention:</b> Software testing helps
            identify and eliminate defects and bugs during the development
            process, preventing them from reaching the end-users. Early bug
            detection reduces the cost and effort required to fix issues later
            in the software development life cycle..
          </p>
          <p>
            {" "}
            <b>2.Enhanced Software Quality:</b> Testing ensures that the
            software meets specified requirements and adheres to quality
            standards. It improves the overall quality and reliability of the
            software, leading to a positive user experience.
          </p>
          <p>
            {" "}
            <b>3.Increased Customer Satisfaction:</b> High-quality software with
            fewer bugs leads to improved user satisfaction. Satisfied users are
            more likely to recommend the software to others and remain loyal to
            the product or service.
          </p>
          <p>
            {" "}
            <b>4.Risk Mitigation:</b> Testing helps identify potential risks
            associated with the software's functionality, security, performance,
            or usability. Addressing these risks proactively reduces the
            likelihood of failures and system crashes in production.
          </p>
          <p>
            {" "}
            <b>5.Optimized Performance:</b> Performance testing evaluates the
            software's response time, scalability, and stability under varying
            workloads. By identifying performance bottlenecks, testing allows
            developers to optimize the software for better efficiency.
          </p>
          <p>
            {" "}
            <b>6.Security Validation:</b> Security testing identifies
            vulnerabilities and weaknesses in the software that could be
            exploited by malicious users. This helps in securing sensitive data
            and protecting the software from cyber threats.
          </p>
          <p>
            {" "}
            <b>7.Compliance and Regulation:</b> Testing ensures that the
            software adheres to industry standards, legal regulations, and
            compliance requirements, which is crucial, especially in sectors
            like finance, healthcare, and government.
          </p>
          <p>
            {" "}
            <b>8.Cost-Effectiveness:</b> Detecting and fixing defects early in
            the development process is more cost-effective than addressing them
            in production or during post-release maintenance.
          </p>
          <p>
            {" "}
            <b>9.Faster Time to Market:</b> Though testing adds an extra step in
            the development process, it ultimately speeds up the software's time
            to market by reducing the chances of delays due to critical issues.
          </p>
          <p>
            {" "}
            <b>10.Continuous Improvement:</b> Feedback obtained from testing
            allows developers to continuously improve the software, releasing
            updates and new features that address user needs and preferences.
          </p>
          <p>
            {" "}
            <b>11.Confidence in Software:</b> Rigorous testing instills
            confidence in the software's stability and performance, giving
            stakeholders, including developers, testers, and users, peace of
            mind.
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
            Why enroll for Testing Certification Course?
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
                According to Research and Markets, software testing services
                will grow to $55.76 B by 2026 at a CAGR of 15.07%
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
                Testing is a vital process without which no software release can
                occur, it makes the software usable
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
                According to Indeed.com, the average annual salary of software
                test engineer in the United States is $92,908
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
          Manual Testing Course Syllabus
        </h3>
        <div className="col-lg-2" />
        <div className="col-lg-8 mb-5">
        <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(0)}
            >
            Introduction to Software Testing
          </button>
          <div className="panel" style={{ display: openIndex === 0 ? 'block' : 'none' }}>
            <ol>
              <li>
                Overview of software testing and its importance in the software
                development lifecycle.
              </li>
              <li>Differentiating between verification and validation.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(1)}
            >Software Testing Fundamentals</button>
          <div className="panel" style={{ display: openIndex === 1 ? 'block' : 'none' }}>
            <ol>
              <li>
                Learning the basic concepts, terminologies, and objectives of
                manual testing.
              </li>
              <li>
                Understanding the roles and responsibilities of a manual tester.{" "}
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(2)}
            >
            Software Development Life Cycle (SDLC) and Testing Life Cycle
          </button>
          <div className="panel" style={{ display: openIndex === 2 ? 'block' : 'none' }}>
            <ol>
              <li>
                Overiew of various SDLC models and their impact on testing.{" "}
              </li>
              <li>
                Understanding the phases of the testing life cycle, including
                test planning, test design, test execution, and test closure.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(3)}
            >Types of Manual Testing</button>
           <div className="panel" style={{ display: openIndex === 3 ? 'block' : 'none' }}>
            <ol>
              <li>
                Exploring different types of manual testing, such as functional,
                non-functional, regression, integration, and system testing.
              </li>
              <li>
                Understanding the purpose and scope of each type of testing.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(4)}
            >Test Case Design Techniques</button>
          <div className="panel" style={{ display: openIndex === 4 ? 'block' : 'none' }}>
            <ol>
              <li>
                Learning various test case design techniques, including boundary
                value analysis, equivalence partitioning, decision table
                testing, and more.
              </li>
              <li>
                Writing effective test cases with clear test steps and expected
                outcomes.{" "}
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(5)}
            >Defect Reporting and Tracking</button>
                  <div className="panel" style={{ display: openIndex === 5 ? 'block' : 'none' }}>
            <ol>
              <li>Understanding the defect life cycle.</li>
              <li>
                Learning how to log, track, and manage defects using bug
                tracking tools.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(6)}
            >
            Test Execution and Test Reporting
          </button>
          <div className="panel" style={{ display: openIndex === 6 ? 'block' : 'none' }}>
            <ol>
              <li>Executing test cases and recording test results.</li>
              <li>Creating test summary reports and test metrics.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(7)}
            >Exploratory Testing</button>
          <div className="panel" style={{ display: openIndex === 7 ? 'block' : 'none' }}>
            <ol>
              <li>
                Understanding the concept of exploratory testing and when to
                apply it.
              </li>
              <li>
                Conducting exploratory testing sessions to uncover defects.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(8)}
            >
            User Interface (UI) Testing and Usability Testing
          </button>
          <div className="panel" style={{ display: openIndex === 8 ? 'block' : 'none' }}>
            <ol>
              <li>
                Verifying the application's visual appearance and user
                experience.
              </li>
              <li>
                Evaluating the software's user-friendliness and ease of use.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(9)}
            >
            Integration Testing and System Testing
          </button>
          <div className="panel" style={{ display: openIndex === 9 ? 'block' : 'none' }}>
            <ol>
              <li>
                Verifying the interaction between different components/modules.
              </li>
              <li>
                Testing the complete integrated system to assess its compliance
                with requirements.
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
              #131A, 1st floor, 80 Feet Rd, RMV 2nd stage,
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
export default Testing;