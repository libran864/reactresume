import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img-1.png";

const Contact = () => {
  return (
    <>
      <div className="container row">
        <div className="col-6" id="hero">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              First Name
            </label>
            <input
              type="Name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Last Name
            </label>
            <input
              type="Name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <NavLink
            type="button"
            to="/service"
            className="btn btn-outline-primary"
          >
            Success
          </NavLink>
        </div>

        <div className="col-6 header-img">
          <img src={web} className="img-fluid animated" alt="home jpg" />
        </div>
      </div>
    </>
  );
};

export default Contact;
