import React from "react";
// import './ContactSection.scss';

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-description">
              Have questions or need assistance? Contact us below.
            </p>
          </div>
          <div className="col-md-6">
            {/* Add a contact form or contact information */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
