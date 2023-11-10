import React, { Fragment } from "react";
import "../styles/Aboutus.scss";
import ourstory from "../assets/images/ourstory.jpg";
import vision from "../assets/images/vision.jpg";
import mission from "../assets/images/mission.jpg";
import UserForm from "./UserForm";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <Fragment>
      <Helmet>
        <title>
          Simplify Your Roof Replacement Journey with Quantum Roofing | Our
          Story
        </title>
        <meta
          name="description"
          content="Discover the genesis of Quantum Roofing and our vision to revolutionize roof replacement. Our mission is to provide hassle-free roofing services. Learn how we leverage cutting-edge technology to make the process simple and stress-free. Contact Quantum Roofing for a detailed solution to your roofing needs."
        />
      </Helmet>
      <div className="container-fluid main-container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <h2 className="title">Our Story</h2>
            <p className="description desc-1">
              The genesis of Quantum Roofing stems from a simple yet profound
              realization: getting your roof replaced should not be a daunting,
              complicated ordeal.
            </p>
            <p className="description">
              You shouldn't have to navigate the maze of high-pressure sales
              tactics or endure endless back-and-forth proposals. We believe in
              simplifying the entire process to put you in control.
            </p>
          </div>
          <div className="col-md-4 mt-2">
            <img src={ourstory} alt="Our Story" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container-fluid main-light-container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 mt-2">
            <img src={vision} alt="Our Story" className="img-fluid" />
          </div>
          <div className="col-md-5">
            <h2 className="title blue-title">Our Vision</h2>
            <p className="description desc-1 dark-font">
              Our vision is straightforward: we want to make your roof
              replacement as simple and hassle-free as possible.
            </p>
            <p className="description dark-font">
              To achieve this, we've harnessed the latest roofing technology and
              resources available in the industry. Quantum Roofing is designed
              with you in mind, allowing you to visit our website, select your
              preferences, and receive accurate pricing in a matter of moments.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid main-light-container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <h2 className="title blue-title">Our Mission</h2>
            <p className="description desc-1 dark-font">
              At Quantum Roofing, we are on a mission to redefine the way you
              experience roofing services.
            </p>
            <p className="description dark-font">
              Founded by two former insurance executives who witnessed the
              struggles homeowners faced in finding affordable roof replacement
              solutions, we embarked on this journey to eliminate the stress and
              complications associated with the process.
            </p>
          </div>

          <div className="col-md-4 mt-2">
            <img src={mission} alt="Our Story" className="img-fluid" />
          </div>
        </div>
      </div>

      <UserForm />
    </Fragment>
  );
};

export default AboutUs;
