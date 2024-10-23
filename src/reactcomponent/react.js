import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
function Reactcom () {
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
      <img src="/img/reactjs.jpg" alt="" className="img-fluid" width="100%" />
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
        <div className="col-lg-7 mt-3">
          <h2 className="mb-3 text-primary" style={{ fontWeight: "bold" }}>
            Why Learn React.JS
          </h2>
          <p className="mb-3">
            Among the most popular JavaScript libraries, ReactJS brings with it
            rich features that make it an easy to use and popular tool among
            developers. React libraries are growing at an enormous rate, helping
            developers in building rich efficient front-end abstractions by
            writing less code and in lesser time as well!
          </p>
          <h5 className="mb-3" style={{ fontWeight: "bold" }}>
            Benefits
          </h5>
          <p className="mb-3">
            React.js is a versatile JavaScript library for building interactive
            user interfaces easily. It is used by companies such as Facebook and
            Instagram. If you are planning to create UI/UX solutions for mobile
            or web, this course is extremely beneficial to improve your working
            skills.
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-1" />
        <div className="col-lg-10">
          <h4>
            <b>ReactJS Course</b>
          </h4>
          <p>
            {" "}
            <b>1.Introduction to ReactJS:</b> An overview of ReactJS, its
            history, features, and advantages over other front-end frameworks.
          </p>
          <p>
            {" "}
            <b>2.JSX:</b> Understanding how to use JSX, a syntax extension for
            JavaScript that allows for easy creation of React components.
          </p>
          <p>
            {" "}
            <b>3.Components:</b> Learning how to create and use components in
            ReactJS, including stateful and stateless components.
          </p>
          <p>
            {" "}
            <b>4.Props:</b> Understanding how to pass data between components
            using props.
          </p>
          <p>
            {" "}
            <b>5.State:</b> Learning how to manage component state in ReactJS,
            including updating and accessing state values.
          </p>
          <p>
            {" "}
            <b>6.Events:</b> Understanding how to handle events in ReactJS,
            including mouse events, keyboard events, and touch events.
          </p>
          <p>
            {" "}
            <b>7.Forms:</b> Learning how to create and handle forms in ReactJS,
            including form validation and submission.
          </p>
          <p>
            {" "}
            <b>8.Routing:</b> Understanding how to implement client-side routing
            in ReactJS, using tools like React Router.
          </p>
          <p>
            {" "}
            <b>9.Redux:</b> Learning how to use Redux, a popular state
            management library, to manage complex application state in ReactJS.
          </p>
          <p>
            {" "}
            <b>10.Hooks:</b> Understanding how to use hooks, a new feature in
            ReactJS that allows for functional components to have state and
            lifecycle methods.
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
            Why enroll for Java Certification Course?
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
                Major apps like Facebook, Instagram, Netflix, WhatsApp, Airbnb,
                Yahoo! Mail and many more use React to build their User
                Interface to improve user experience
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
                React Native supports cross-platform development (iOS and
                Android), and it can reduce the development effort by 50%
                without compromising quality or productivity
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
                The average salary for "React Developer" ranges from $100,816
                per year to $110,711 per year, based on the role (Front End
                Developer/Full Stack Developer) - Indeed.com
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
          React.JS Course Syllabus
        </h3>
        <div className="col-lg-2" />
        <div className="col-lg-8 mb-5">
        <button
              className="accordion btn btn-light btn-block"
              onClick={() => toggleAccordion(0)}
            > React Introduction</button>
         <div className="panel" style={{ display: openIndex === 0 ? 'block' : 'none' }}>
            <ol>
              <li>
                {" "}
                Overview of frameworks, libraries for client side Web
                applications
              </li>
              <li> React introduction </li>
              <li> Environment Setup for React Application </li>
              <li> Understanding NPM commands </li>
              <li> VS Code extensions for ES6, React </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(1)}
            >
            React Essential Features and Syntax
          </button>
          <div className="panel" style={{ display: openIndex === 1 ? 'block' : 'none' }}>
            <ol>
              <li> React App Project Directory Structure </li>
              <li> Overview of Webpack, Babel </li>
              <li> React Component Basic </li>
              <li> Create React Component </li>
              <li> Understanding JSX </li>
              <li> Limitations of JSX </li>
              <li> Working with Components and Reusing Components </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(2)}
            >
            React Components, Props and State
          </button>
          <div className="panel" style={{ display: openIndex === 2 ? 'block' : 'none' }}>
            <ol>
              <li> Understanding and using Props and State </li>
              <li> Handling Events with methods </li>
              <li> Manipulating the State </li>
              <li> Two way data-binding </li>
              <li> Functional (Stateless) VS Class (Stateful) Components </li>
              <li> Parent – Child Communication </li>
              <li> Dynamically rendering contents </li>
              <li> Showing Lists, List and keys </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(3)}
            >Styling Components</button>
         <div className="panel" style={{ display: openIndex === 3 ? 'block' : 'none' }}>
            <ol>
              <li> CSS Styling </li>
              <li> Scoping Styles using Inline Styles </li>
              <li> Limitations of inline styles </li>
              <li> Inline Styles with Radium </li>
              <li> Using Pseudo classes/media queries with inline styles </li>
              <li> CSS Modules, importing css classes </li>
              <li> Adding Bootstrap, Semantic UI to React apps </li>
              <li> Using react-bootstrap, reactstrap packages</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(4)}
            > Debugging React Apps</button>
          <div className="panel" style={{ display: openIndex === 4 ? 'block' : 'none' }}>
            <ol>
              <li> Understanding React Error Messages </li>
              <li> Handling Logical Errors, </li>
              <li>
                {" "}
                Debugging React apps using google developer tools and React
                DevTool{" "}
              </li>
              <li> Understanding Error Boundaries </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(5)}
            > React Component lifecycle</button>
          <div className="panel" style={{ display: openIndex === 5 ? 'block' : 'none' }}>
            <ol>
              <li> Updating lifecycle hooks </li>
              <li> PureComponents </li>
              <li> React’s DOM Updating Strategy </li>
              <li> Returning adjacent elements </li>
              <li> Fragments </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(6)}
            >React Component in Details</button>
         <div className="panel" style={{ display: openIndex === 6 ? 'block' : 'none' }}>
            <ol>
              <li> Higher Order Components </li>
              <li> Passing unknown Props </li>
              <li> Validating Props </li>
              <li> Using References </li>
              <li> React Context API </li>
              <li> Updated LifeCycle hooks (16.3) </li>
              <li> Best practices for React Projects </li>
              <li> Demo apps </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(7)}
            >HTTP Requests/Ajax Calls</button>
          <div className="panel" style={{ display: openIndex === 7 ? 'block' : 'none' }}>
            <ol>
              <li> HTTP Requests in React</li>
              <li> Introduction of Axios package </li>
              <li> HTTP GET Request, fetching &amp; transforming data </li>
              <li> HTTP POST, DELETE, UPDATE </li>
              <li> Handling Errors </li>
              <li> Adding/Removing Interceptors </li>
              <li> Creating/Using Axios instance </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(8)}
            >React Routing</button>
          <div className="panel" style={{ display: openIndex === 8 ? 'block' : 'none' }}>
            <ol>
              <li> Routing and SPAs </li>
              <li> Setting Up the Router Package </li>
              <li> react-router vs react-router-dom </li>
              <li> Preparing the Project For Routing </li>
              <li> Switching Between Pages, Routing-Related Props </li>
              <li> The "withRouter" HOC &amp; Route Props </li>
              <li> Passing &amp; extracting route/query parameters </li>
              <li> Using Switch to Load a Single Route </li>
              <li> Navigating Programmatically </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(9)}
            >
            {" "}
            React Forms and Form Validation
          </button>
          <div className="panel" style={{ display: openIndex === 9 ? 'block' : 'none' }}>
            <ol>
              <li> Creating a Custom Dynamic Input Component </li>
              <li> Setting Up a JS Config for the Form </li>
              <li> Dynamically Create Inputs based on JS Config </li>
              <li> Adding a Dropdown Component </li>
              <li> Handling User Input </li>
              <li> Handling Form Submission </li>
              <li> Adding Custom Form Validation </li>
              <li> Fixing a Common Validation </li>
              <li> Adding Validation Feedback </li>
              <li> Showing Error Messages </li>
              <li> Handling Overall Form Validity </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(10)}
            > Deploying React App to the Web</button>
           <div className="panel" style={{ display: openIndex === 9 ? 'block' : 'none' }}></div>
           <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(11)}
            > Testing React apps with JEST</button>
          <div className="panel" style={{ display: openIndex === 11 ? 'block' : 'none' }}></div>
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

export default Reactcom;