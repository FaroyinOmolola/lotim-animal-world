import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { shippingDetailsAction } from "../../actions/CartAction";
import CheckoutSteps from "../../components/CheckoutSteps";

function ShippingDetails(props) {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	if (!userInfo) {
		props.history.push("/user/signin");
	}

	const [delivery, setDelivery] = useState(false);
	const [deliveryAddress, setDeliveryAddress] = useState(
		userInfo?.data?.user?.address
	);
	const [preferredAddress, setPreferredAddress] = useState("");
	const [primaryAddress, setPrimaryAddress] = useState(false);

	const [validated, setValidated] = useState(false);
	const [showValidation, setShowValidation] = useState(false);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			setValidated(true);
			setShowValidation(true);
			e.stopPropagation();
		} else {
			setValidated(true);
			setShowValidation(false);
			dispatch(
				shippingDetailsAction({
					delivery,
					deliveryAddress,
					primaryAddress,
				})
			);
			props.history.push("/products/payment");
		}
	};

	return (
		<div className="one-product mb-0 product">
			<Container className=" my-3 py-md-3 py-4   bg-white">
				<CheckoutSteps step1 step2 />
				<Form
					onSubmit={submitHandler}
					noValidate
					validated={validated}
					className=" w-75 px-3 width-100 mx-md-auto"
				>
					<h1 className="mb-3 fs-4 text-primary text-center">
						Shipping Details
					</h1>

					{showValidation && (
						<Alert
							variant="danger"
							className=""
							onClose={() => setShowValidation(false)}
							dismissible
						>
							<small>please fill all fields correctly</small>
						</Alert>
					)}

					<p className="mb-0">
						Preferred Delivery mode{" "}
						<small className="fst-italic ">
							(delivery only available for locations within Lagos)
						</small>
					</p>
					<div className="mb-3">
						<Form.Check
							inline
							label="Delivery"
							name="Delivery"
							type="radio"
							id="delivery"
							onChange={() => setDelivery(true)}
						/>
						<Form.Check
							inline
							label="Pick Up"
							name="Delivery"
							type="radio"
							id="pickup"
							onChange={() => setDelivery(false)}
						/>
					</div>

					{delivery && (
						<div className="my-3">
							<p className="mb-0">Preferred Delivery Address</p>
							<div className="mb-3">
								<Form.Check type="radio" id="deliveryAddress">
									<Form.Check.Input
										type="radio"
										name="prefferedAddress"
										onChange={() =>
											setDeliveryAddress(
												userInfo?.data?.user?.address
											)
										}
									/>
									<Form.Check.Label className="w-75">
										<Form.Control
											type="text"
											className="mx-2 bg-secondary"
											value={
												userInfo?.data?.user?.address
											}
											readOnly
										/>
									</Form.Check.Label>
								</Form.Check>
							</div>
							<div className="mb-3">
								<Form.Check type="radio" id="deliveryAddress">
									<Form.Check.Input
										type="radio"
										name="prefferedAddress"
										onChange={() =>
											setDeliveryAddress(
												preferredAddress
													? preferredAddress
													: ""
											)
										}
									/>
									<Form.Check.Label className="w-75">
										<Form.Control
											className="mx-2"
											type="text"
											value={preferredAddress}
											onChange={(e) =>
												setPreferredAddress(
													e.target.value
												)
											}
										/>
									</Form.Check.Label>
									<p>
										<small className="fst-italic mt-1">
											Select and fill the space above if
											you prefer a different delivery
											address
										</small>
									</p>
								</Form.Check>
							</div>
							<div className="mb-3">
								<Form.Check
									label="Set new address above as default address"
									name="newAddress"
									type="checkbox"
									id="newAddress"
									onChange={(e) => {
										setPrimaryAddress(!primaryAddress);
									}}
								/>
							</div>
						</div>
					)}

					<Button className="w-100 my-3" type="submit">
						Continue
					</Button>
				</Form>
			</Container>
		</div>
	);
}

export default ShippingDetails;
