import react , {useState} from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
function Contactjs(){
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const showDropdown = () => {
    setIsDropdownVisible(true); // Show dropdown
};

const hideDropdown = () => {
    setIsDropdownVisible(false); // Hide dropdown
};
    return(
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
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/css-folder/contact.css" />
  <link rel="stylesheet" href="/css-folder/home.css" />
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
            <li className="nav-item active">
              <a className="nav-link" href="contact.html">
                Contact US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
  <section
    className="container-fluid"
    style={{ backgroundColor: "rgb(1,124,194)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mt-4 mb-4">
            <h3 className="text-white">Contact Us</h3>
            <ul className="header-baner">
              <li>
                {" "}
                <a href="home.html">Home</a>{" "}
              </li>{" "}
              &nbsp;
              <li>
                {" "}
                <span className="text-white"> / </span>{" "}
              </li>
              <li>
                {" "}
                <a href="contact.html"> Contact us</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container mt-4 mb-5">
      <div className="row">
        <div className="col-md-6">
          <div className="row" id="contact-form">
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="text-center mt-4 mb-4">
                <h6>GET IN TOUCH WITH US</h6>
                <h3 style={{ color: "rgb(220, 20, 157)" }}>LEAVE A MESSAGE</h3>
              </div>
              <form
                className="mb-5"
                id="form-text"
                action="https://formsubmit.co/0d9d0d6d55b0a580b48ab488a57b4b93"
                method="POST"
                onsubmit="formValidation()"
              >
                <label htmlFor="">Your name :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  required="required"
                />
                <label htmlFor="">Mobile Number :</label>
                <input
                  type="number"
                  className="form-control"
                  name=""
                  id="Number"
                  placeholder="Enter Mobile number"
                  required="required"
                />
                <label htmlFor="">Email :</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id=""
                  placeholder="Enter Email id"
                  required="required"
                />
                <label htmlFor="">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  placeholder="Enter Subject"
                  required="required"
                />
                <label htmlFor="">Message :</label> <br />
                <textarea
                  name="textarea"
                  id=""
                  className="form-control"
                  required="required"
                  defaultValue={" Enter your message"}
                />
                <br />
                <input
                  type="submit"
                  name="submit"
                  id=""
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-1" />
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-11 mt-5">
              <div className="each mt-5">
                <div className="location-img">
                  <img
                    src="/img/marker.svg"
                    alt="location-img"
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h5>Address</h5>
                  <address>
                    <p>
                      #131A, 1st floor, 80 Feet Rd, RMV 2nd stage
                      <br /> MET Layout, Ashwath Nagar,
                      <br />
                      Sanjaynagar, Bengaluru-94.
                    </p>
                  </address>
                </div>
              </div>
              <hr />
              <div className="each">
                <div className="location-img">
                  <img
                    src="/img/phone.svg"
                    alt="location-img"
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h5>Phone</h5>
                  <address>
                    <p>9849175588</p>
                  </address>
                </div>
              </div>
              <hr />
              <div className="each">
                <div className="location-img">
                  <img
                    src="/img/mail.svg"
                    alt="location-img"
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h5>Email</h5>
                  <address>
                    <p>shameer@technohubtrainings.com</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="googleMap">
    <div className="container-fluid mt-1">
      <div className="row">
        <div className="col-lg-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15548.605312049534!2d77.5756771!3d13.02603365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAxJzM2LjUiTiA3N8KwMzQnNDUuOSJF!5e0!3m2!1sen!2sin!4v1678708517460!5m2!1sen!2sin"
            width="100%"
            height={350}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
    {/* <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.075891564515!2d-96.82715598481357!3d32.94900568092033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21301cd36de9%3A0x93bd24ae6b66553d!2s14800%20Quorum%20Dr%20%23330%2C%20Dallas%2C%20TX%2075254%2C%20USA!5e0!3m2!1sen!2sin!4v1617078510857!5m2!1sen!2sin"
      width="100%"
      height="350"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe> */}
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
              1st floor, 80 Feet Rd, opposite Canara Bank,
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
  {/* fade-up-text */}
  {/* Add Bootstrap JS and jQuery (required for dropdown functionality) */}
  {/* dropdown section javascript */}
  {/* chatbot integration code  */}
  {/*  */}
</>

    )
}
export default Contactjs;