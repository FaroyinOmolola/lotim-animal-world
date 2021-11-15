import React from "react";

import "./admin.scss";
import { Container, Table, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Orders = (props) => {
  return (
    <div id="order" className="admin">
      <Container className="pt-3">
        <Table bordered>
          <thead className="bg-secondary text-white ">
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Shipping Method</th>
              <th>Payment Status</th>

              <th>Order Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01234</td>
              <td>Dog Food</td>
              <td>Jojo</td>
              <td>2</td>
              <td>2400</td>
              <td>Delivery</td>
              <td>Paid</td>

              <td>
                <Button>Active</Button>
              </td>
              <td>
                <Button variant="warning">Closed</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Orders;
