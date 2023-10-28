import React from "react";
import "../styles/HomeInfo.scss";

const HomeInfo = () => {
    return (
        <div className="">

       <div className="row what-sets-us-apart ">
        <div className="container">
       <h2 className="section-title">What Sets Us Apart</h2>
       <div className="d-flex  justify-content-center flex-margin">
       <div className="">
         <div className="card">
           <div className="card-body">
             <h5 className="card-title">Affordable Options</h5>
             <p className="card-text">
               We understand the importance of cost-effective solutions for your roofing needs. Quantum Roofing is committed to providing budget-friendly choices without compromising quality.
             </p>
           </div>
         </div>
       </div>
       <div className="">
         <div className="card">
           <div className="card-body">
             <h5 className="card-title">Prompt & Reliable</h5>
             <p className="card-text">
               Time is of the essence when it comes to roof replacements. With Quantum Roofing, you can expect swift responses and dependable service at every stage of the process.
             </p>
           </div>
         </div>
       </div>
       <div className="">
         <div className="card">
           <div className="card-body">
             <h5 className="card-title">Innovative Approach</h5>
             <p className="card-text">
               We have leveraged cutting-edge technology to reinvent the roofing industry. Our goal is to turn the traditional, cumbersome process on its head and replace it with a seamless and customer-centric experience.
             </p>
           </div>
         </div>
       </div>
       </div>
     </div>
     </div>
     </div>
    );
};

export default HomeInfo;
