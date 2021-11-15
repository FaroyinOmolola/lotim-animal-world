import React from "react";
import { Button, Card, Col, Row, Container, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../../components/CheckoutSteps";
import Loading from "../../components/Loading";
import { createOrderAction } from "../../actions/OrderAction";
// import { ORDER_CREATE_RESET } from "../../constants/OrderConstants";

function PlaceOrder(props) {
	const cart = useSelector((state) => state.cart);
	const { cartItems, shippingDetails, payment } = cart;
	if (!cart.payment) {
		props.history.push("./payment");
	}

	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo } = userRegister;

	const orderCreated = useSelector((state) => state?.orderCreated);
	const { loading } = orderCreated;

	const dispatch = useDispatch();
	const placeOrderHandler = () => {
		dispatch(
			createOrderAction({
				paid: payment.paid,
				delivery: shippingDetails.delivery,
				deliveryAddress: shippingDetails.deliveryAddress,
				primaryAddress: shippingDetails.primaryAddress,
				paymentReference: payment.paymentReference
					? payment.paymentReference
					: undefined,
				products: cartItems.map((value) => {
					return {
						id: value.product,
						quantity: value.qty,
						variation: value.variety,
					};
				}),
			})
		);
		props.history.push(`/user/order`);
	};

	return (
		<div className="one-product mb-0 product">
			{loading ? (
				<Loading />
			) : (
				<Container className=" my-3 py-3 bg-white">
					<CheckoutSteps step1 step2 step3 step4 />

					<Row>
						<Col sm={8}>
							<ul className="p-3">
								<li className="list-unstyled mb-3">
									<Card>
										<Card.Header>Shipping</Card.Header>
										<Card.Body>
											<Card.Text>
												<strong>Name: </strong>
												{userInfo?.firstName} {userInfo?.lastName}
											</Card.Text>
											<Card.Text>
												<strong>Delivery Methode: </strong>
												{shippingDetails?.delivery ? "Delivery" : "Pick up"}
											</Card.Text>
											{shippingDetails?.delivery && (
												<Card.Text>
													<strong>Address: </strong>
													{shippingDetails?.deliveryAddress}
												</Card.Text>
											)}
										</Card.Body>
									</Card>
								</li>
								<li className="list-unstyled mb-3">
									<Card>
										<Card.Header>Payment</Card.Header>
										<Card.Body>
											<Card.Text>
												<strong>Method: </strong>
												{payment?.paymentMethod}
											</Card.Text>
											<Card.Text
												className={
													payment?.paid ? "text-success" : "text-warning"
												}
											>
												<strong>Status: </strong>
												{payment?.paid ? "PAID" : "UNPAID"}
											</Card.Text>
											{payment?.paid && (
												<Card.Text className="text-primary">
													<strong>Payment Reference: </strong>
													{payment?.paymentReference}
												</Card.Text>
											)}
										</Card.Body>
									</Card>
								</li>
								<li className="list-unstyled mb-3">
									<Card>
										<Card.Header>Ordered Items</Card.Header>
										<Card.Body>
											<Card.Text>
												{cartItems.length === 0 ? (
													<Alert variant="warning" className="text-center fs-5">
														No item added to cart!{" "}
														<Link
															to="/products"
															className="text-decoration-none text-warning"
														>
															Go shopping!
														</Link>
													</Alert>
												) : (
													<ul className="p-0">
														<Row className="mb-2 fw-bold">
															<Col></Col>
															<Col></Col>
															<Col>Item(s)</Col>
															<Col>Unit Price</Col>
															<Col>Total Price</Col>
														</Row>
														{cartItems.map((item) => (
															<>
																<li
																	key={item.product}
																	className="list-unstyled "
																>
																	<Row className="p-0">
																		<Col className="my-2">
																			<img
																				style={{
																					maxWidth: "5rem",
																					width: "100%",
																				}}
																				src="/images/drugs edited.jpg"
																				alt={item.name}
																				className="img-fluid img-thumbnail"
																			/>
																		</Col>
																		<Col className="my-2">
																			<small>
																				<Link
																					to={`/products/product/${item.product}`}
																					className="text-decoration-none"
																				>
																					{item.name}
																				</Link>
																			</small>
																		</Col>

																		<Col>
																			<small>{item.qty}</small>
																		</Col>
																		<Col>
																			<small>
																				{" "}
																				{item.varietyDetails.price}
																			</small>
																		</Col>
																		<Col>
																			<small>
																				{" "}
																				{item.varietyDetails.price * item.qty}
																			</small>
																		</Col>
																	</Row>
																</li>
															</>
														))}
													</ul>
												)}
											</Card.Text>
										</Card.Body>
									</Card>
								</li>
							</ul>
						</Col>
						<Col sm={4}>
							<ul className="p-3">
								<li className="list-unstyled mb-3">
									<Card className="mb-3">
										<Card.Header>Order Summary</Card.Header>
										<Card.Body>
											<Card.Text>
												<Row>
													<Col>Items price</Col>
													<Col>
														<small>
															<span className="naira">N</span>{" "}
															{cart?.itemsPrice?.toFixed(2)}
														</small>
													</Col>
												</Row>
											</Card.Text>
											<Card.Text>
												<Row>
													<Col>Shipping price</Col>
													<Col>
														<small>
															<span className="naira">N</span>{" "}
															{cart?.shippingPrice?.toFixed(2)}
														</small>
													</Col>
												</Row>
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<Row>
												<Col>
													{" "}
													<strong>Total</strong>
												</Col>
												<Col>
													<strong>
														<small>
															<span className="naira">N</span>{" "}
															{cart?.totalPrice?.toFixed(2)}
														</small>
													</strong>
												</Col>
											</Row>
										</Card.Footer>
									</Card>
								</li>
								<li className="list-unstyled mb-3">
									<Button
										type="button"
										disabled={cartItems?.length < 1}
										onClick={placeOrderHandler}
										className="w-100"
									>
										Place Order
									</Button>
								</li>
							</ul>

							{}
						</Col>
					</Row>
				</Container>
			)}
		</div>
	);
}

export default PlaceOrder;
