import React from "react";
// import './HeroSection.scss';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="hero-title">Welcome to Quantum Roofing</h1>
            <p className="hero-description">
              Providing professional roofing services since 2005.
            </p>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>
          <div className="col-md-6">
            {/* Add an image or illustration here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
