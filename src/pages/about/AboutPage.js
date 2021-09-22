import React from "react";
import "../../index.scss";
import "./about.scss";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div id="about" className="">
      <Container className="about-container lh-lg">
        <h1 className="text-center bold mt-sm-4 pt-sm-3 pt-md-0 pt-lg-3 text-primary">
          About Us
        </h1>
        <p className="m-md-4 mx-sm-3 ">
          Lotim Animal World, is a leading Veterinary Drug Store and Animal
          Health care facility. Here, we understand the deep connection you
          share with your animal companion and the desire to maximize profit in
          your livestock and poultry production. We know that your pet is indeed
          a family member. Just like you, we are pet lovers, pet owners,
          breeders and farmers. We know first hand this amazing journey, with
          all of its ups and downs, joys and challenges. Therefore we are here
          to provide you with all the help you need to care for pet and profit
          in your livestock and poultry business.
        </p>
      </Container>
      <Container fluid className="my-md-5 my-sm-4 ">
        <div className="w-50 mx-5">
          <img
            className="w-100 d-block"
            src="/images/our values.jpeg"
            alt="our values"
          />
        </div>
        <Row className="my-5 mx-sm-3 mx-lg-5">
          <Col
            xs={12}
            md={6}
            className=" value my-4 mx-2 pb-2 border-2 border-bottom  border-primary "
          >
            <h4 className="d-inline-block value-heading px-4 py-2 rounded-end rounded-pill">
              Personal Touch
            </h4>
            <div className="py-2 px-3 lh-lg">
              We like to speak directly to our clients, just as we know pet
              owners want to hear from their vets. If you book an appointment,
              you will speak to one of our doctors, and your feedback will
              always be heard and appreciated.
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className=" value my-4 mx-2 pb-2 border-2 border-bottom  border-primary "
          >
            <h4 className="d-inline-block value-heading px-4 py-2 rounded-end rounded-pill">
              Reliability
            </h4>
            <div className="py-2 px-3 lh-lg">
              We aim for our services to be running 6/7 days, allowing for
              access to services and products most days of the week. Our team is
              fully at your service, so we’re always one quick call away.
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="value my-4 mx-2 pb-2 border-2 border-bottom  border-primary "
          >
            <h4 className="d-inline-block value-heading px-4 py-2 rounded-end rounded-pill">
              Innovation
            </h4>
            <div className="py-2 px-3 lh-lg">
              We harness the latest innovations in animal health care and
              digital technologies to ensure that our patients benefits from
              state of the art health solutions at an affordable price.
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className=" value my-4 mx-2  pb-2 border-2 border-bottom  border-primary "
          >
            <h4 className="d-inline-block value-heading px-4 py-2 rounded-end rounded-pill">
              Delivery
            </h4>
            <div className="py-2 px-3 lh-lg">
              We're a small but very fast growing company, this allows us to be
              flexible and fast at delivering and improving features. We are
              always happy to improve the system to meet your needs.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
