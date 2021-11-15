import React from "react";
import "./products.scss";
import { Accordion, Form } from "react-bootstrap";

function Filter() {
  return (
    <div id="productPage" className="product mb-3 ">
      <div className="border p-2">
        <h2 className="text-center border-bottom pb-2">CATEGORY</h2>
        <Accordion>
          <Accordion.Item eventKey="0" className="border-0">
            <Accordion.Header>
              {" "}
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Birds" />
              </Form.Group>
            </Accordion.Header>
            <Accordion.Body className="pb-0">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Bird Food" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Bird Cage" />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="border-0">
            <Accordion.Header>
              {" "}
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  className="rounded-0"
                  label="Birds"
                />
              </Form.Group>
            </Accordion.Header>
            <Accordion.Body className="pb-0"></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Filter;
