import React from "react";
import { Link } from 'react-router-dom';
function error () {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
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
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <section
    className="container-fluid bg-light"
    style={{ fontWeight: "bold", color: "black" }}
  >
    <div className="container text-center">
      {" "}
      {/* Center the navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/img/technohub.jpg" alt="technohub" id="technohub-logo" />
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
                aria-expanded="false"
              >
                Courses
              </a>
              <div className={`dropdown-menu ${
                  isDropdownVisible ? 'show' : ''
                }`}
                 aria-labelledby="navbarDropdown">
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
  <section className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-center mt-4 mb-4" style={{ color: "blue" }}>
            {" "}
            This Course page is not Available{" "}
          </h1>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mt-4">
          <h2> We are Offering this Courses</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 mt-3 mb-5">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">We are Offering courses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td scope="row">
                  <a href="java.html">
                    {" "}
                    Java Developer Certification Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td scope="row">
                  <a href="python.html">
                    {" "}
                    Python Developer Certification Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td scope="row">
                  <a href="react.html">
                    {" "}
                    React JS Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td scope="row">
                  <a href="nodejs.html">
                    {" "}
                    Node.JS Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td scope="row">
                  <a href="angular.html">
                    {" "}
                    Angular.JS Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td scope="row">
                  <a href="testing.html">
                    {" "}
                    Software Testing Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td scope="row">
                  <a href="sql.html"> SQL Certification and Training Course</a>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td scope="row">
                  <a href="android.html">
                    {" "}
                    Android development Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td scope="row">
                  <a href="GitHub.html">
                    {" "}
                    GitHub Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td scope="row">
                  <a href="ionicHybrid.html">
                    {" "}
                    Iconic Hybrid development Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td scope="row">
                  <a href="devops.html">
                    {" "}
                    DevOps Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td scope="row">
                  <a href="cybersecurity.html">
                    {" "}
                    Cybersecurity Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td scope="row">
                  <a href="microsoftpower.html">
                    {" "}
                    Microsoft Power Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td scope="row">
                  <a href="microsoftazure.html">
                    {" "}
                    Microsoft Azure Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td scope="row">
                  <a href="microsoftdatafundamental.html">
                    {" "}
                    Microsoft Fundamentals Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td scope="row">
                  <a href="microsoftInfrastructure.html">
                    {" "}
                    Microsoft Infrastructure Certification and Training Course
                  </a>
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td scope="row">
                  <a href="powerbi.html">
                    {" "}
                    Power BI Certification and Training Course
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <footer className="bg-dark">
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
export default error;