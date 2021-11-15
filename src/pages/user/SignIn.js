import React, { useEffect, useState } from "react";
import { Form, Button, Container, Spinner, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signinAction } from "../../actions/UserAction";
import { useSelector } from "react-redux";

function SignIn(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validated, setValidated] = useState(false);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			setValidated(true);
			e.stopPropagation();
		} else {
			setValidated(true);
			dispatch(signinAction({ email, password }));
		}
	};

	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/products";

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo, loading, error } = userSignin;

	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
	}, [props.history, redirect, userInfo]);

	return (
		<div className="one-product mb-0 product">
			<Container className=" my-3 py-3 bg-white">
				<Form
					onSubmit={submitHandler}
					noValidate
					validated={validated}
					className="w  mx-auto"
				>
					<div className="mb-3 ">
						<h1 className="fs-4 text-primary text-center">
							Sign In
						</h1>
					</div>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="email">Email address</Form.Label>
						<Form.Control
							type="email"
							id="email"
							placeholder="Enter email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a valid email e.g. abc@example.com
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
						<Form.Control.Feedback type="invalid">
							minimum length should be 6
						</Form.Control.Feedback>
					</Form.Group>

					{error && (
						<Alert variant="warning" className="text-center fs-5">
							{error}
						</Alert>
					)}

					<Button className="w-100" type="submit">
						Sign In{" "}
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
							New customer?{" "}
							<Link
								className="text-decoration-none text-primary"
								to="/user/register"
							>
								Create account
							</Link>{" "}
						</div>
					</div>
				</Form>
			</Container>
		</div>
	);
}

export default SignIn;
