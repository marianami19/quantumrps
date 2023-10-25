import React from "react";
import logo from "../assets/images/DP.jpg"; // Import your logo image
import {Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header sticky-top bg-white">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#"> */}
          <img src={logo} alt="Logo" height={40} width={40} />
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
            <ul className="navbar-nav ml-auto">
             
              <li className="nav-item">
              <Link   className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link   className="nav-link" to="/about-us">About</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
