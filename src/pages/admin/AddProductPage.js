import React from "react";
import "./admin.scss";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./AddProduct";

function AddProductPage() {
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
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/admin/addProducts">
              <Nav.Link>Add Product</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Container>
      <AddProduct />
    </div>
  );
}
export default AddProductPage;
