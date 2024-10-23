import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
function Devopsjs () {
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
      <img src="/img/devOps.png" alt="" className="img-fluid" width="100%" />
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
          <h2 className=" mb-3 text-primary" style={{ fontWeight: "bold" }}>
            Why Learn DevOps{" "}
          </h2>
          <p className="mb-3">
            DevOps is a transformative approach that combines cultural practices
            and technical tools to foster collaboration, automate processes, and
            deliver high-quality software faster and more efficiently. By
            breaking down barriers between development and operations,
            organizations can achieve better software outcomes and respond
            effectively to the demands of the modern software industry.
          </p>
          <h5 className="mb-3" style={{ fontWeight: "bold" }}>
            Benefits
          </h5>
          <p className="mb-5">
            DevOps brings significant benefits, including increased efficiency,
            faster delivery, improved collaboration, and higher-quality
            software. It aligns software development and operations, enabling
            organizations to meet the demands of the rapidly evolving
            technological landscape.
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
            <b>DevOps Testing Course</b>
          </h3>{" "}
          <br />
          <p>
            {" "}
            <b>1.Faster Delivery of Software:</b> DevOps emphasizes automation
            and continuous integration and continuous delivery (CI/CD), enabling
            faster and more frequent releases of software. This results in
            quicker delivery of new features, bug fixes, and updates to
            end-users.
          </p>
          <p>
            {" "}
            <b>2.Improved Collaboration:</b> DevOps fosters a collaborative
            culture among developers, testers, operations teams, and other
            stakeholders. It breaks down silos, promotes communication, and
            encourages shared responsibilities, leading to more effective
            teamwork.
          </p>
          <p>
            {" "}
            <b>3.Higher Quality Software:</b> Continuous testing and automated
            deployment in DevOps help identify and address defects early in the
            development process. This leads to higher software quality, as
            issues are detected and fixed before they impact end-users.
          </p>
          <p>
            {" "}
            <b>4.Enhanced Stability and Reliability:</b> DevOps practices
            emphasize the use of infrastructure-as-code and version control,
            resulting in consistent and reliable infrastructure setups. This
            reduces the chances of configuration-related failures and improves
            system stability.
          </p>
          <p>
            {" "}
            <b>5.Efficient Resource Utilization:</b> DevOps encourages the use
            of cloud infrastructure and scalability solutions, allowing
            organizations to optimize resource utilization and cost-effectively
            handle fluctuating workloads.
          </p>
          <p>
            {" "}
            <b>6.Reduced Lead Time and Time to Market:</b> By automating manual
            processes, minimizing handoffs, and optimizing workflows, DevOps
            reduces lead time and shortens the time it takes to bring a feature
            from development to production.
          </p>
          <p>
            {" "}
            <b>7.Rapid Feedback Loops:</b> Continuous monitoring and real-time
            feedback in DevOps allow teams to quickly identify issues and gather
            insights on application performance and user behavior, enabling
            timely improvements.
          </p>
          <p>
            {" "}
            <b>8.Increased Deployment Frequency:</b> DevOps enables frequent and
            small releases, reducing the risk associated with large deployments
            and making it easier to roll back changes if needed.
          </p>
          <p>
            {" "}
            <b>9.Business Agility:</b> DevOps enables organizations to respond
            more quickly to market demands and customer needs. The ability to
            iterate rapidly and adapt to changes improves business agility.
          </p>
          <p>
            {" "}
            <b>10.Culture of Continuous Improvement:</b> DevOps promotes a
            culture of continuous improvement and learning. Teams are encouraged
            to experiment, learn from failures, and implement improvements
            incrementally.
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
            Why enroll for DevOps Certification Course?
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
                Market Research Future predicts the worldwide public cloud
                service market is expected to reach $ 1386.14B by 2030, growing
                at a CAGR of 21.4%.
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
                According to Fortune Business Insights, the global development
                and operations (DevOps) market is expected to reach USD 14,969.6
                million by 2026.
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
                As per ZipRecruiter, the average annual pay for an AWS DevOps
                Engineer in the United States is $1,27,998 a year with an annual
                cash bonus of $5000.
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
          DevOps Course Syllabus
        </h3>
        <div className="col-lg-2" />
        <div className="col-lg-8 mb-5">
        <button
              className="accordion btn btn-light btn-block"
              onClick={() => toggleAccordion(0)}
            >Introduction to DevOps</button>
           <div className="panel" style={{ display: openIndex === 0 ? 'block' : 'none' }}>
            <ol>
              <li>
                Understanding the DevOps culture, principles, and benefits.
              </li>
              <li>
                Explaining the DevOps lifecycle and its role in the software
                development process.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(1)}
            >Version Control Systems</button>
          <div className="panel" style={{ display: openIndex === 1 ? 'block' : 'none' }}>
            <ol>
              <li>Learning popular version control systems like Git.</li>
              <li>Understanding branching and merging strategies.</li>
              <li>
                Collaborating with team members using version control tools.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(2)}
            >Continuous Integration (CI)</button>
           <div className="panel" style={{ display: openIndex === 2 ? 'block' : 'none' }}>
            <ol>
              <li>
                Setting up CI pipelines for automated code integration and
                testing.
              </li>
              <li>
                Configuring build servers to automatically build and test code
                changes.
              </li>
              <li>
                Using CI tools like Jenkins, Travis CI, CircleCI, or GitLab
                CI/CD.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(3)}
            >Continuous Deployment (CD)</button>
            <div className="panel" style={{ display: openIndex === 3 ? 'block' : 'none' }}>
            <ol>
              <li>
                Implementing continuous deployment to automate the process of
                deploying code to production.
              </li>
              <li>
                Configuring CD pipelines to deploy applications automatically.
              </li>
              <li>Rolling back changes in case of deployment failures.</li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(4)}
            >Infrastructure as Code (IaC)</button>
           <div className="panel" style={{ display: openIndex === 4 ? 'block' : 'none' }}>
            <ol>
              <li>Learning about IaC concepts and benefits.</li>
              <li>
                Using tools like Terraform or AWS CloudFormation to provision
                and manage infrastructure.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(5)}
            >Configuration Management</button>
            <div className="panel" style={{ display: openIndex === 5 ? 'block' : 'none' }}>
            <ol>
              <li>
                Using configuration management tools like Ansible, Chef, or
                Puppet to automate server configuration and management.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(6)}
            >Monitoring and Logging</button>
          <div className="panel" style={{ display: openIndex === 6 ? 'block' : 'none' }}>
            <ol>
              <li>
                Implementing monitoring and logging strategies for applications
                and infrastructure.
              </li>
              <li>
                Using tools like Prometheus, Grafana, ELK Stack (Elasticsearch,
                Logstash, Kibana), etc.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(7)}
            >Cloud Platforms</button>
          <div className="panel" style={{ display: openIndex === 7 ? 'block' : 'none' }}>
            <ol>
              <li>
                Understanding cloud computing concepts and popular cloud
                platforms like AWS, Azure, or Google Cloud.
              </li>
              <li>
                Deploying applications on the cloud and utilizing cloud-based
                services..
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(8)}
            >Collaboration and Communication</button>
          <div className="panel" style={{ display: openIndex === 8 ? 'block' : 'none' }}>
            <ol>
              <li>
                Emphasizing communication and collaboration among
                cross-functional teams in a DevOps environment.
              </li>
              <li>
                Integrating collaboration tools like Slack, Microsoft Teams, or
                Jira.
              </li>
            </ol>
          </div>
          <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(9)}
            >Security in DevOps</button>
           <div className="panel" style={{ display: openIndex === 9 ? 'block' : 'none' }}>
            <ol>
              <li>
                Incorporating security best practices into the DevOps process.
              </li>
              <li>
                Learning about secure coding, vulnerability scanning, and
                security testing.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="" style={{ backgroundColor: "rgb(14, 14, 14)" }}>
    <div className="row text-white">
      <div className="col-lg-1" />
      <div className="col-lg-3 mt-5 mb-5">
        <div className="">
          <img src="/img/logo.svg" alt="technohub" />
          {/* <h5>Hello, this is the fading text!</h5> */}
        </div>
      </div>
      <div className="col-lg-3 mt-5 mb-5">
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
      <div className="col-lg-4 mt-5 mb-5">
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
export default Devopsjs;