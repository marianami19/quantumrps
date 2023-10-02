import React from "react";
import logo from "../assets/images/DP.jpg"; // Import your logo image

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
                <a
                  className="nav-link"
                  href="#calculate-estimate"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("roofing")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Calculate Estimate
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#tips"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("tips")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Tips
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact-us")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
