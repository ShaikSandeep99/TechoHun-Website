import react , {useState} from 'react';
// import './style.css';
import { Link } from 'react-router-dom';
function Github () {
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
            <img src="/img/gitHub.png" alt="" className="img-fluid" width="100%" />
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
                  Why Learn GitHub
                </h2>
                <p className="mb-3">
                  learning GitHub empowers you as a developer, enhances your
                  collaboration skills, and opens up opportunities to contribute to
                  the larger coding community. Whether you're a student, a
                  professional developer, or an open-source enthusiast, GitHub is a
                  valuable platform that can significantly improve your development
                  workflow and project management capabilities.
                </p>
                <h5 className="mb-3" style={{ fontWeight: "bold" }}>
                  Benefits
                </h5>
                <p className="mb-5">
                  GitHub is a powerful platform that enhances collaboration, improves
                  code quality, and provides a wealth of tools and features to support
                  the entire software development lifecycle. Its wide adoption in the
                  software industry and thriving developer community make it an
                  essential tool for modern software development teams.
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
                  <b>GitHub Course</b>
                </h3>{" "}
                <br />
                <p>
                  {" "}
                  <b>1.Version Control:</b> GitHub provides a powerful version control
                  system that allows developers to track changes in their code over
                  time. This ensures that all changes are recorded, making it easy to
                  revert to previous versions if needed.
                </p>
                <p>
                  {" "}
                  <b>2.Collaboration and Teamwork:</b> GitHub facilitates seamless
                  collaboration among team members working on the same project. It
                  enables multiple developers to work on the same codebase
                  simultaneously, merging their changes efficiently and resolving
                  conflicts.
                </p>
                <p>
                  {" "}
                  <b>3.Code Review and Quality Assurance:</b> GitHub's pull request
                  feature allows for code review, enabling team members to review and
                  discuss proposed changes. This ensures that the codebase maintains
                  high quality and adheres to coding standards.
                </p>
                <p>
                  {" "}
                  <b>4.Issue Tracking and Project Management:</b> GitHub provides an
                  integrated issue tracking system that helps teams manage bug
                  reports, feature requests, and other project-related tasks. This
                  feature enhances project organization and workflow efficiency.
                </p>
                <p>
                  {" "}
                  <b>5.Open Source Contribution:</b> GitHub hosts a vast number of
                  open-source projects. Developers can contribute to these projects,
                  collaborate with others, and make a positive impact on the software
                  community.
                </p>
                <p>
                  {" "}
                  <b>
                    6.Continuous Integration and Deployment (CI/CD) Integration:
                  </b>{" "}
                  GitHub integrates seamlessly with various CI/CD tools, automating
                  the process of building, testing, and deploying code. This
                  integration streamlines development workflows and reduces manual
                  efforts.
                </p>
                <p>
                  {" "}
                  <b>7.Documentation and Wiki Support:</b> GitHub allows developers to
                  create and maintain project documentation, making it easier for team
                  members and contributors to understand the project and its
                  implementation.
                </p>
                <p>
                  {" "}
                  <b>8.Showcase Work and Portfolio:</b> GitHub serves as a
                  professional portfolio for developers. By sharing their projects on
                  GitHub, developers can showcase their skills, expertise, and
                  contributions to potential employers and the wider developer
                  community.
                </p>
                <p>
                  {" "}
                  <b>9.Community Engagement:</b> GitHub fosters a vibrant developer
                  community. Users can interact with other developers, ask questions,
                  participate in discussions, and contribute to open-source projects,
                  promoting knowledge-sharing and learning.
                </p>
                <p>
                  {" "}
                  <b>10.Security and Code Integrity:</b> GitHub offers security
                  features like vulnerability scanning and dependency insights to help
                  developers identify and address security risks in their code.
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
              <h2
                className="text-primary text-center mb-4 mt-4"
                style={{ fontWeight: "bold" }}
              >
                GitHub Course Syllabus
              </h2>
              <div className="col-lg-2" />
              <div className="col-lg-8 mb-5">
              <button
              className="accordion btn btn-light btn-block"
              onClick={() => toggleAccordion(0)}
            >Introduction to Version Control</button>
                <div className="panel" style={{ display: openIndex === 0 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Understanding the basics of version control and its importance
                      in software development.
                    </li>
                    <li>
                      Differentiating between centralized and distributed version
                      control systems.
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(1)}
            >
                  Getting Started with Git and GitHub
                </button>
                <div className="panel" style={{ display: openIndex === 1 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Installing Git on the local machine and configuring user
                      settings.
                    </li>
                    <li>
                      Creating a GitHub account and setting up the necessary
                      repositories.
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(2)}
            >Basic Git Commands</button>
                  <div className="panel" style={{ display: openIndex === 2 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Learning essential Git commands like init, clone, add, commit,
                      push, pull, and branch./li&gt;
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(3)}
            >Branching and Merging</button>
                <div className="panel" style={{ display: openIndex === 3 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Creating and managing branches for different features or bug
                      fixes.
                    </li>
                    <li>
                      Merging branches back into the main branch (typically master or
                      main).
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(4)}
            >Collaborative Workflows</button>
               <div className="panel" style={{ display: openIndex === 4 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Collaborating with other developers using Pull Requests (PRs) to
                      review and merge changes.
                    </li>
                    <li>
                      Addressing conflicts that may arise during the merge process.
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(5)}
            >GitHub Features</button>
                <div className="panel" style={{ display: openIndex === 5 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Using GitHub's issue tracking system to manage tasks, bugs, and
                      enhancements.
                    </li>
                    <li>
                      Discussing and commenting on code changes within the GitHub
                      interface.
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(6)}
            >GitHub Actions</button>
               <div className="panel" style={{ display: openIndex === 6 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      {" "}
                      Understanding continuous integration and automation using GitHub
                      Actions.
                    </li>
                    <li>
                      Configuring workflows to automate testing, building, and
                      deployment processes.
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(7)}
            >Code Reviews and Best Practices</button>
                <div className="panel" style={{ display: openIndex === 7 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Conducting and participating in code reviews to ensure code
                      quality and maintainability.
                    </li>
                    <li>
                      Learning best practices for using version control and GitHub
                      effectively.
                    </li>
                  </ol>
                </div>
                <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(8)}
            >Advanced Git and GitHub Topics</button>
                 <div className="panel" style={{ display: openIndex === 8 ? 'block' : 'none' }}>
                  <ol>
                    <li>
                      Exploring advanced Git concepts like rebasing, cherry-picking,
                      and reflog.
                    </li>
                    <li>
                      Integrating GitHub with other development tools and services.
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
export default Github ;
