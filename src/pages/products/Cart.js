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

const Cart = (props)=>{
	const cart = useSelector((state) => state.cart);
	let { cartItems, loading } = cart;
	
	let dispatch = useDispatch()
	

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
											
												{cartItems?.map((item, i) => {
													return (
														<Card key={item.variety} className="mb-3 p-2">
															<Row >
																<Col xs={5} md={4}className="my-2">
																	<img
																		style={{
																			maxWidth:
																				"120px",
																			width: "100%",
																		}}
																		src="/images/drugs edited.jpg"
																		alt={
																			item.name
																		}
																		className="img-fluid img-thumbnail"
																	/>
																</Col>
																<Col>
																<Row>
																<Col className="my-2" sm={12} md={6}>
																	<Link
																		to={`/products/product/${item.product}`}
																		className="text-decoration-none"
																	>
																		{
																			item.name
																		}
																	</Link>
																</Col>
																
																
																<Col className="my-2" sm={12} md={6}>
																	<Row className="mb-3">
																	<Col className="my-2" sm={12} md={6}>
																	<div><span className="naira">
																		N
																	</span>{" "}
																	{item
																		.varietyDetails
																		.price *
																		item.qty}</div>
																</Col>
																		<Col className="d-flex ">
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
																</Row>
																</Col>
															</Row>
															<Row className="">
															
															<Col className="my-2 w-100">
																	<Button
																		className="btn-warning w-max text-white"
																		onClick={() => dispatch(removeFromCartAction(item.variety)
																		)}
																	>
																		Remove{" "}
																		<img
																			src="/images/outline_remove_shopping_cart_white_24dp.png"
																			alt=""
																			style={{
																				width: "22px",
																			}}
																		/>
																	</Button>
																</Col>
															</Row>
															</Card>
													);
												})}
											
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
