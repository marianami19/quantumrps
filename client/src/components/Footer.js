import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-light">
              Quantum Roofing and Professional Services
            </h4>
            <address className="">
              3250 Bonita Beach Rd
              <br />
              Ste 205 - 556
              <br />
              Bonita Springs, FL 34134
              <br />
              United States of America
            </address>
          </div>
          <div className="col-md-6">
            <h4 className="text-light">Contact Information</h4>
            <p className="">Main Phone: (239) 372-3757</p>
            <p className="">
              Website:{" "}
              <a href="http://www.quantumrps.com" className="text-info">
                www.quantumrps.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
