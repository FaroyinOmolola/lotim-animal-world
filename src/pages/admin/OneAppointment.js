import React, { useEffect } from "react";
import "./admin.scss";
import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { getOneBookingAction } from "../../actions/ContactUsAction";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading";

function OneAppointment(props) {
	const booking = useSelector((state) => state.oneBooking);
	const { loading, oneBooking } = booking;
	console.log(oneBooking);
	const bookingId = props.match.params?.id;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getOneBookingAction(bookingId));
	}, [dispatch, bookingId]);

	const time = (t) => {
		let x = t.split(":").slice(0, 2);
		if (x[0] === "00") {
			x[0] = 12;
			return x.join(":") + "am";
		}
		if (x[0] === "12") {
			return x.join(":") + "pm";
		}
		if (x[0] > 12) {
			x[0] = x[0] - 12;
			return x.join(":") + "pm";
		}
		if (x[0] > 0 && x[0] < 12) {
			return x.join(":") + "am";
		}
		return x.join(":");
	};

	return (
		<div id="one-appointment" className="admin pt-4">
			{loading ? (
				<Loading />
			) : (
				<Container className="">
					<h1 className="fs-3">Appointment Details</h1>
					<Row className="my-2">
						<Col xs={3}>Name:</Col>
						<Col xs={9}>{oneBooking?.user?.firstName}</Col>
					</Row>
					<Row className="my-2">
						<Col xs={3}>Phone number:</Col>
						<Col xs={9}>{oneBooking?.user?.phoneNumber}</Col>
					</Row>
					<Row className="my-2">
						<Col xs={3}>Email:</Col>
						<Col xs={9}>{oneBooking?.user?.email}</Col>
					</Row>
					<Row className="my-2">
						<Col xs={3}>Date Created:</Col>
						<Col xs={9}>
							{new Date(
								`${oneBooking?.createdAt}`
							).toDateString()}
						</Col>
					</Row>
					<Row className="my-2">
						<Col xs={3}>Appointment Schedule:</Col>
						<Col xs={9}>
							{new Date(
								`${oneBooking?.bookingsDate}`
							).toDateString()}{" "}
							{time(
								new Date(
									`${oneBooking?.bookingsDate}`
								).toTimeString()
							)}
						</Col>
					</Row>
					<Row className="my-2">
						<Col xs={3}>Appointment Aim:</Col>
						<Col xs={9}>{oneBooking?.reason}</Col>
					</Row>
					<Row className="my-2">
						<Col xs={3}>Additional information</Col>
						<Col xs={9}>{oneBooking?.description}</Col>
					</Row>
					<Row className="my-2">
						<Col xs={3}>ID:</Col>
						<Col xs={9}>{oneBooking?._id}</Col>
					</Row>

					<Container className="mt-4">
						<h1 className="fs-3">Actions</h1>
						<p>Remarks</p>
						<p>Update Status</p>
					</Container>
				</Container>
			)}
		</div>
	);
}
export default OneAppointment;
