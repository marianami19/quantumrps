import React from "react";
import "../styles/Footer.scss";
import footer from "../assets/images/footer.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={footer} width="303px" height="182px" ></img>
          </div>
          
          <div className="col-md-2">
       
          </div>
          
          <div className="col-md-2  mt-5  text-start">
            <h4 className="foot-head">CONTACT </h4>
            <p className="foot-desc"> (239) 372-3757</p>

          </div>
          <div className="col-md-4 mt-5  text-start">
            <h4 className="foot-head">
              LOCATION            </h4>
            <address className="foot-desc">
              3250 Bonita Beach Rd
              <br />
              Ste 205 - 556
              <br />
              Bonita Springs, FL 34134
              <br />
              United States of America
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
