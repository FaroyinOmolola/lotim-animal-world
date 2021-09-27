import React from "react";
import "./admin.scss";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductInventory() {
  return (
    <div id="products" className=" admin">
      <Container className="">
        <Nav
          variant="tabs"
          className="tex-center ms-3 m-0 product-nav" //localhost:3000/admin/orders
          defaultActiveKey="/admin"
        >
          <Nav.Item>
            <LinkContainer exact to="/admin">
              <Nav.Link>Add Products</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/admin/productsInventory">
              <Nav.Link>Product Inventory</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}
export default ProductInventory;
