import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="shadow rounded mx-0 bg-body"
    >
      <LinkContainer to="/">
        <Navbar.Brand className="text-primary">
          <img
            alt=""
            src="/images/transparent-logo.png"
            width="110"
            height="45"
            className="d-inline-block align-top logo"
          />{" "}
          Lotim Animal World
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle className="navbar-primary" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="flex-grow-0 pb-2 text-center text-dark"
      >
        <Nav className="nav">
          <LinkContainer exact={true} to="/">
            <Nav.Link className="nav-link">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link className="nav-link">Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="nav-link">About</Nav.Link>
          </LinkContainer>
        </Nav>
        <div>
          <LinkContainer to="/contact">
            <Button type="button" className=" mx-3 mt-3 px-4 py-2 rounded-pill">
              Book Appointment
            </Button>
          </LinkContainer>
          <LinkContainer to="/products">
            <Button type="button" className=" mx-3 mt-3 px-4 py-2 rounded-pill">
              Order Product
            </Button>
          </LinkContainer>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
