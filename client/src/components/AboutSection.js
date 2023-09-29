import React from "react";
// import './AboutSection.scss';

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">{/* Add about content and images */}</div>
          <div className="col-md-6">
            <h2 className="section-title">About Us</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur justo at risus egestas euismod.
            </p>
            <p className="section-description">
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Sed nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
