import react,{ useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
// import './homecomponent/home.css';
// import  './android.css';
function Android (){
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
      <img src="/img/android.png" alt="" className="img-fluid" width="100%" />
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
          <h2 className="mb-3 text-primary" style={{ fontWeight: "bold" }}>
            Why Learn Android
          </h2>
          <p className="mb-3">
            Learning Android development opens up a world of possibilities in
            the mobile app industry. Whether you want to work for established
            companies, create your own apps, or freelance as an Android
            developer, the skills you acquire in this domain can lead to a
            rewarding and fulfilling career.
          </p>
          <h5 className="mb-3" style={{ fontWeight: "bold" }}>
            Benefits
          </h5>
          <p className="mb-5">
            Android's wide adoption, open-source nature, extensive app
            ecosystem, hardware diversity, and integration with Google services
            contribute to its popularity and success as a mobile operating
            system. It offers users a rich and versatile experience while
            providing developers with a robust platform to create innovative and
            feature-rich applications.
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
            <b>Android Course</b>
          </h3>{" "}
          <br />
          <p>
            {" "}
            <b>1.Introduction to Android Development:</b> Understanding the
            basics of Android development, the Android platform, and the Android
            development ecosystem.
          </p>
          <p>
            {" "}
            <b>2.Setting Up Android Development Environment:</b> Learning how to
            set up the development environment for Android, including installing
            Android Studio and configuring the SDK.
          </p>
          <p>
            {" "}
            <b>3.Android User Interface (UI) Design:</b> Exploring the
            fundamentals of Android UI design, including layouts, views, and
            widgets, and designing user-friendly interfaces.
          </p>
          <p>
            {" "}
            <b>4.Working with Activities and Intents:</b> Understanding the
            concept of activities in Android, managing activity lifecycle, and
            using intents for inter-component communication.
          </p>
          <p>
            {" "}
            <b>5.Data Storage and Persistence:</b> Learning how to store and
            retrieve data in Android, including working with SQLite databases,
            SharedPreferences, andfile storage.
          </p>
          <p>
            {" "}
            <b>6.Networking and Web Services:</b> Exploring techniques for
            network communication in Android, including making HTTP requests,
            parsing JSON/XML data, and integrating web services.
          </p>
          <p>
            {" "}
            <b>7.Working with Sensors and Hardware:</b> Understanding how to
            interact with device sensors, such as GPS, accelerometer, and
            camera, and accessing device hardware features.
          </p>
          <p>
            {" "}
            <b>8.Background Processing and Multithreading:</b> Learning how to
            perform background tasks and implement multithreading in Android to
            ensure a smooth user experience.
          </p>
          <p>
            {" "}
            <b>9.Android App Security:</b> Exploring techniques forsecuring
            Android applications, includinguser authentication, data encryption,
            and protecting against common security vulnerabilities.
          </p>
          <p>
            {" "}
            <b>10.Publishing and Monetizing Android Apps:</b> Understanding the
            process of publishing Android apps on the Google Play Store,
            optimizing app listings, and exploring monetization options.
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
      <div className="container">
        <div className="row">
          <h3
            className="text-primary text-center mb-4 mt-4"
            style={{ fontWeight: "bold" }}
          >
            Android Development Course Syllabus
          </h3>
          <div className="col-lg-2" />
          <div className="col-lg-8 mb-5">
            {/* Introduction to Android Development */}
            <button
              className="accordion btn btn-light btn-block"
              onClick={() => toggleAccordion(0)}
            >
              Introduction to Android Development
            </button>
            <div className="panel" style={{ display: openIndex === 0 ? 'block' : 'none' }}>
              <ol>
                <li>Understanding the basics of Android and its architecture.</li>
                <li>
                  Setting up the Android development environment (Android Studio,
                  SDK, etc.).
                </li>
                <li>
                  Creating a new Android project and understanding project structure.
                </li>
              </ol>
            </div>

            {/* Java (or Kotlin) Programming */}
            <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(1)}
            >
              Java (or Kotlin) Programming
            </button>
            <div className="panel" style={{ display: openIndex === 1 ? 'block' : 'none' }}>
              <ol>
                <li>Learning the fundamentals of Java (or Kotlin) programming language.</li>
                <li>
                  Exploring object-oriented programming concepts and their relevance
                  to Android development.
                </li>
              </ol>
            </div>

            {/* User Interface (UI) Development */}
            <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(2)}
            >
              User Interface (UI) Development
            </button>
            <div className="panel" style={{ display: openIndex === 2 ? 'block' : 'none' }}>
              <ol>
                <li>
                  Building user interfaces using XML layout files and Android's View
                  components (e.g., TextView, Button, RecyclerView, etc.).
                </li>
                <li>Understanding layouts, styles, themes, and resources.</li>
              </ol>
            </div>

            {/* Functions and Modules */}
            <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(3)}
            >
              Functions and Modules
            </button>
            <div className="panel" style={{ display: openIndex === 3 ? 'block' : 'none' }}>
              <ol>
                <li>Understanding the lifecycle of Activities and Fragments, and managing their state.</li>
              </ol>
            </div>

            {/* Intents and Navigation */}
            <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(4)}
            >
              Intents and Navigation
            </button>
            <div className="panel" style={{ display: openIndex === 4 ? 'block' : 'none' }}>
              <ol>
                <li>Using Intents to navigate between different Activities and pass data.</li>
                <li>Implementing navigation patterns like tabs, bottom navigation, and navigation drawers.</li>
              </ol>
            </div>

            {/* Data Storage */}
            <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(5)}
            >
              Data Storage
            </button>
            <div className="panel" style={{ display: openIndex === 5 ? 'block' : 'none' }}>
              <ol>
                <li>
                  Exploring various data storage options in Android, such as SharedPreferences, SQLite databases, and file I/O.
                </li>
              </ol>
            </div>

            {/* Networking and Web Services */}
            <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(6)}
            >
              Networking and Web Services
            </button>
            <div className="panel" style={{ display: openIndex === 6 ? 'block' : 'none' }}>
              <ol>
                <li>
                  Making HTTP requests using Android's built-in libraries or third-party libraries like Retrofit.
                </li>
                <li>Parsing JSON data and handling network responses.</li>
              </ol>
            </div>

            {/* Working with APIs */}
            <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(7)}
            >
              Working with APIs
            </button>
            <div className="panel" style={{ display: openIndex === 7 ? 'block' : 'none' }}>
              <ol>
                <li>Integrating with external APIs like Google Maps API, Firebase API, etc.</li>
              </ol>
            </div>

            {/* Background Processing and Services */}
            <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(8)}
            >
              Background Processing and Services
            </button>
            <div className="panel" style={{ display: openIndex === 8 ? 'block' : 'none' }}>
              <ol>
                <li>Implementing background tasks and services for long-running operations.</li>
                <li>Scheduling tasks using Android's JobScheduler or WorkManager.</li>
              </ol>
            </div>

            {/* Android Security and Permissions */}
            <button
              className="accordion btn btn-light btn-block mt-3"
              onClick={() => toggleAccordion(9)}
            >
              Android Security and Permissions
            </button>
            <div className="panel" style={{ display: openIndex === 9 ? 'block' : 'none' }}>
              <ol>
                <li>Understanding Android app permissions and best practices for security.</li>
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
  {/* accordian section javascript */}
  {/* chatbot integration code  */}
  {/*  */}
  {/* dropdown section javascript */}
  {/* course search option javascript */}
</>
 )
}
export default Android;
