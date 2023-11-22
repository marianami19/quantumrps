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
                  We understand the <br className="d-block d-lg-none"/> importance <br className="d-none d-lg-block"/> of cost-effective solutions <br className="d-block d-lg-none"/> for
                  your<br className="d-none d-lg-block"/> roofing needs. Quantum <br className="d-block d-lg-none"/> Roofing<br className="d-none d-lg-block"/> is committed  <br className="d-block d-lg-none"/>to providing<br className="d-none d-lg-block"/>
                  budget-friendly  <br className="d-block d-lg-none"/>choices without <br className="d-none d-lg-block"/>compromising quality.
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
                  Time is of the essence <br className="d-block d-lg-none"/> when it<br className="d-none d-lg-block"/> comes to roof  <br className="d-block d-lg-none"/>replacements.
                  With<br className="d-none d-lg-block"/> Quantum Roofing,  <br className="d-block d-lg-none"/>you can<br className="d-none d-lg-block"/> expect swift  <br className="d-block d-lg-none"/>responses and<br className="d-none d-lg-block"/>
                  dependable service <br className="d-block d-lg-none"/> at every<br className="d-none d-lg-block"/> stage of the process.
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
                  We have leveraged  <br className="d-block d-lg-none"/>cutting-edge<br className="d-none d-lg-block"/> technology to  <br className="d-block d-lg-none"/>reinvent the<br className="d-none d-lg-block"/>
                  roofing  <br className="d-block d-lg-none"/>industry. Our goal is to  <br className="d-block d-lg-none"/>turn <br className="d-none d-lg-block"/>the traditional, <br className="d-block d-lg-none"/>
                  cumbersome<br className="d-none d-lg-block"/>process on its head <br className="d-block d-lg-none"/> and replace<br className="d-none d-lg-block"/> it with a seamless <br className="d-block d-lg-none"/>
                  and customer-<br className="d-none d-lg-block"/>centric experience.
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
