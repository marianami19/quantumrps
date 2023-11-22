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
                  We understand the importance <br className="d-none d-md-block"/> of cost-effective solutions for
                  your<br className="d-none d-md-block"/> roofing needs. Quantum Roofing<br className="d-none d-md-block"/> is committed to providing<br className="d-none d-md-block"/>
                  budget-friendly choices without <br className="d-none d-md-block"/>compromising quality.
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
                  Time is of the essence when it<br className="d-none d-md-block"/> comes to roof replacements.
                  With<br className="d-none d-md-block"/> Quantum Roofing, you can<br className="d-none d-md-block"/> expect swift responses and<br className="d-none d-md-block"/>
                  dependable service at every<br className="d-none d-md-block"/> stage of the process.
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
                  We have leveraged cutting-edge<br className="d-none d-md-block"/> technology to reinvent the<br className="d-none d-md-block"/>
                  roofing industry. Our goal is to turn <br className="d-none d-md-block"/>the traditional,
                  cumbersome<br className="d-none d-md-block"/>process on its head and replace<br className="d-none d-md-block"/> it with a seamless
                  and customer-<br className="d-none d-md-block"/>centric experience.
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
