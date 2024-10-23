import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
function Soft () {
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
              src="/img/Microsoft-Power-Platform.png"
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
                  Why Learn Microsoft Power Platform Developer Course
                </h3>
                <p className="mb-3">
                  learning Microsoft Power Platform Developer offers a range of
                  advantages, including rapid app development, low-code capabilities,
                  seamless integration, and data visualization. As a Power Platform
                  Developer, you can contribute to digital transformation efforts,
                  optimize business processes, and create innovative solutions within
                  the Microsoft ecosystem. With the growing popularity and demand for
                  low-code development, being skilled in Power Platform can
                  significantly enhance your career prospects in the technology
                  industry.
                </p>
                <h5 className="mb-3" style={{ fontWeight: "bold" }}>
                  Benefits
                </h5>
                <p className="mb-5">
                  becoming a Microsoft Power Platform Developer offers the advantages
                  of rapid app development, seamless integration, automation, and
                  empowering business users. The skillset is in demand, and the
                  platform's flexibility and wide range of applications make it a
                  valuable asset for professionals looking to excel in the field of
                  low-code development and automation.
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
                  <b> Microsoft Power Platform Developer Course</b>
                </h3>{" "}
                <br />
                <p>
                  {" "}
                  <b>1.Rapid App Development:</b> Microsoft Power Platform allows
                  developers to build apps quickly and efficiently, reducing
                  development time and effort. Power Apps enables the creation of
                  custom apps without extensive coding, making it accessible to a
                  broader range of developers.
                </p>
                <p>
                  {" "}
                  <b>2.Low-Code Development:</b> Power Platform's low-code approach
                  empowers developers and business users to collaborate and create
                  applications with minimal hand-coding. This accelerates app
                  development and allows non-developers to contribute to the
                  development process.
                </p>
                <p>
                  {" "}
                  <b>3.Integration Capabilities:</b> Power Platform seamlessly
                  integrates with various Microsoft and third-party applications,
                  services, and data sources. As a Power Platform Developer, you can
                  build solutions that integrate with Microsoft 365, Dynamics 365,
                  Azure services, and more.
                </p>
                <p>
                  {" "}
                  <b>4.Automated Workflows and Business Processes:</b> Power Automate
                  (formerly Microsoft Flow) allows developers to create automated
                  workflows and streamline business processes. By learning Power
                  Platform, developers can optimize business operations and improve
                  productivity.
                </p>
                <p>
                  {" "}
                  <b>5.Data Visualization and Analytics:</b> Power BI is a powerful
                  data visualization and business intelligence tool in the Power
                  Platform. As a Power Platform Developer, you can create visually
                  appealing and interactive reports and dashboards for data analysis
                  and decision-making.
                </p>
                <p>
                  {" "}
                  <b>6.No Infrastructure Management:</b> Power Platform is a
                  cloud-based service provided by Microsoft, which means developers
                  don't need to worry about infrastructure management. This allows
                  them to focus on building solutions and applications.
                </p>
                <p>
                  {" "}
                  <b>7.Extensibility and Customization:</b> Power Platform offers
                  extensibility options to build custom connectors, plug-ins, and
                  components. This enables developers to tailor the platform to
                  specific business needs and requirements.
                </p>
                <p>
                  {" "}
                  <b>8.Microsoft Ecosystem Integration:</b> Learning Power Platform
                  can enhance your skills within the Microsoft ecosystem, making you a
                  valuable asset for organizations that heavily rely on Microsoft
                  technologies.
                </p>
                <p>
                  {" "}
                  <b>9.App Innovation for Enterprises:</b> Power Platform facilitates
                  innovation within organizations by enabling departments and teams to
                  develop their apps and automate processes without a heavy reliance
                  on IT departments.
                </p>
                <p>
                  {" "}
                  <b>10.Growing Demand for Power Platform Developers:</b> The demand
                  for Power Platform Developers is on the rise as organizations
                  recognize the value of low-code solutions for their digital
                  transformation initiatives.
                </p>
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
              <h2
                className="text-primary text-center mb-4 mt-4"
                style={{ fontWeight: "bold" }}
              >
                {" "}
                Microsoft Power Platform Developer Syllabus
              </h2>
              <div className="col-lg-2" />
              <div className="col-lg-8 mb-5">
              <button
              className="accordion btn btn-light btn-block"
              onClick={() => toggleAccordion(0)}
            >
                  Introduction to Microsoft Power Platform
                </button>
                <div className="panel" style={{ display: openIndex === 0 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Overview of Power Platform components (Power Apps, Power
                      Automate, Power BI, and Power Virtual Agents).
                    </li>
                    <li>
                      Understanding the benefits of low-code development and
                      automation.
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(1)}
            >
                  Building Canvas Apps with Power Apps
                </button>
                <div className="panel" style={{ display: openIndex === 1 ? 'block' : 'none' }}>
                  <ol>
                    <li>Creating canvas apps using the Power Apps designer.</li>
                    <li>Identifying common security vulnerabilities and threats.</li>
                    <li>Implementing logic using formulas and expressions.</li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(2)}
            >
                  Model-Driven Apps with Power Apps
                </button>
                <div className="panel" style={{ display: openIndex === 2 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Securing networks and network devices from unauthorized access
                      and attacks.
                    </li>
                    <li>Designing and customizing forms, views, and dashboards.</li>
                    <li>Configuring business rules and process flows.</li>
                  </ol>
                </div>
                < button className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(3)}
            >
                  Automating Workflows with Power Automate
                </button>
                <div className="panel" style={{ display: openIndex === 3 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Creating automated workflows and business processes using Power
                      Automate.
                    </li>
                    <li>Using encryption to protect data at rest and in transit.</li>
                    <li>Integrating with Microsoft and third-party services.</li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(4)}
            >
                  Data Integration and Custom Connectors
                </button>
                <div className="panel" style={{ display: openIndex === 4 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Connecting to various data sources, including SharePoint, Excel,
                      SQL Server, and others.
                    </li>
                    <li>
                      Creating custom connectors to integrate with external services.
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(5)}
            >Introduction to Power BI</button>
             <div className="panel" style={{ display: openIndex === 5 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Understanding Power BI and its capabilities for data
                      visualization and analytics.
                    </li>
                    <li>Applying security patches and updates.</li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(6)}
            >Advanced Power BI Features</button>
                <div className="panel" style={{ display: openIndex === 6 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Implementing complex data transformations and data modeling.
                    </li>
                    <li>Creating calculated columns, measures, and KPIs.</li>
                    <li>
                      Enhancing visualizations and implementing drill-down and
                      drill-through actions.
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(7)}
            >Power Virtual Agents</button>
               <div className="panel" style={{ display: openIndex === 7 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Building chatbots and virtual agents using Power Virtual Agents.
                    </li>
                    <li>
                      Integrating chatbots with other Power Platform components.
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(8)}
            >
                  Extending Power Platform Solutions
                </button>
                <div className="panel" style={{ display: openIndex === 8 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Leveraging custom connectors, plugins, and components to extend
                      the functionality of Power Platform solutions.
                    </li>
                    <li>Using Azure services to extend capabilities.</li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(9)}
            >
                  Power Platform Security and Governance
                </button>
                <div className="panel" style={{ display: openIndex === 9 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Implementing security measures to control access to apps and
                      data.
                    </li>
                    <li>
                      Applying governance policies and best practices for managing
                      Power Platform environments.
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
        {/* search section javascript */}
      </>
       
    )
}
export default Soft;