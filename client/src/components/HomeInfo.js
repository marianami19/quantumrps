import React from "react";
import "../styles/Aboutus.scss";

const HomeInfo = () => {
    return (
        <div className="bg-dark">
             <div className='bg-light my-5 text-dark p-4 '>
                <p  className="p-5">
                    At Quantum Roofing and Professional Services, we believe that your roofing project should be straightforward, stress-free, and cost-effective. Join us in our mission to transform the industry and experience the difference today.
                </p>

                <p><em>Your Roof. Your Rules. Quantum Roofing.</em></p>
            </div>
            <h1 className="text-primary">What Sets Us Apart</h1>
            <div className="p-5">
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
           
        </div>
    );
};

export default HomeInfo;
