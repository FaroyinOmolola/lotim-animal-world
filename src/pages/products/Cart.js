import React from "react";
import "./products.scss";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	Alert,
	Form,
} from "react-bootstrap";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCartAction } from "../../actions/CartAction";
import { addToCartAction } from "../../actions/CartAction";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart(props) {
	const cart = useSelector((state) => state.cart);
	let { cartItems, loading } = cart;

	const dispatch = useDispatch();

	return (
		<div className="">
			<div id="one-product-page" className="pt-2 mb-0">
				{loading ? (
					<Loading />
				) : (
					<div className="one-product mb-0 product">
						<Container className=" my-3 py-3 bg-white">
							{cartItems.length === 0 ? (
								<Alert
									variant="warning"
									className="text-center fs-5"
								>
									No item added to cart!{" "}
									<Link
										to="/products"
										className="text-decoration-none text-warning"
									>
										Go shopping!
									</Link>
								</Alert>
							) : (
								<>
									<Row>
										<Col sm={8}>
											<ul>
												{cartItems?.map((item, i) => {
													return (
														<li
															key={item.variety}
															className="list-unstyled "
														>
															<Row>
																<Col className="my-2">
																	<img
																		style={{
																			maxWidth:
																				"5rem",
																			width: "100%",
																		}}
																		src="/images/drugs edited.jpg"
																		alt={
																			item.name
																		}
																		className="img-fluid img-thumbnail"
																	/>
																</Col>
																<Col className="my-2">
																	<Link
																		to={`/products/product/${item.product}`}
																		className="text-decoration-none"
																	>
																		{
																			item.name
																		}
																	</Link>
																</Col>
																<Col className="my-2">
																	<Row className="mb-3">
																		<Col className="d-flex justify-content-end">
																			{/*	<p>Quantity: {item.qty}</p>*/}
																			<Button
																				type="button"
																				className="rounded-circle qty-btn"
																				disabled={
																					item.qty ===
																					1
																				}
																				onClick={() => {
																					if (
																						item.qty >
																						1
																					) {
																						return item.qty--;
																					}
																					let productId =
																						item.product;
																					let qty =
																						item.qty;
																					let variety =
																						item.varietyIndex;
																					dispatch(
																						addToCartAction(
																							{
																								productId,
																								qty,
																								variety,
																							}
																						)
																					);
																					return 1;
																				}}
																			>
																				-
																			</Button>
																			<Form.Control
																				type="text"
																				required
																				pattern="[0-9]{1,}"
																				className="mx-2 qty-field"
																				value={
																					item.qty
																				}
																				readOnly
																			/>
																			<Button
																				type="button"
																				className="rounded-circle qty-btn"
																				disabled={
																					item.qty ===
																					item
																						.varietyDetails
																						.quantity
																				}
																				onClick={() => {
																					item.qty++;
																					let productId =
																						item.product;
																					let qty =
																						item.qty;
																					let variety =
																						item.varietyIndex;
																					dispatch(
																						addToCartAction(
																							{
																								productId,
																								qty,
																								variety,
																							}
																						)
																					);
																				}}
																			>
																				+
																			</Button>
																		</Col>
																	</Row>
																</Col>
																<Col className="my-2">
																	<span className="naira">
																		N
																	</span>{" "}
																	{item
																		.varietyDetails
																		.price *
																		item.qty}
																</Col>
																<Col className="my-2 w-100">
																	<Button
																		className="btn-warning w-max text-white"
																		onClick={() =>
																			dispatch(
																				removeFromCartAction(
																					item.variety
																				)
																			)
																		}
																	>
																		Remove{" "}
																		<img
																			src="/images/outline_remove_shopping_cart_white_24dp.png"
																			alt=""
																			style={{
																				width: "27px",
																			}}
																		/>
																	</Button>
																</Col>
															</Row>
														</li>
													);
												})}
											</ul>
										</Col>

										<Col>
											<Card>
												<Card.Header className="d-flex justify-content-between">
													Subtotal (
													{cartItems?.reduce(
														(a, c) => a + c.qty,
														0
													)}
													):{" "}
													<span>
														<span className="naira">
															N
														</span>{" "}
														{cartItems?.reduce(
															(a, c) =>
																a +
																c.varietyDetails
																	.price *
																	c.qty,
															0
														)}
													</span>
												</Card.Header>
												<Card.Body>
													<Card.Text>
														<Button
															variant="primary"
															className="w-100"
															onClick={() =>
																props.history.push(
																	"/user/signin?redirect=/products/shipping"
																)
															}
															disabled={
																cartItems?.length ===
																0
															}
														>
															Check Out
														</Button>
													</Card.Text>
												</Card.Body>
											</Card>
										</Col>
									</Row>
									<div className="text-center ">
										<Link
											to="/products"
											className="text-decoration-none p-2 m-4 btn btn-primary text-center "
										>
											{" "}
											Continue Shopping{" "}
										</Link>
									</div>
								</>
							)}
						</Container>
					</div>
				)}
			</div>
		</div>
	);
}
export default Cart;
