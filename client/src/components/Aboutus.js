import React, { Fragment } from 'react';
import '../styles/Aboutus.scss';
import banner from '../assets/images/FB.jpg';
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <Fragment>
      <Header />
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
            <h1 className="text-primary">What Sets Us Apart</h1>

            <div className="">
              <div className="">
                <div className='acard  text-dark'>
                  <h5 className="text-primary">Affordable Options</h5>
                  <p>
                    We understand the importance of cost-effective solutions for your roofing needs. Quantum Roofing is committed to providing budget-friendly choices without compromising quality.
                  </p>
                </div>
              </div>

              <div className="">
                <div className='acard  text-dark'>
                  <h5 className="text-primary">Prompt & Reliable</h5>
                  <p>
                    Time is of the essence when it comes to roof replacements. With Quantum Roofing, you can expect swift responses and dependable service at every stage of the process.
                  </p>
                </div>
              </div>

              <div className="">
                <div className='acard  text-dark'>
                  <h5 className="text-primary">Innovative Approach</h5>
                  <p>
                    We have leveraged cutting-edge technology to reinvent the roofing industry. Our goal is to turn the traditional, cumbersome process on its head and replace it with a seamless and customer-centric experience.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-light my-5 text-dark p-4 '>
              <p >
                At Quantum Roofing and Professional Services, we believe that your roofing project should be straightforward, stress-free, and cost-effective. Join us in our mission to transform the industry and experience the difference today.
              </p>

              <p>Thank you for choosing Quantum Roofing. We look forward to serving you!</p>

              <p><em>Your Roof. Your Rules. Quantum Roofing.</em></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>

  );
};

export default AboutUs;
