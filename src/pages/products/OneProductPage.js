import React, { useEffect, useState } from "react";
import "./products.scss";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Loading from "../../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { getOneProductAction } from "../../actions/ClientProductActions";
import { addToCartAction } from "../../actions/CartAction";
import { useHistory } from "react-router-dom";

function OneProduct(props) {
	const product = useSelector((state) => state.oneProduct);
	const { loading, oneProduct } = product;
	console.log(oneProduct);
	const productId = props.match.params?.id;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getOneProductAction(productId));
	}, [dispatch, productId]);

	const [qty, setQty] = useState(1);
	const [variety, setVariety] = useState(0);

	let history = useHistory();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	return (
		<div id="one-product-page" className="pt-2 mb-0">
			{loading ? (
				<Loading />
			) : (
				<div className="one-product mb-0 product">
					<Button
						variant="default"
						className="bg-light text-primary ms-2"
						onClick={() => history.push("/products")}
					>
						Back to Products
					</Button>
					<Container className=" mt-3 bg-white">
						<Row className="p-2">
							<Col xs={12} md={4} className="p-2">
								<img
									className="img-fluid img-thumbnail mx-auto"
									src="/images/drugs edited.jpg"
									alt={oneProduct?.name}
								/>
							</Col>
							<Col xs={12} md={4} className="p-2">
								<ul className="list-unstyled px-2 fs-4">
									<li>
										<p>{oneProduct?.name}</p>
									</li>
									<li>
										Price: <span className="naira">N</span>{" "}
										{oneProduct?.varieties[variety]?.price}
									</li>
									<li>
										<span className="strike text-warning">
											<span className="naira">N</span>{" "}
											{Math.ceil(
												(oneProduct?.varieties[variety]
													?.price *
													(oneProduct?.varieties[
														variety
													]?.discount *
														100)) /
													100 +
													oneProduct?.varieties[
														variety
													]?.price
											)}{" "}
										</span>
									</li>
								</ul>
							</Col>

							<Col xs={12} md={4} className="p-2">
								<Card>
									<Card.Header className="d-flex justify-content-between">
										<Card.Text className="mb-0">
											Price:{" "}
										</Card.Text>
										<Card.Text>
											<span className="naira">N</span>{" "}
											{oneProduct?.varieties[variety]
												?.price * qty}
										</Card.Text>
									</Card.Header>
									<Card.Body>
										<div className="d-flex justify-content-between">
											<Card.Text>Status</Card.Text>
											<Card.Text>
												{oneProduct?.varieties[variety]
													?.quantity > 0 ? (
													<span className="text-primary">
														In Stock
													</span>
												) : (
													<span className="text-danger">
														Out of Stock
													</span>
												)}
											</Card.Text>
										</div>
										{oneProduct?.varieties[variety]
											?.quantity > 0 && (
											<>
												<Row className="mb-3">
													<Col>Quantity</Col>
													<Col className="d-flex justify-content-end">
														<Button
															type="button"
															className="rounded-circle qty-btn"
															onClick={(e) =>
																setQty((prev) =>
																	prev >= 2
																		? prev -
																		  1
																		: 1
																)
															}
														>
															-
														</Button>
														<Form.Control
															type="text"
															required
															readOnly
															pattern="[0-9]{1,}"
															className="mx-2 qty-field"
															value={qty}
														/>
														<Button
															type="button"
															className="rounded-circle qty-btn"
															onClick={(e) => {
																setQty(
																	(prev) => {
																		if (
																			prev <
																			oneProduct
																				?.varieties[
																				variety
																			]
																				?.quantity
																		) {
																			return (
																				prev +
																				1
																			);
																		} else {
																			return oneProduct
																				?.varieties[
																				variety
																			]
																				?.quantity;
																		}
																	}
																);
															}}
														>
															+
														</Button>
													</Col>
												</Row>
												<Button
													className="w-100"
													onClick={() =>
														dispatch(
															addToCartAction({
																productId,
																qty,
																variety,
															})
														)
													}
												>
													Add to Cart
												</Button>
												{cartItems?.length > 0 && (
													<Button
														className="w-100 my-3"
														onClick={() =>
															history.push(
																"/products/cart"
															)
														}
													>
														View Cart{" "}
														<img
															src="/images/outline_shopping_cart_white_24dp.png"
															alt=""
															className="mx-2"
															style={{
																width: "27px",
															}}
														/>
													</Button>
												)}
											</>
										)}
									</Card.Body>
								</Card>
							</Col>
						</Row>
						{oneProduct?.varieties.length > 1 && (
							<Row className="my-3 px-3 mx-auto">
								<p className="border-bottom text-center">
									VARIATIONS AVAILABLE (
									{oneProduct?.varieties[0]?.key})
								</p>
								{oneProduct?.varieties?.map((elm, id) => (
									/*<Col  className=" mx-auto">*/
									<Card
										key={elm._id}
										style={{
											width: "7rem",
											cursor: "pointer",
										}}
										className=" mb-2 border-0 "
										onClick={() =>
											setVariety((prev) => (prev = id))
										}
									>
										<div className="mx-auto">
											<Card.Img
												variant="top"
												src="/images/drugs edited.jpg"
												alt={oneProduct.name}
												style={{
													width: "100%",
													height: "auto",
												}}
											/>
										</div>
										<Card.Footer className="text-center bg-white ">
											<Card.Text>{elm.value}</Card.Text>
										</Card.Footer>
									</Card>
								))}
							</Row>
						)}
					</Container>

					<Container className="mb-3">
						<Row>
							<Col className=" m-3 ms-0 p-2 bg-white">
								<p className="border-bottom fs-5 text-center">
									Product Description
								</p>
								<div className="px-2">
									{" "}
									{oneProduct?.description}
								</div>
							</Col>
							<Col className=" m-3 me-0 p-2 bg-white">
								<p className="border-bottom fs-5 text-center">
									Key Features
								</p>
								<div>
									<ul>
										{oneProduct?.features.map((elm) => (
											<li key={elm._id}>
												{elm.key} : {elm.value}
											</li>
										))}
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			)}
		</div>
	);
}
export default OneProduct;
