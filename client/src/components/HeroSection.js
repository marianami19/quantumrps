import React from "react";
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
    <div className="container home-screen">
      <div className="row">
        <div className="col-md-7">
          <div className="text-content">
            <div className="text-group">
              <div className="text-line">
                <h1 className="line">Your Roof.</h1>
                <h1 className="line">Your Rules.</h1>
                <h1 className="line">Quantum Roofing.</h1>
              </div>
              <div className="text-line">
                <p className="description">
                  At Quantum Roofing and Professional Services, we believe that
                  your roofing project should be straightforward, stress-free,
                  and cost-effective.
                </p>
                <p className="description">
                  Join us in our mission to transform the industry and
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
        <div className="col-md-5 center-block">
          {/* <div className="image-container"> */}
          <img src={roof} alt="Roofing" className="w-100 img-responsive mt-1" />
          {/* </div> */}
        </div>
      </div>

      {/* ... Previous content ... */}
    </div>
  );
}

export default HeroSection;
