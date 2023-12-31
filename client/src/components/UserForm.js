import React, { useState } from "react";
import Axios from "axios";
import "../styles/UserForm.scss";
import phone from "../assets/images/PhoneCircleicon.svg";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    squareFootage: "",
  });

  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post(
        "https://quantrps.onrender.com/submit-form",
        formData
      );

      if (response.status === 200) {
        setSuccess("Form submitted successfully!");
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
        setFormData({
          name: "",
          email: "",
          phone: "",
          squareFootage: "",
        });
      } else {
        setError("Error submitting form");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }
    } catch (error) {
      setError("Error submitting form");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container-fluid py-5 p-sm-1 p-md-3 p-lg-5 p-xl-5 p-xxl-5 bg-image" id="contact">
      <div className="bg-row m-xs-2 my-sm-1  m-lg-4 m-md-2  m-xl-5 m-xxl-5 ">
        <div className="d-flex flex-wrap flex-sm-wrap justify-content-center justify-content-lg-between p-4  p-sm-1 p-md-3 p-lg-5  p-xl-5 p-xxl-5 ">
          {/* Left Column */}
          <div className="form-container d-flex flex-column  mx-2 ">
            <p className="column-subheading">
              Need a comprehensive
              <br />
              roofing solution?
            </p>
            <h2 className="column-heading">Get in touch with us</h2>
            <h3 className="call-info mt-auto">
              Fill in the form, or give us a call at <br />
              {/* <FontAwesomeIcon icon={faPhone} /> */}
              {/* <div className="d-flex"> */}
              <img className="phone-icon" src={phone} alt="phone" />
              <span className="phone-number">
                <a href="tel:(239) 372-3757">(239) 372-3757</a>
              </span>
              {/* </div> */}
            </h3>
          </div>

          {/* Right Column - Form */}
          <div className="form-wrap ms-lg-auto">
            <div className="bg-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-1">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group mb-1">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group mb-1">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group mb-1">
                  <label>Roof Square Footage:</label>
                  <input
                    type="number"
                    name="squareFootage"
                    className="form-control"
                    value={formData.squareFootage}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="alerts">
                  <Alert
                    variant="danger"
                    show={showError}
                    onClose={() => setShowError(false)}
                    dismissible
                  >
                    {error}
                  </Alert>
                  <Alert
                    variant="success"
                    show={showSuccess}
                    onClose={() => setShowSuccess(false)}
                    dismissible
                  >
                    <FontAwesomeIcon icon={faCheckCircle} /> {success}
                  </Alert>
                </div>

                <div className="contact-button text-center">
                  <button type="submit" className="btn btn-outline-dark">
                    SUBMIT
                  </button>
                  <p className="under-submit-text">
                    We'll get back to you soon!
                  </p>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserForm;
