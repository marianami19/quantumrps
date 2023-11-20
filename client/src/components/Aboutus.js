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
        <div className="d-flex flex-wrap justify-content-around flex-margin px-md-5 py-3 mx-3">
          <div className="p-1">
            <h2 className="title">Our Story</h2>
            <p className="description desc-1">
              The genesis of Quantum Roofing stems from a <br className="d-none d-md-block"/>simple yet profound
              realization: getting your <br className="d-none d-md-block"/> roof replaced should not be a daunting, <br className="d-none d-md-block"/> 
              complicated ordeal.
            </p>
            <p className="description">
              You shouldn't have to navigate the maze of <br className="d-none d-md-block"/>  high-pressure sales
              tactics or endure endless  <br className="d-none d-md-block"/> back-and-forth proposals. We believe in <br className="d-none d-md-block"/> 
              simplifying the entire process to put you in <br className="d-none d-md-block"/>  control.
            </p>
          </div>
          <div className="p-1">
            <img src={ourstory} alt="Our Story" className="about-imgs" />
          </div>
        </div>
      </div>
      <div className="container-fluid main-light-container">
        <div className="d-flex flex-wrap justify-content-around flex-margin px-md-5 py-3 mx-3">
          <div className="p-1">
            <img src={vision} alt="Our Story" className="about-imgs" />
          </div>
          <div className="p-1">
            <h2 className="title blue-title">Our Vision</h2>
            <p className="description desc-1 dark-font">
              Our vision is straightforward: we want to make<br className="d-none d-md-block"/> your roof
              replacement as simple and hassle-<br className="d-none d-md-block"/>free as possible.
            </p>
            <p className="description dark-font">
              To achieve this, we've harnessed the latest<br className="d-none d-md-block"/> roofing technology and
              resources available in<br className="d-none d-md-block"/> the industry. Quantum Roofing is designed
              with<br className="d-none d-md-block"/> you in mind, allowing you to visit our website,<br className="d-none d-md-block"/> select your
              preferences, and receive accurate<br className="d-none d-md-block"/> pricing in a matter of moments.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid main-light-container">
        <div className="d-flex flex-wrap justify-content-around flex-margin px-md-5 py-3 mx-3">
          <div className="p-1">
            <h2 className="title blue-title">Our Mission</h2>
            <p className="description desc-1 dark-font">
              At Quantum Roofing, we are on a mission to<br className="d-none d-md-block"/> redefine the way you
              experience roofing<br className="d-none d-md-block"/> services.
            </p>
            <p className="description dark-font">
              Founded by two former insurance executives<br className="d-none d-md-block"/> who witnessed the
              struggles homeowners<br className="d-none d-md-block"/> faced in finding affordable roof replacement<br className="d-none d-md-block"/>
              solutions, we embarked on this journey to <br className="d-none d-md-block"/>eliminate the stress and
              complications<br className="d-none d-md-block"/> associated with the process.
            </p>
          </div>

          <div className="p-1">
            <img src={mission} alt="Our Story" className="about-imgs" />
          </div>
        </div>
      </div>

      <UserForm />
    </Fragment>
  );
};

export default AboutUs;
