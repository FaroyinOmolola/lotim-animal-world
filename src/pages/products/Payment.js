import React, { useState } from "react";
import CheckoutSteps from "../../components/CheckoutSteps";
import { Button, Container, Form, Row, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { paymentAction } from "../../actions/CartAction";
import { PaystackButton } from "react-paystack";

function Payment(props) {
	const cart = useSelector((state) => state.cart);
	const { shippingDetails } = cart;
	if (!shippingDetails) {
		props.history.push("./shipping");
	}

	const [paymentMethod, setPaymentMethod] = useState("Pay on delivery");
	const [paid, setPaid] = useState(false);
	const [paymentReference, setPaymentReference] = useState("");

	const [paidShow, setPaidShow] = useState(false);

	const [validated, setValidated] = useState(false);
	const dispatch = useDispatch();

	const toPrice = (num) => Number(num.toFixed(2));

	cart.itemsPrice = toPrice(
		cart.cartItems.reduce((a, c) => a + c.qty * c.varietyDetails.price, 0)
	);

	cart.shippingPrice = cart.itemsPrice > 1000 ? toPrice(1000) : toPrice(500);

	cart.totalPrice = cart.itemsPrice + cart.shippingPrice;

	const publicKey = "pk_test_59330a42bd32d9c3e45b2cbef14f3d1e6cd7b3d1";
	const amount = cart.totalPrice.toFixed(2) * 100; // Remember, set in kobo!
	const email = "lotimanimalworld@gmail.com";
	const name = "Faroyin Omolola";
	const phone = "07065363655";

	const componentProps = {
		email,
		amount,
		metadata: {
			name,
			phone,
		},
		publicKey,
		text: "Make Payment",
		onSuccess: (response) => {
			setPaymentReference(response.reference);
			setPaid(true);
			setPaidShow(true);
		},
		onClose: (response) => {
			setPaymentReference("");
			setPaid(false);
			setPaidShow(false);
		},
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			setValidated(true);
			e.stopPropagation();
		} else {
			setValidated(true);
			dispatch(paymentAction({ paymentMethod, paid, paymentReference }));
			props.history.push("/products/placeorder");
		}
	};
	return (
		<div className="one-product mb-0 product">
			<Container className=" my-3 py-3 bg-white">
				<CheckoutSteps step1 step2 step3 />

				<Form
					onSubmit={submitHandler}
					noValidate
					validated={validated}
					className=" w-50 mx-auto"
				>
					<h1 className="mb-3 fs-4 text-primary text-center">
						Payment
					</h1>

					<Form.Group className="mb-3">
						<Form.Check
							type="radio"
							name="paymentMethod"
							label="Pay on delivery / pick up"
							id="payOnDelivery"
							// value={paymentMethod}
							value="Pay on delivery"
							required
							onChange={(e) =>
								setPaymentMethod("Pay on delivery")
							}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Check
							type="radio"
							name="paymentMethod"
							label="Pay Now"
							id="payNow"
							required
							onChange={(e) => setPaymentMethod("Pay now")}
						/>
					</Form.Group>

					{paid && (
						<Modal
							show={paidShow}
							backdrop="static"
							onHide={() => setPaidShow(false)}
							keyboard={false}
						>
							<Modal.Header closeButton>
								<Modal.Title className="fs-3 text-success">
									Payment Successful!
								</Modal.Title>
							</Modal.Header>
						</Modal>
					)}

					<Row className="my-3">
						<Col className="mx-3 mb-3">
							<Button
								className="w-100"
								type="submit"
								disabled={
									paymentMethod === "Pay now" && !paid
										? true
										: paymentMethod === "Pay now" && paid
										? false
										: false
								}
							>
								Continue
							</Button>
						</Col>
						<Col className="mx-3 mb-3">
							<Button
								as={Col}
								type="button"
								variant="secondary"
								className="w-100"
								onClick={() =>
									props.history.push("/products/shipping")
								}
							>
								Back
							</Button>
						</Col>
					</Row>
				</Form>
			</Container>

			{paymentMethod === "Pay now" && !paid ? (
				<Container className=" my-3 py-3 bg-white">
					<div className="my-3 text-center">
						<PaystackButton
							className="paystack-button py-2 px-3 fs-5  rounded-pill btn-primary"
							{...componentProps}
						/>
					</div>
				</Container>
			) : (
				""
			)}
		</div>
	);
}

export default Payment;
