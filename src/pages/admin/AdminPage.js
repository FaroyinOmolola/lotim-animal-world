import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.scss";
import AdminLogin from "../../pages/admin/AdminLoginPage";
import Footer from "../../components/FooterComponent";
import Enquiries from "./EnquiriesPage";
import Orders from "./OrdersPage";
import Products from "../../pages/products/ProductsPage";

function Admin() {
  const { url } = useRouteMatch();

  return (
    <div id="admin-nav" className="mt-5">
      <Router>
        <Nav
          defaultActiveKey="/"
          className=" text-primary text-md-center fixed-top "
        >
          <LinkContainer to={`${url}/enquiries`}>
            <Nav.Link className="nav-link" eventKey="link-1">
              Enquiries
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${url}/orders`}>
            <Nav.Link className="nav-link" eventKey="link-2">
              Orders
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${url}/products`}>
            <Nav.Link className="nav-link" eventKey="link-3">
              Products
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/adminLogin">
            <Nav.Link className="nav-link"> Log out</Nav.Link>
          </LinkContainer>
        </Nav>

        <div>
          <Switch>
            <Route path={`${url}/enquiries`} component={Enquiries} />
            <Route path={`${url}/orders`} component={Orders} />
            <Route path={`${url}/products`} component={Products} />
            <Route path="/adminLogin">
              {" "}
              <AdminLogin />{" "}
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

// function AdminNav () {
//   return (
//     <div>

//     </div>
//   )
// }

// export default admin;

export default Admin;
