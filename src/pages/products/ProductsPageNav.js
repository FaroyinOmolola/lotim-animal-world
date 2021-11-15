import React, { useState } from "react";
import ProductsSearchFilter from "./ProductsSearchFilter";
import {
  Navbar,
  Nav,
  Dropdown,
  NavItem,
  NavLink,
  Button,
  Badge,
  Modal,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signoutAction } from "../../actions/UserAction";

function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [signOut, setSignOut] = useState(false);

  const handleClose = () => setSignOut(false);
  const handleShow = () => setSignOut(true);

  const handleSignOut = () => {
    setSignOut((prev) => (prev = false));
    dispatch(signoutAction());
    history.push("/products");
  };

  let history = useHistory();
  let dispatch = useDispatch();

  return (
    <div className="header">
      <header>
        <Navbar
          collapseOnSelect
          expand="md"
          fixed="top"
          className="px-3 py-2 bg-white shadow-sm "
        >
          <LinkContainer exact to="/">
            <Navbar.Brand>
              <img
                alt=""
                src="/images/transparent-logo.png"
                width="110"
                height="45"
                className="d-inline-block align-top logo"
              />
            </Navbar.Brand>
          </LinkContainer>

          <ProductsSearchFilter />

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="pe-3 text-primary" variant="primary">
              <LinkContainer to="/products/cart" className="mx-3">
                <Nav.Link className="text-primary w-max">
                  <span className="d-none d-md-inline">Cart </span>
                  <span>
                    {cartItems?.length > 0 && (
                      <Badge bg="primary" className="cart-badge rounded-circle">
                        {cartItems?.length}
                      </Badge>
                    )}
                    <img
                      src="/images/outline_shopping_cart_black_24dp.png"
                      alt=""
                      style={{ width: "27px" }}
                    />
                  </span>
                </Nav.Link>
              </LinkContainer>
              <Dropdown as={NavItem} className="pe-3" variant="primary">
                <Dropdown.Toggle as={NavLink} className="text-primary">
                  <span className="d-none d-md-inline">
                    {userInfo ? userInfo?.data?.user?.firstName : "Account"}
                  </span>
                  <img
                    src={
                      userInfo ? "/images/user-signin.png" : "/images/user.png"
                    }
                    alt=""
                    className="ps-1"
                    style={{
                      width: "30px",
                    }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {userInfo ? (
                    <>
                      <Dropdown.Item>
                        <Button onClick={handleShow}>SIGN OUT</Button>
                      </Dropdown.Item>
                    </>
                  ) : (
                    <Dropdown.Item>
                      <Button onClick={() => history.push("/user/signin")}>
                        SIGN IN
                      </Button>
                    </Dropdown.Item>
                  )}
                  <Dropdown.Divider />
                  <LinkContainer to="/user">
                    <Dropdown.Item>My Dashboard</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/user/order">
                    <Dropdown.Item>Orders</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Dropdown.Item>Saved Items</Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      {signOut && (
        <Modal show={true} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Sign Out?</Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSignOut}>
              Sign Out
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Header;
