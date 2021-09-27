import React from "react";
import "./admin.scss";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminNav = (props) => {
  return (
    <div class="">
      <Nav
        defaultActiveKey=""
        className="admin-nav bg-primary pt-4 text-white ps-2 pe-3 text-md-center fixed-left flex-column "
      >
        <LinkContainer exact to="/admin">
          <Nav.Link className="nav-link text-white" eventKey="link-3">
            Products
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/enquiries">
          <Nav.Link className="nav-link text-white" eventKey="link-1">
            Enquiries
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/orders">
          <Nav.Link className="nav-link text-white" eventKey="link-2">
            Orders
          </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/adminLogin">
          <Nav.Link className="nav-link text-white"> Log out</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default AdminNav;
