import React, { Fragment } from 'react';
import '../styles/Aboutus.scss';
import banner from '../assets/images/FB.jpg';

const AboutUs = () => {
  return (
    <Fragment>
      <div className="container-about">
        <h2>About Us</h2>

        <div className=" ">
          {/* Cover Image */}
          <div className="cover-image">
            <img
              src={banner}
              alt="Cover"
              className='w-100'
            />
          </div>

          {/* Content */}
          <div className="about-content text-light bg-dark">
            <div className='abh100'>
              <p>Welcome to Quantum Roofing and Professional Services!</p>

              <p>
                At Quantum Roofing, we are on a mission to redefine the way you experience roofing services. Founded by two former insurance executives who witnessed the struggles homeowners faced in finding affordable roof replacement solutions, we embarked on this journey to eliminate the stress and complications associated with the process.
              </p>
            </div>
            <div className='abh100 bg-light text-dark w-100'>
              <h1 className="text-primary">Our Story</h1>
              <p>
                The genesis of Quantum Roofing stems from a simple yet profound realization: getting your roof replaced should not be a daunting, complicated ordeal. You shouldn't have to navigate the maze of high-pressure sales tactics or endure endless back-and-forth proposals. We believe in simplifying the entire process to put you in control.
              </p>
            </div>

            <div className='abh100 '>
              <h1 className="text-primary">Our Vision</h1>
              <p>
                Our vision is straightforward: we want to make your roof replacement as simple and hassle-free as possible. To achieve this, we've harnessed the latest roofing technology and resources available in the industry. Quantum Roofing is designed with you in mind, allowing you to visit our website, select your preferences, and receive accurate pricing in a matter of moments.
              </p>
            </div>
      
            <div className='bg-light my-5 text-dark p-4 '>
           
              <p>Thank you for choosing Quantum Roofing. We look forward to serving you!</p>

            </div>
          </div>
        </div>
      </div>
    </Fragment>

  );
};

export default AboutUs;
