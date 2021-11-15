import React, { useEffect, useState } from "react";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerAction } from "../../actions/UserAction";

function RegisterScreen(props) {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [validated, setValidated] = useState(false);
	const [show, setShow] = useState(false);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			setValidated(true);
			e.stopPropagation();
		} else {
			if (password !== confirmPassword) {
				setShow(true);
			} else {
				setValidated(true);
				dispatch(
					registerAction({
						firstName,
						lastName,
						phoneNumber,
						email,
						password,
						address,
					})
				);
			}
		}
	};
	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/products";

	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo, error, loading } = userRegister;

	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
	}, [props.history, redirect, userInfo]);

	return (
		<div className="one-product mb-0 pb-5 product">
			<Container className="w mt-3 py-3 bg-white">
				<Form
					onSubmit={submitHandler}
					noValidate
					validated={validated}
					className=" p-4 mb-3 mx-auto"
				>
					<div className="mb-3 ">
						<h1 className="fs-4 text-primary text-center">
							Create Account
						</h1>
					</div>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="firstName">First Name</Form.Label>
						<Form.Control
							type="text"
							id="firstName"
							placeholder="Enter first name"
							required
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter your first name
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="lastName">Last Name</Form.Label>
						<Form.Control
							type="text"
							id="lastName"
							placeholder="Enter last name"
							required
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter your last name
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="email">Email address</Form.Label>
						<Form.Control
							type="email"
							id="email"
							placeholder="Enter email"
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a valid email e.g. abc@example.com
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="phoneNumber">
							Phone number
						</Form.Label>
						<Form.Control
							id="phoneNumber"
							type="text"
							onChange={(e) => setPhoneNumber(e.target.value)}
							name="phoneNumber"
							value={phoneNumber}
							required
							pattern="[0]{1}[7-9]{1}[0-1]{1}[0-9]{8}"
							placeholder="Phone Number"
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a valid phone number e.g. 07044444444
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="address">
							Shipping Address
						</Form.Label>
						<Form.Control
							type="address"
							id="address"
							placeholder="Enter shipping address"
							required
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter your address
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="password">Password</Form.Label>
						<Form.Control
							type="password"
							id="password"
							value={password}
							placeholder="Password"
							minLength="6"
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Form.Text className="text-muted">
							minimum length should be 6.
						</Form.Text>
						<Form.Control.Feedback type="invalid">
							Please set a password
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="confirmPassword">
							{" "}
							Confirm Password
						</Form.Label>
						<Form.Control
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							placeholder=" Confirm Password"
							minLength="6"
							required
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<Form.Text className="text-muted">
							should match password entered above.
						</Form.Text>
						<Form.Control.Feedback type="invalid">
							Please confirm password
						</Form.Control.Feedback>
					</Form.Group>
					{show && (
						<Alert
							variant="danger"
							className=""
							onClose={() => setShow(false)}
							dismissible
						>
							<small>
								password and confirm password does not match
							</small>
						</Alert>
					)}
					{error && (
						<Alert variant="warning" className="text-center fs-5">
							{error}
						</Alert>
					)}

					<Button className="w-100" type="submit">
						Register{" "}
						{loading && (
							<Spinner
								className="mx-2"
								as="span"
								animation="border"
								size="sm"
								role="status"
								aria-hidden="true"
							/>
						)}
					</Button>
					<div>
						<label />
						<div>
							Already have an account?{" "}
							<Link
								className="text-decoration-none text-primary"
								to={`/user/signin?redirect=${redirect}`}
							>
								Sign In
							</Link>{" "}
						</div>
					</div>
				</Form>
			</Container>
		</div>
	);
}

export default RegisterScreen;
