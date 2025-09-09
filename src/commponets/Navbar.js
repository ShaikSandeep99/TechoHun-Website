//New code

import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import your custom CSS for styling

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src="/img/technohub-logo.png" alt="Technohub" className="navbar-logo" />
        </NavLink>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/courses" 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



//Old code
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css'; // Import your custom CSS for styling

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         {/* Brand Logo */}
//         <NavLink className="navbar-brand" to="/">
//           <img src="/img/technohub-logo.png" alt="Technohub" className="navbar-logo" />
//         </NavLink>

//         {/* Toggler for mobile view */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/" activeClassName="active">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about" activeClassName="active">
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/courses" activeClassName="active">
//                 Courses
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/gallery" activeClassName="active">
//                 Gallery
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact" activeClassName="active">
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
