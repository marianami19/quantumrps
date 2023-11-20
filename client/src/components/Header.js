import React from "react";
import logo from "../assets/images/logo.png"; // Import your logo image
import { NavLink } from 'react-router-dom';
import "../styles/Header.scss";

function Header() {
  const scrollToElement = () => {
    // Replace 'elementId' with the actual ID of the element you want to scroll to
    const element = document.getElementById('contact');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header sticky-top bg-white" >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid mx-md-4">
          {/* <a className="navbar-brand" href="#"> */}
          <img src={logo} alt="Logo" height={40}  />
          {/* </a> */}
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
              <NavLink    className="nav-NavLink " to="/" activeClassName="active">HOME</NavLink >
              </li>
              <li className="nav-item mx-md-4">
              <NavLink    className="nav-link" to="/about-us" activeClassName="active">ABOUT</NavLink >
              </li>
              <li className="nav-item">
                <div className="head-button text-center ms-2">
                  <button  onClick={scrollToElement} className="btn btn-outline-dark">CONTACT US</button>
                </div>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
