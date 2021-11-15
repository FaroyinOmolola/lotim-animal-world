import React, { useEffect } from "react";
import "./admin.scss";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import {
  getEnquiryAction,
  getBookingAction,
} from "../../actions/ContactUsAction";
import { adminGetProductAction } from "../../actions/AdminProductsActions";

import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Products";

function Admin(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnquiryAction());
    dispatch(getBookingAction());
    dispatch(adminGetProductAction());
  }, [dispatch]);

  return (
    <div id="products" className=" admin">
      <Container className="mb-3">
        <Nav
          variant="tabs"
          className="tex-center product-nav"
          defaultActiveKey="/admin"
        >
          <Nav.Item>
            <LinkContainer exact to="/admin">
              <Nav.Link eventKey="link-1">Products</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/admin/addProducts">
              <Nav.Link eventKey="link-2 ">Add Product</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Container>
      <Product />
    </div>
  );
}
export default Admin;
