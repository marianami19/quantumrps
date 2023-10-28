import React from "react";
import "../styles/HeroSection.scss";

function HeroSection() {
  const scrollToSteps = () => {
    const stepsContainer = document.getElementById("roofing");
    if (stepsContainer) {
      stepsContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-md-6">
            <h1 className="hero-title">Welcome to Quantum Roofing</h1>
            <p className="hero-description">
              Providing professional roofing services.
            </p>
            <button className="btn btn-primary btn-lg" onClick={scrollToSteps}>
              Get Started
            </button>
          </div>
          <div className="col-md-6">
            <div className="image-container">
              <img
                src={require(`../assets/images/mockup.jpg`)} // Replace with your image source
                alt="Roofing"
                className="img-fluid image-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
