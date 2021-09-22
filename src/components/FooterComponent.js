import React from "react";
import { Row, Container, Nav, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";
import { LinkContainer } from "react-router-bootstrap";

function Footer() {
  return (
    <div className="footer text-white">
      <Container>
        <Row className="p-4 footer-sm">
          <Col xs={4}>
            <LinkContainer exact={true} to="/">
              <Nav.Link className="nav-link footer-link text-white">
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link className="nav-link footer-link text-white ">
                Products
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link footer-link text-white">
                About
              </Nav.Link>
            </LinkContainer>
          </Col>
          <Col xs={8}>
            <p className="px-3">Contact</p>
            <p className="mb-3">
              <a
                className="link-unstyled"
                href="mailto:lotimanimalworld@gmail.com"
              >
                <button className="btn contact-sm btn-primary mx-2 pb-2 py-1 rounded-circle ">
                  <img
                    className="icon"
                    src="/images/outline_mail_white_24dp.png"
                    alt="mail"
                  />
                </button>
                lotimanimalworld@gmail.com
              </a>
            </p>
            <p className="mb-3">
              <a className="link-unstyled" href="tel:07065363655">
                <button className="btn contact-sm btn-primary mx-2 pb-2 py-1 rounded-circle">
                  <img
                    className="icon"
                    src="/images/outline_local_phone_white_24dp.png"
                    alt="call"
                  />
                </button>
                07065363655
              </a>
            </p>
            <p>
              <a
                className="btn contact-sm btn-primary m-2 p-2 py-1 rounded-circle"
                href="https://twitter.com/lotimanimalW"
              >
                <img
                  className="icon"
                  src="/images/icons8-twitter-64.png"
                  alt="twitter"
                />
              </a>
              <a
                className="btn contact-sm btn-primary m-2 p-2 py-1 rounded-circle"
                href="https://www.facebook.com/lotimanimalworld"
              >
                <img
                  className="icon"
                  src="/images/icons8-facebook-f-50 (1).png"
                  alt="facebook"
                />
              </a>
              <a
                className="btn contact-sm btn-primary m-2 p-2 py-1 rounded-circle"
                href="https://www.instagram.com/lotimanimalworld"
              >
                <img
                  className="icon"
                  src="/images/icons8-instagram-logo-64.png"
                  alt="instagram"
                />
              </a>
              <a
                className="btn contact-sm btn-primary m-2 p-2 py-1 rounded-circle"
                href="https://api.whatsapp.com/send?phone=07065363655"
              >
                <img
                  className="icon"
                  src="/images/icons8-whatsapp-24.png"
                  alt="whatsapp"
                />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
