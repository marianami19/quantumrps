import React, { useState } from "react";
import Axios from "axios"; // Import Axios for making HTTP requests
import "../styles/UserForm.scss";
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
   faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

function UserForm() {
  // Initialize state to store form data
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

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Make a POST request to your backend endpoint
      const response = await Axios.post(
        "https://quantrps.onrender.com/submit-form",
        formData
      );

      if (response.status === 200) {
        console.log("Form submitted successfully!");
        // Reset the form fields after submission (if needed)
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
        console.error("Form submission failed. Status:", response.status);
        // Handle the failure (e.g., display an error message to the user)
        setError('Error submitting form');
        setShowError(true);
        // Automatically hide the error alert after 3 seconds
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError('Error submitting form');
      setShowError(true);
      // Automatically hide the error alert after 3 seconds
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      // Handle any errors (e.g., display an error message to the user)
    }
  };

  // Function to handle input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container-fluid bg-image" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 form-container">
            <div className="row">
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h2>Contact Us</h2>
                <p>
                  We're here to help. Feel free to contact us using the form
                  below, and we'll respond promptly. Your satisfaction is our
                  top priority.
                </p>
                <div></div>
              </div>

              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
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
                  <div className="form-group">
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
                  <div className="form-group">
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
                  <div className="form-group">
                    <label>Square Footage:</label>
                    <input
                      type="number"
                      name="squareFootage"
                      className="form-control"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div style={{height: '50px'}}>
                  <Alert variant="danger" show={showError} onClose={() => setShowError(false)} dismissible>
                  {error}
                </Alert>
                <Alert variant="success" show={showSuccess} onClose={() => setShowSuccess(false)} dismissible>
                  <FontAwesomeIcon icon={faCheckCircle} /> {success}
                </Alert>
                </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary text-center mt-2"
                  >
                    Submit
                  </button>
                </form>
            
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserForm;
