import React from "react";
import "../styles/Footer.scss";
import footer from "../assets/images/footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={footer}
              alt="Quantum Roofing and Professional Services"
              width="303px"
              height="182px"
            ></img>
          </div>

          <div className="col-md-2"></div>

          <div className="col-md-2  mt-5  text-start">
            <h4 className="foot-head">CONTACT </h4>
            <p className="foot-desc"> (239) 372-3757</p>
          </div>
          <div className="col-md-4 mt-5  text-start">
            <h4 className="foot-head">LOCATION </h4>
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
      <hr />
      <figure className="text-end">
        <figcaption className="blockquote-footer">
          Photos by{" "}
          <cite title="https://unsplash.com/photos/brown-and-white-wooden-house-near-green-trees-under-blue-sky-during-daytime-pvdx8c6Y5BY">
            <a href="https://unsplash.com/@kyddvisuals">Dillon Kydd</a>,{" "}
            <a href="https://unsplash.com/@teapowered">Patrick Robert Doyle</a>,{" "}
            <a href="https://unsplash.com/@ryunosuke_kikuno">
              Ryunosuke Kikuno
            </a>
            , <a href="https://unsplash.com/@juligentx">Julián Gentilezza</a>{" "}
          </cite>
          on <a href="https://unsplash.com/">Unsplash</a>
        </figcaption>
        <figcaption className="blockquote-footer">
          Website by{" "}
          <cite title="https://www.fiverr.com/s/yNyXPe">
            <a href="https://www.fiverr.com/s/yNyXPe">Maria Nelson</a>
          </cite>
        </figcaption>
      </figure>
    </footer>
  );
};

export default Footer;
