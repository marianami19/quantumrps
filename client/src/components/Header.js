import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleDocumentClick = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      isNavbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isNavbarOpen]);

  const scrollToElement = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="header sticky-top bg-white">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid  mx-md-4" ref={navbarRef}>
          <img src={logo} alt="Logo" height={40} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isNavbarOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <NavLink
                  className="nav-NavLink"
                  to="/"
                  activeClassName="active"
                  onClick={toggleNavbar}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item mx-md-4">
                <NavLink
                  className="nav-link"
                  to="/about-us"
                  activeClassName="active"
                  onClick={toggleNavbar}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="head-button text-center ms-2">
                  <button
                    onClick={scrollToElement}
                    className="btn btn-outline-dark"
                  >
                    CONTACT US
                  </button>
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
