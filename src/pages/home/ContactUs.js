import React, { useState } from "react";

import "../../index.scss";
import "./home.scss";
import { Container, Button, Form, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
	sendEnquiryAction,
	sendBookingAction,
} from "../../actions/ContactUsAction";

function ContactUs(props) {
	const [name, setName] = useState("");
	const [whyContactUs, setWhyContactUs] = useState("");
	const [reason, setReason] = useState("");
	const [email, setEmail] = useState("");
	const [description, setDescription] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [enquiry, setEnquiry] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");

	const [validated, setValidated] = useState(false);
	const minDate = new Date(new Date().setDate(new Date().getDate() + 1))
		.toISOString()
		.split("T")[0];
	const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2))
		.toISOString()
		.split("T")[0];
	const bookingsDate = new Date(`${date} ${time}`);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			setValidated(true);
			e.stopPropagation();
		} else {
			setValidated(true);
			if (whyContactUs === "Enquiry") {
				dispatch(
					sendEnquiryAction({ name, email, enquiry, phoneNumber })
				);
			} else if (whyContactUs === "Appointment") {
				dispatch(
					sendBookingAction({
						name,
						email,
						phoneNumber,
						reason,
						description,
						bookingsDate,
					})
				);
			}
		}
	};

	const submitContactUs = useSelector((state) => state.contactUs);
	const { loading, success, error } = submitContactUs;

	return (
		<div>
			<Container
				id="contactus"
				className=" contact p-3 mx-auto my-5 w rounded-pill"
			>
				{!success ? (
					<Form
						className="contact-form p-3 mt-4"
						validated={validated}
						noValidate
						onSubmit={handleSubmit}
					>
						<div className="text-center text-primary pt-2">
							<h3 className="mb-0">For Enquiry or Appointment</h3>
							<p>
								<small>Please fill the form below</small>
							</p>
						</div>

						<Form.Group id="fullname" className="m-4">
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								type="text"
								onChange={(e) => setName(e.target.value)}
								name="name"
								value={name}
								placeholder="Full Name"
								required
							/>
							<p className="invalid-feedback">
								Please enter full name
							</p>
						</Form.Group>

						<Form.Group id="email" className="m-4">
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								value={email}
								required
								placeholder="Email Address"
							/>
							<p className="invalid-feedback">
								Please enter valid email address e.g.
								xmn@gmail.com
							</p>
						</Form.Group>

						<Form.Group id="phone number" className="m-4">
							<Form.Label>Phone number</Form.Label>
							<Form.Control
								type="text"
								onChange={(e) => setPhoneNumber(e.target.value)}
								name="phoneNumber"
								value={phoneNumber}
								pattern="[0]{1}[7-9]{1}[0-1]{1}[0-9]{8}"
								placeholder="Phone Number"
							/>
						</Form.Group>

						<Form.Select
							className="m-4 select"
							onChange={(e) => setWhyContactUs(e.target.value)}
							name="whyContactUs"
							value={whyContactUs}
							required
						>
							<option value="">
								Please select reason for contact
							</option>
							<option value="Enquiry">Enquiry</option>
							<option value="Appointment">Appointment</option>
							<p className="invalid-feedback">
								Please select reason for contact
							</p>
						</Form.Select>
						<div>
							{whyContactUs === "Enquiry" && (
								<Form.Group id="enquiry" className="m-4">
									<Form.Label>Enquiry Details</Form.Label>
									<Form.Control
										as="textarea"
										onChange={(e) =>
											setEnquiry(e.target.value)
										}
										name="enquiry"
										value={enquiry}
										required
										rows={3}
										placeholder="What would you like to know"
									/>
									<p className="invalid-feedback">
										Please enter enquiry details
									</p>
								</Form.Group>
							)}
						</div>

						<div>
							{whyContactUs === "Appointment" && (
								<div>
									<Form.Group
										id="appointment date"
										className="m-4"
									>
										<Form.Label>
											Preferred appointment date
										</Form.Label>
										<Form.Control
											type="date"
											onChange={(e) =>
												setDate(e.target.value)
											}
											name="date"
											min={minDate}
											max={maxDate}
											required
											value={date}
										/>
									</Form.Group>

									<Form.Group
										id="appointment time"
										className="m-4"
									>
										<Form.Label>
											Preferred appointment time
										</Form.Label>
										<Form.Control
											type="time"
											onChange={(e) =>
												setTime(e.target.value)
											}
											name="time"
											required
											value={time}
										/>
									</Form.Group>

									<Form.Select
										className="m-4 select"
										onChange={(e) =>
											setReason(e.target.value)
										}
										name="reason"
										required
										value={reason}
									>
										<option value="">
											Please select the aim of this
											meeting
										</option>
										<option value="Unhealthy pet or animal">
											Unhealthy pet or animal
										</option>
										<option value="Professional guidance">
											Professional guidance
										</option>
										<option value="Purchase of goods">
											Purchase of goods
										</option>
										<option value="Animal health consultation">
											Animal health consultation
										</option>
										<option value="Poultry or livestock farm management">
											Poultry or livestock farm management
										</option>
										<option value="Others">Others</option>
										<p className="invalid-feedback">
											Please select the aim of this
											meeting
										</p>
									</Form.Select>

									<Form.Group
										id="description"
										className="m-4"
									>
										<Form.Label>
											Any additional information?
										</Form.Label>
										<Form.Control
											as="textarea"
											onChange={(e) =>
												setDescription(e.target.value)
											}
											name="description"
											value={description}
											rows={3}
											placeholder="Any other information..."
										/>
									</Form.Group>
								</div>
							)}
						</div>

						<div className="text-center">
							<Button
								variant="primary"
								className="w-75 mb-2"
								type="submit"
							>
								Submit
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

							{error && (
								<Container className="text-danger text-center">
									There was an error submitting your enquiry /
									appointment, ensure you fill all fields
									correctly and / check internet connection
									and try again.
								</Container>
							)}
						</div>
					</Form>
				) : (
					<Container
						id="contactus"
						className=" text-center contact p-3 mx-auto my-2 rounded-pill"
					>
						<div className="">
							<Button className="btn-primary p-3 mb-2 rounded-circle">
								<img
									src="/images/outline_check_white_24dp.png"
									alt="submitted succesfully"
								/>
							</Button>
							<h5 className="p-3 my-2">
								Your Enquiry/Appointment request has been
								submitted succesfully!
							</h5>
							<p className="p-3 my-2">
								We will contact you shortly
							</p>
						</div>
					</Container>
				)}
			</Container>
		</div>
	);
}

export default ContactUs;
