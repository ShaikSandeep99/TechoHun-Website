import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
function Data () {
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
        src="/img/Microsoft Azure Data Fundamentals.png"
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
            Why Learn Microsoft Azure Data Fundamentals Course
          </h3>
          <p className="mb-3">
            learning Microsoft Azure Data Fundamentals offers foundational
            knowledge in data concepts, cloud-based data solutions, and Azure
            data services. Whether you are starting a career in data or looking
            to enhance your existing data skills, understanding Azure Data
            Fundamentals is a valuable investment in your professional growth.
            With the increasing adoption of cloud-based data solutions, this
            knowledge is highly relevant and in-demand in the modern data-driven
            world.
          </p>
          <h5 className="mb-3" style={{ fontWeight: "bold" }}>
            Benefits
          </h5>
          <p className="mb-5">
            learning Microsoft Azure Data Fundamentals offers foundational
            knowledge in data concepts, cloud-based data solutions, and Azure
            data services. It provides a pathway to various data-related
            careers, enhances your skills in working with cloud data solutions,
            and prepares you to contribute to data-driven decision-making and
            digital transformation efforts within organizations. Whether you are
            starting your data journey or seeking to expand your existing data
            expertise, Azure Data Fundamentals offers valuable insights and
            opportunities for growth in the data domain.
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
      {/* <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-lg-7 mb-3">
              <h5 class="mb-3" style="font-weight: bold;">Benefits</h5>
              <P class="mb-5">
                  Python course can equip you with valuable skills that are highly relevant in today's
                  technology-driven world. Whether you are a complete beginner or an experienced programmer,
                  learning Python can benefit you in numerous ways and give you a competitive edge in your career.
              </P>
          </div>
      </div> */}
    </div>
  </section>
  <section className="bg-light">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-1" />
        <div className="col-lg-10 mt-4">
          {/* <h3 class="text-container">Python</h3> */}
          <h3 className="mt-2 text-primary">
            <b> Microsoft Azure Data Fundamentals Course</b>
          </h3>{" "}
          <br />
          <p>
            {" "}
            <b>1.Foundational Data Knowledge:</b> Azure Data Fundamentals
            provides a solid foundation in data concepts, including data types,
            data sources, data processing, and data storage. This knowledge is
            essential for various data-related roles.
          </p>
          <p>
            {" "}
            <b>2.Introduction to Azure Data Services:</b> The course introduces
            you to various Azure data services, such as Azure Cosmos DB, Azure
            SQL Database, Azure Data Lake Storage, and Azure Blob Storage.
            Understanding these services is crucial for working with data in the
            cloud.
          </p>
          <p>
            {" "}
            <b>3.Cloud Data Solutions:</b> Learning Azure Data Fundamentals
            helps you understand how data is managed, stored, and processed in
            the cloud. Cloud-based data solutions are becoming increasingly
            popular, and this knowledge is highly relevant in the modern data
            landscape.
          </p>
          <p>
            {" "}
            <b>4.Data Security and Compliance:</b> The course covers data
            security and compliance considerations in Azure. Understanding how
            to secure data in the cloud and comply with regulatory requirements
            is vital for data professionals.
          </p>
          <p>
            {" "}
            <b>5.Data Ingestion and Integration:</b> Azure Data Fundamentals
            introduces data ingestion and integration concepts, including data
            pipelines and data integration strategies. This knowledge is
            valuable for data engineers and data integration specialists.
          </p>
          <p>
            {" "}
            <b>6.Data Analytics and Insights:</b> The course explores data
            analytics and reporting using Azure services like Azure Synapse
            Analytics and Azure Power BI. Learning these concepts allows you to
            gain valuable insights from data.
          </p>
          <p>
            {" "}
            <b>7.Scalability and Performance:</b> Azure Data Fundamentals
            teaches you how to design data solutions for scalability and optimal
            performance. This skill is crucial for handling large volumes of
            data and ensuring efficient data processing.
          </p>
          <p>
            {" "}
            <b>8.Azure Data Explorer:</b> The course introduces Azure Data
            Explorer, a service used for real-time data analysis and
            exploration. Learning this service is beneficial for data analysts
            and data scientists.
          </p>
          <p>
            {" "}
            <b>9.Data Governance and Cataloging:</b> Understanding data
            governance and cataloging concepts helps you manage data
            effectively, ensuring data quality and easy accessibility for
            stakeholders.
          </p>
          <p>
            {" "}
            <b>10.Preparation for Advanced Azure Data Certifications:</b> Azure
            Data Fundamentals serves as a stepping stone for more advanced Azure
            data certifications, such as the Microsoft Certified: Azure Data
            Engineer Associate and Microsoft Certified: Azure AI Engineer
            Associate.
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
            {/* <i class="fa fa-building" aria-hidden="true" style='font-size:60px;color:rgb(0, 162, 255)'></i> */}
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
            {/* <i class="fa fa-building" aria-hidden="true" style='font-size:60px;color:rgb(0, 162, 255)'></i> */}
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
          Microsoft Azure Data Fundamentals Syllabus
        </h3>
        <div className="col-lg-2" />
        <div className="col-lg-8 mb-5">
        <button
              className="accordion btn btn-light btn-block"
              onClick={() => toggleAccordion(0)}
            > Introduction to Data Concepts</button>
           <div className="panel" style={{ display: openIndex === 0 ? 'block' : 'none' }}>
            <ol>
              <li>
                Understanding data types, structured and unstructured data.
              </li>
              <li>Basics of relational and non-relational databases.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(1)}
            >
            Introduction to Azure Data Services
          </button>
          <div className="panel" style={{ display: openIndex === 1 ? 'block' : 'none' }}>
            <ol>
              <li>
                Overview of Azure data services and their role in cloud
                computing.
              </li>
              <li>
                Introduction to Azure Cosmos DB, Azure SQL Database, Azure Data
                Lake Storage, and Azure Blob Storage.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(2)}
            >Data Storage in Azure</button>
          <div className="panel" style={{ display: openIndex === 2 ? 'block' : 'none' }}>
            <ol>
              <li>Understanding different data storage options in Azure.</li>
              <li>Working with Azure Blob Storage for unstructured data.</li>
              <li>Using Azure Data Lake Storage for big data and analytics.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(3)}
            >Data Processing in Azure</button>
          <div className="panel" style={{ display: openIndex === 3 ? 'block' : 'none' }}>
            <ol>
              <li>
                Introduction to Azure Data Factory for data integration and ETL
                (Extract, Transform, Load) processes.
              </li>
              <li>
                Using Azure Databricks for big data processing and analytics.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(4)}
            >Azure SQL Database</button>
         <div className="panel" style={{ display: openIndex === 4 ? 'block' : 'none' }}>
            <ol>
              <li>
                Introduction to Azure SQL Database as a managed relational
                database service.
              </li>
              <li>Creating and managing Azure SQL databases and servers.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(5)}
            >Azure Cosmos DB</button>
          <div className="panel" style={{ display: openIndex === 5 ? 'block' : 'none' }}>
            <ol>
              <li>
                Understanding Azure Cosmos DB as a globally distributed, NoSQL
                database service.
              </li>
              <li>Creating and managing Cosmos DB databases and containers.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(6)}
            >
            Data Security and Compliance in Azure
          </button>
          <div className="panel" style={{ display: openIndex === 6 ? 'block' : 'none' }}>
            <ol>
              <li>Implementing security measures for data in Azure.</li>
              <li>
                Understanding compliance standards and data privacy
                considerations.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(7)}
            >Data Governance and Cataloging</button>
         <div className="panel" style={{ display: openIndex === 7 ? 'block' : 'none' }}>
            <ol>
              <li>Managing data governance in Azure environments.</li>
              <li>Using Azure Purview for data cataloging and discovery.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(8)}
            >Data Ingestion and Integration</button>
           <div className="panel" style={{ display: openIndex === 8 ? 'block' : 'none' }}>
            <ol>
              <li>Building data pipelines with Azure Data Factory.</li>
              <li>Integrating on-premises data sources with Azure.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(9)}
            >Data Analytics and Insights</button>
           <div className="panel" style={{ display: openIndex === 9 ? 'block' : 'none' }}>
            <ol>
              <li>
                Introduction to Azure Synapse Analytics (formerly Azure SQL Data
                Warehouse) for data warehousing and analytics.
              </li>
              <li>
                Using Azure Power BI for data visualization and reporting.
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
  {/* search section javascript */}
</>

    )
}
export default Data;