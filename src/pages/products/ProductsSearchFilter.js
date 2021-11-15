import React from "react";
import "./products.scss";
import { Form, InputGroup, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ProductsSearchFilter() {
  return (
    <div
      id="productPageSidebar"
      className="d-flex text-primary w-fill align-items-center"
    >
      <InputGroup className="w-fill mx-auto">
        <InputGroup.Text
          id="cityTo"
          className="px-1"
          style={{
            borderRight: "none",
            borderRadius: "30px 0 0 30px",
          }}
        >
          <Dropdown className="text-primary">
            <Dropdown.Toggle
              className="text-primary py-0"
              id="dropdown-basic"
              variant="default"
            >
              Products
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <LinkContainer to="/products">
                <Dropdown.Item eventKey="1">All</Dropdown.Item>
              </LinkContainer>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup.Text>
        <Form.Control
          type="search"
          name="search"
          id="search"
          style={{
            borderRight: "none",
            borderLeft: "none",
          }}
          className="mx-auto p-2 rounded-0 form-g2"
        />
        <InputGroup.Text
          id="cityTo"
          className="px-2 search-img text-primary"
          style={{
            borderLeft: "none",
            borderRadius: "0 30px 30px 0",
          }}
        >
          {" "}
          Search
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
}

export default ProductsSearchFilter;

// <Dropdown className="mx-3 text-primary">
//   <Dropdown.Toggle
//     id="dropdown-basic"
//     variant="default"
//     className="text-primary"
//   >
//     Filter
//   </Dropdown.Toggle>
//   <Dropdown.Menu>
//     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//     <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
