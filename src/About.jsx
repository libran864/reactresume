import React from "react";
import { NavLink } from "react-router-dom";
import we from "../src/images/img-3.png";

const About = () => {
  return (
    <>
      <div className="container row">
        <div className="col order-first">
          <img className="boy" src={we} alt="nice" />
        </div>

        <div className="col order-last">
          <h1 className="name" id="b">
            Parijat Mitra
          </h1>
          <p className="matter" id="c">
            Welcome to my personal portfolio web.My name is Parijat and i am a
            passionate developer. I am working as a freelancer.I give myself a
            mission to produce a creative websites and applications with
            beautiful details.I enrich the design with my own illustrations and
            designs that are created with precision and based on your desire.
          </p>
          <NavLink
            type="button"
            to="/contact"
            className="btn btn-outline-primary"
          >
            Contact
          </NavLink>
        </div>
      </div>
      <h3 id="head">What i Do</h3>
      <div className="container align-content-between" id="d">
        <div className="row">
          <div className="col">
            <h6 className="fas fa-pen-fancy">
              <i>Design</i>
              <p>
                Designing a product is my favourite activity.I like to explore
                and get inspired,but the final result of my work is a connection
                between inspiration and my ideas and imagination.
              </p>
            </h6>
          </div>
          <div className="col">
            <h6 className="fas fa-code">
              <i>Development</i>
              <p>
                When development a product, it is especially important to create
                a reusable components which results in clarity and easier
                understanding of the code.This source that i use for this
                purpose is REACT.
              </p>
            </h6>
          </div>
        </div>
      </div>
      <div className="container align-content-between" id="d">
        <div className="row">
          <div className="col">
            <h6 className="fas fa-dumpster">
              <i>Ecommerce</i>
              <p>
                For me, creating ecommerce applications is a kind of an
                extension of the presentation.However, not a presentation of a
                person in the form of a static website, but a product where i
                combine design, functionality and the ability to interact with
                the content of the application.
              </p>
            </h6>
          </div>
          <div className="col">
            <h6 className="fas fa-align-justify">
              <i> App / Portfolio</i>
              <p>
                My development beginnings lie in the creation of web portfolios.
                A portfolio website is the quickest and easiest way of
                showcasing your work as a designer or freelancer.Building an
                apps has become both challenge and joy.The diversity of
                application development mainly helps me to build up on my
                functional skills.
              </p>
            </h6>
          </div>
        </div>
      </div>
      <h3 id="head">What i Offer</h3>
      <div className="container">
        <div className="dog col-lg-4">
          <i className="fas fa-check" id="f">
            <h5 className="card-title">Design</h5>
          </i>
        </div>
        <div className="dog col-lg-4">
          <i className="fas fa-check" id="f">
            <h5 className="card-title">Ecommerce </h5>
          </i>
        </div>
        <div className="dog col-lg-4">
          <i className="fas fa-check" id="f">
            <h5 className="card-title">Application Development</h5>
          </i>
        </div>
      </div>
      <br />
    </>
  );
};

export default About;
