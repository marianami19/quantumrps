import React, { Fragment } from "react";
import "../styles/UserForm.scss";

function UserForm() {
  return (
    <Fragment>
      <div className="container-fluid bg-image">
        <div className="blurry-bg"></div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 form-container">
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input type="tel" name="phone" className="form-control" />
              </div>
              <div className="form-group">
                <label>Square Footage:</label>
                <input
                  type="number"
                  name="squareFootage"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UserForm;
