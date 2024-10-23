import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
function Microsoftinfrastructure () {
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
        src="/img/Designing Microsoft Azure Infrastructure Solutions.png"
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
        <div className="col-lg-7">
          <h3 className=" mb-3 text-primary" style={{ fontWeight: "bold" }}>
            Why Learn Microsoft Azure Infrastructure Solutions Course
          </h3>
          <p className="mb-3">
            learning to design Microsoft Azure infrastructure solutions offers
            numerous advantages, including career opportunities, cloud
            expertise, and the ability to create scalable, secure, and
            high-performance cloud architectures. Azure's diverse services,
            global reach, and integration capabilities make it a powerful
            platform for building modern cloud solutions. As an Azure solutions
            architect, you play a crucial role in driving digital transformation
            and enabling organizations to leverage the full potential of cloud
            computing.
          </p>
          <h5 className="mb-3" style={{ fontWeight: "bold" }}>
            Benefits
          </h5>
          <p className="mb-5">
            Microsoft Azure Infrastructure Solutions design offers numerous
            advantages, including career growth, cloud expertise, and the
            ability to architect and deliver scalable, secure, and
            high-performance cloud-based solutions. Azure's vast array of
            services and global presence make it an ideal platform for
            organizations seeking to transform their IT operations. As an Azure
            solutions architect, you become a key player in facilitating cloud
            adoption and driving innovation for businesses across industries.
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
            <b> Microsoft Azure Infrastructure Solutions Course</b>
          </h3>{" "}
          <br />
          <p>
            {" "}
            <b>1.Architecting Cloud Solutions: </b>Designing Azure
            infrastructure solutions allows you to learn how to architect
            cloud-based solutions that meet specific business requirements. This
            skill is crucial as more organizations are adopting cloud
            technologies for their IT needs.
          </p>
          <p>
            {" "}
            <b>2.Azure Expertise and Specialization:</b> Becoming proficient in
            designing Azure infrastructure solutions positions you as an Azure
            expert. This specialization can lead to better job opportunities and
            career growth in the cloud computing industry.
          </p>
          <p>
            {" "}
            <b>3.Cloud Adoption Demand:</b> As cloud adoption continues to grow,
            organizations seek skilled professionals who can design robust and
            scalable cloud architectures. Learning Azure infrastructure design
            aligns you with the increasing demand for cloud architects.
          </p>
          <p>
            {" "}
            <b>4.Optimizing Resource Utilization: </b>By learning to design
            Azure solutions, you can optimize resource utilization,
            cost-effectively deploy services, and ensure efficient management of
            cloud resources.
          </p>
          <p>
            {" "}
            <b>5.High-Performance Solutions:</b> Designing Azure infrastructure
            with performance in mind allows you to create high-performing and
            responsive applications, benefiting end-users and customers.
          </p>
          <p>
            {" "}
            <b>6.Scalability and Flexibility:</b> Azure offers various services
            and features to support scalability and flexibility. Learning to
            design Azure solutions helps you leverage these capabilities to
            accommodate changing business needs.
          </p>
          <p>
            {" "}
            <b>7.Security and Compliance:</b> Proper design ensures the
            implementation of robust security measures and compliance standards.
            You can create secure solutions that protect data and applications
            hosted in Azure.
          </p>
          <p>
            {" "}
            <b>8.Disaster Recovery and Business Continuity:</b> Designing Azure
            solutions with disaster recovery and backup strategies ensures
            business continuity in case of unexpected outages or data loss.
          </p>
          <p>
            {" "}
            <b>9.Integration with Hybrid Environments: </b>Many organizations
            have hybrid cloud environments, combining on-premises infrastructure
            with Azure resources. Understanding Azure infrastructure design
            enables seamless integration and hybrid cloud management.
          </p>
          <p>
            {" "}
            <b>10.DevOps and Automation: </b>Designing Azure solutions with
            DevOps principles in mind facilitates automation, continuous
            integration/continuous deployment (CI/CD), and agile development
            practices.
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
        <h3
          className="text-primary text-center mb-4 mt-4"
          style={{ fontWeight: "bold" }}
        >
          {" "}
          Microsoft Azure Infrastructure Solutions Syllabus
        </h3>
        <div className="col-lg-2" />
        <div className="col-lg-8 mb-5">
        <button
              className="accordion btn btn-light btn-block"
              onClick={() => toggleAccordion(0)}
            >Introduction to Microsoft Azure</button>
           <div className="panel" style={{ display: openIndex === 0 ? 'block' : 'none' }}>
            <ol>
              <li>Overview of cloud computing and Microsoft Azure.</li>
              <li>
                Understanding the benefits and features of Azure services.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(1)}
            >
            Azure Architecture and Design Principles
          </button>
          <div className="panel" style={{ display: openIndex === 1 ? 'block' : 'none' }}>
            <ol>
              <li>
                Cloud computing architectural concepts and best practices.
              </li>
              <li>
                Designing for scalability, reliability, and high availability.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(2)}
            >
            Azure Resource Management and Governance
          </button>
          <div className="panel" style={{ display: openIndex === 2 ? 'block' : 'none' }}>
            <ol>
              <li>Managing Azure subscriptions and resource groups.</li>
              <li>
                Implementing Azure governance policies and role-based access
                control (RBAC).
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(3)}
            >Azure Networking Solutions</button>
          <div className="panel" style={{ display: openIndex === 3 ? 'block' : 'none' }}>
            <ol>
              <li>Designing virtual networks and subnets.</li>
              <li>Implementing Azure Load Balancer and Application Gateway.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(4)}
            >Azure Storage Solutions</button>
          <div className="panel" style={{ display: openIndex === 4 ? 'block' : 'none' }}>
            <ol>
              <li>
                Designing Azure storage accounts and storage replication
                options.
              </li>
              <li>Implementing Azure Blob, File, Table, and Queue storage.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(5)}
            >
            Azure Identity and Access Management (IAM)
          </button>
          <div className="panel" style={{ display: openIndex === 5 ? 'block' : 'none' }}>
            <ol>
              <li>Designing Azure Active Directory (Azure AD) components.</li>
              <li>Implementing Azure AD authentication and access controls.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(6)}
            >
            Azure Virtual Machines and Virtual Machine Scale Sets
          </button>
          <div className="panel" style={{ display: openIndex === 6 ? 'block' : 'none' }}>
            <ol>
              <li>
                Designing Azure virtual machines and their configurations.
              </li>
              <li>
                Implementing auto-scaling with virtual machine scale sets.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(7)}
            >Azure App Service Solutions</button>
          <div className="panel" style={{ display: openIndex === 7 ? 'block' : 'none' }}>
            <ol>
              <li>Designing web apps and API apps using Azure App Service.</li>
              <li>
                Implementing Azure App Service deployment slots and scaling.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(8)}
            >Azure Database Solutions</button>
           <div className="panel" style={{ display: openIndex === 8 ? 'block' : 'none' }}>
            <ol>
              <li>Designing Azure SQL Database and Cosmos DB solutions.</li>
              <li>Implementing geo-replication and backup strategies.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(9)}
            >
            Hybrid Cloud Solutions and Integration
          </button>
          <div className="panel" style={{ display: openIndex === 9 ? 'block' : 'none' }}>
            <ol>
              <li>
                Integrating on-premises networks with Azure virtual networks.
              </li>
              <li>
                Designing hybrid identity solutions with Azure AD Connect.
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
export default Microsoftinfrastructure;