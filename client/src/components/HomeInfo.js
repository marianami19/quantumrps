import React from "react";
import "../styles/HomeInfo.scss";

const HomeInfo = () => {
  return (
    <div className="">
      <div className="p-1 what-sets-us-apart ">
        <h2 className="section-title">What Sets Us Apart</h2>
        <div className="d-flex  justify-content-center flex-margin flex-wrap">
          <div className="col-md-4 col-lg-3 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  Affordable <br />
                  Options
                </h3>
                <p className="card-text">
                  We understand the  importance <br className="d-block d-lg-none"/><br className="d-none d-lg-block"/> of cost-effective solutions <br className="d-block d-lg-none"/> for
                  your<br className="d-none d-lg-block"/> roofing needs. Quantum <br className="d-block d-lg-none"/> Roofing<br className="d-none d-lg-block"/> is committed to providing <br className="d-block d-lg-none"/><br className="d-none d-lg-block"/> 
                  budget-friendly choices <br className="d-block d-lg-none"/>without <br className="d-none d-lg-block"/>compromising quality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4  col-lg-3 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  Prompt & <br />
                  Reliable
                </h3>
                <p className="card-text">
                  Time is of the essence when it <br className="d-block d-lg-none"/><br className="d-none d-lg-block"/> comes to roof replacements.
                  With<br className="d-block d-lg-none"/><br className="d-none d-lg-block"/> Quantum Roofing, you can<br className="d-none d-lg-block"/> <br className="d-block d-lg-none"/>expect swift responses and <br className="d-block d-lg-none"/><br className="d-none d-lg-block"/>
                  dependable service at every<br className="d-block d-lg-none"/><br className="d-none d-lg-block"/> stage of the process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4  col-lg-3 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  Innovative <br />
                  Approach
                </h3>
                <p className="card-text">
                  We have leveraged cutting-edge<br className="d-block d-lg-none"/><br className="d-none d-lg-block"/> technology to reinvent the <br className="d-none d-lg-block"/>
                  roofing<br className="d-block d-lg-none"/> industry. Our goal is to turn<br className="d-block d-lg-none"/> <br className="d-none d-lg-block"/>the traditional, 
                  cumbersome<br className="d-none d-lg-block"/><br className="d-block d-lg-none"/> process on its head and replace<br className="d-none d-lg-block"/> it <br className="d-block d-lg-none"/>with a seamless 
                  and customer-<br className="d-none d-lg-block"/><br className="d-block d-lg-none"/>centric experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
