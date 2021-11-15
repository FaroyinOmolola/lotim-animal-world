import React from "react";
import "./admin.scss";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { adminSignout } from "../../actions/AdminLoginActions";
import { useDispatch } from "react-redux";

const AdminNav = (props) => {
  let dispatch = useDispatch();

  const logOut = () => {
    dispatch(adminSignout());
  };
  return (
    <div class="">
      <Nav
        defaultActiveKey=""
        className="admin-nav bg-primary pt-4 text-white text-md-center fixed-left flex-column "
      >
        <LinkContainer exact to="/admin">
          <Nav.Link className="nav-link text-white" eventKey="link-1">
            Products
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/enquiries">
          <Nav.Link className="nav-link text-white" eventKey="link-2">
            Enquiries
          </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/appointment">
          <Nav.Link className="nav-link text-white" eventKey="link-3">
            Appointment
          </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/orders">
          <Nav.Link className="nav-link text-white" eventKey="link-4">
            Orders
          </Nav.Link>
        </LinkContainer>

        <LinkContainer
          to="/adminLogin"
          className="mb-3"
          style={{ position: "fixed", bottom: "0" }}
          onClick={logOut}
        >
          <Nav.Link className="nav-link text-white"> Log out</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default AdminNav;
