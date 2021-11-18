import React, { useEffect } from "react";
import "./products.scss";
import { Row, Col, Card, Badge, Button } from "react-bootstrap";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsAction } from "../../actions/ClientProductActions";
import Loading from "../../components/Loading";
import { addToCartAction } from "../../actions/CartAction";

function ProductsPage() {
  const productList = useSelector((state) => state.listProduct);
  const { loading, listProduct } = productList;

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <div id="productPage" className="product">
      {loading ? (
        <Loading />
      ) : (
        <Row className="px-md-3  px-0 py-md-1 pt-4 pb-3">
          <Col xs={12} md={4} lg={3} className="filter-md">
            <Filter  />
          </Col>
          <Col xs={12} md={8} lg={9}>
            <Row className="px-md-3 px-1 pt-4">
              {listProduct?.products.map((product) => (
                <Col key={product?._id} className="pt-2  mb-3">
                  <Card
                    className="p-1 mx-md-auto product-card"
                  >
                    <Link
                      to={`/products/product/${product?._id}`}
                      className=" text-decoration-none text-dark h-67"
                    >
                      <Badge bg="primary" className="w-max-content">
                        -{product.varieties[0].discount * 100}%
                      </Badge>
                      <div className="mx-auto product-card-img">
                        <Card.Img
                          variant="top"
                          src="/images/drugs edited.jpg"
                          alt={product.name}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </Link>
                    <Card.Body className="px-2 px-md-3">
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text className=" m-0">
                        <span className="fw-bold fs-6">
                          <span className="naira">N</span>{" "}
                          {product.varieties[0].price}{" "}
                        </span>
                        <span className="strike ms-2 text-warning">
                          <span className="naira">N</span>{" "}
                          {Math.ceil(
                            (product.varieties[0].price *
                              (product.varieties[0].discount * 100)) /
                              100 +
                              product.varieties[0].price
                          )}{" "}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        <Button
                          type="button"
                          variant="primary"
                          className="mt-2 w-100"
                          onClick={() => {
                            // let productId = product?._id;
                            // let qty = 1;
                            // let variety = 0;
                            dispatch(
                              addToCartAction({ productId: product?._id, qty: 1, variety: 0 })
                            );
                          }}
                        >
                          <span className="d-none d-md-inline">ADD TO CART</span>
                          <img
                            src="/images/outline_add_shopping_cart_white_24dp.png"
                            alt=""
                            style={{
                              width: "22px",
                            }}
                          />
                        </Button>{" "}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductsPage;
