import React, { Fragment } from "react";
import "../styles/HeroSection.scss";
import roof from "../assets/images/roof.jpg";

function HeroSection() {
  const scrollToElement = () => {
    // Replace 'elementId' with the actual ID of the element you want to scroll to
    const element = document.getElementById("roofing");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Fragment>
      <div className="img-home d-block d-lg-none">
        <img src={roof} alt="Roofing" className="center-block" />
      </div>
      <div className=" home-screen p-5">
        <div className="d-flex justify-content-center flex-wrap">
          <div className="d-flex  flex-column">
            <div className="text-content">
              <div className="text-group">
                <div className="text-line">
                  <h1 className="line">Your Roof.</h1>
                  <h1 className="line">Your Rules.</h1>
                  <h1 className="line">Quantum Roofing.</h1>
                </div>
                <div className="text-line">
                  <h3 className="description">
                    At Quantum Roofing and Professional Services, we believe<br /> that
                    your roofing project should be straightforward, stress-<br />free,
                    and cost-effective.
                  </h3>
                  <p className="description">
                    Join us in our mission to transform the industry and<br />
                    experience the difference today.
                  </p>
                </div>
                <div className="calculate-button">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={scrollToElement}
                  >
                    Calculate Your Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="img-home d-none d-lg-block">
            <img src={roof} alt="Roofing" className="center-block" />
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default HeroSection;
