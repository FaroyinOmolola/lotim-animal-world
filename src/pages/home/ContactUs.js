import React, { useState } from "react";

import "../../index.scss";
import "./home.scss";
import { Container, Button, Form, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../actions/ContactUsAction";

function ContactUs(props) {
	const [fullname, setFullname] = useState("");
	const [reasonValue, setReasonValue] = useState("");
	const [contactEmail, setContactEmail] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [enquiryDetails, setEnquiryDetails] = useState("");
	const [appointmentDate, setAppointmentDate] = useState("");
	const [appointmentTime, setAppointmentTime] = useState("");
	const [appointmentAim, setAppointmentAim] = useState("");
	const [validated, setValidated] = useState(false);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			setValidated(true);
			e.stopPropagation();
		} else {
			setValidated(true);
			dispatch(
				contactUs({
					fullname,
					reasonValue,
					contactEmail,
					contactNumber,
					enquiryDetails,
					appointmentDate,
					appointmentTime,
					appointmentAim,
				})
			);
		}
	};

	const submitContactUs = useSelector((state) => state.contactUs);
	const { loading, success, error } = submitContactUs;

	return (
		<div>
			<Container
				id="contactus"
				className=" contact p-3 mx-auto my-5 rounded-pill"
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
								onChange={(e) => setFullname(e.target.value)}
								name="fullname"
								value={fullname}
								placeholder="Full Name"
								required
							/>
							<p className="invalid-feedback">Please enter full name</p>
						</Form.Group>

						<Form.Group id="email" className="m-4">
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								onChange={(e) => setContactEmail(e.target.value)}
								name="contactEmail"
								value={contactEmail}
								required
								placeholder="Email Address"
							/>
							<p className="invalid-feedback">
								Please enter valid email address e.g. xmn@gmail.com
							</p>
						</Form.Group>

						<Form.Group id="phone number" className="m-4">
							<Form.Label>Phone number</Form.Label>
							<Form.Control
								type="text"
								onChange={(e) => setContactNumber(e.target.value)}
								name="contactNumber"
								value={contactNumber}
								pattern="[0]{1}[7-9]{1}[0-1]{1}[0-9]{8}"
								required
								placeholder="Phone Number"
							/>
							<p className="invalid-feedback">
								Please enter valid phone number e.g. 07061234567
							</p>
						</Form.Group>

						<Form.Select
							className="m-4 select"
							onChange={(e) => setReasonValue(e.target.value)}
							name="reasonValue"
							value={reasonValue}
							required
						>
							<option value="">Please select reason for contact</option>
							<option value="1">Enquiry</option>
							<option value="2">Appointment</option>
							<p className="invalid-feedback">
								Please select reason for contact
							</p>
						</Form.Select>
						<div>
							{reasonValue === "1" && (
								<Form.Group id="enquiry" className="m-4">
									<Form.Label>Enquiry Details</Form.Label>
									<Form.Control
										as="textarea"
										onChange={(e) => setEnquiryDetails(e.target.value)}
										name="enquiryDetails"
										value={enquiryDetails}
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
							{reasonValue === "2" && (
								<div>
									<Form.Group id="appointment date" className="m-4">
										<Form.Label>Preferred appointment date</Form.Label>
										<Form.Control
											type="date"
											onChange={(e) => setAppointmentDate(e.target.value)}
											name="appointmentDate"
											required
											value={appointmentDate}
										/>
									</Form.Group>

									<Form.Group id="appointment time" className="m-4">
										<Form.Label>Preferred appointment time</Form.Label>
										<Form.Control
											type="time"
											onChange={(e) => setAppointmentTime(e.target.value)}
											name="appointmentTime"
											required
											value={appointmentTime}
										/>
									</Form.Group>

									<Form.Select
										className="m-4 select"
										onChange={(e) => setAppointmentAim(e.target.value)}
										name="appointmentAim"
										required
										value={appointmentAim}
									>
										<option value="">
											Please select the aim of this meeting
										</option>
										<option value="1">Unhealthy pet or animal</option>
										<option value="2">Professional guidance</option>
										<option value="3">Purchase of goods</option>
										<option value="4">Animal health consultation</option>
										<option value="5">
											Poultry or livestock farm management
										</option>
										<option value="6">Others</option>
										<p className="invalid-feedback">
											Please select the aim of this meeting
										</p>
									</Form.Select>
								</div>
							)}
						</div>

						<div>{reasonValue === "" && ""}</div>

						<div className="text-center">
							<Button variant="primary" className="w-75 mb-2" type="submit">
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
									There was an error submitting your enquiry / appointment{" "}
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
								Your Enquiry/Appointment request has been submitted succesfully!
							</h5>
							<p className="p-3 my-2">We will contact you shortly</p>
						</div>
					</Container>
				)}
			</Container>
		</div>
	);
}

export default ContactUs;
