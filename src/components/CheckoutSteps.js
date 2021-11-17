import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "../index.scss";

function CheckoutSteps(props) {
	return (
		<div className="checkoutsteps">
			<Container>
				<Row>
					<Col className={props.step1 ? "actived" : "inactive"}>
						<span className="d-md-inline d-none">Sign In</span> <Button className="d-inline d-md-none px-2 py-0" variant={props.step1 ? "primary rounded-circle" : "default rounded-cicle"}>1</Button>
					</Col>
					<Col className={props.step2 ? "actived" : "inactive"}>
					<span className="d-md-inline d-none">Shipping</span>	 <Button className="d-inline d-md-none px-2 py-0" variant={props.step2 ? "primary rounded-circle" : "default rounded-cicle"}>2</Button>
					</Col>
					<Col className={props.step3 ? "actived" : "inactive"}>
					<span className="d-md-inline d-none">Payment</span> <Button className="d-inline d-md-none px-2 py-0" variant={props.step3 ? "primary rounded-circle" : "default rounded-cicle"}>3</Button>
					</Col>
					<Col className={props.step4 ? "actived" : "inactive"}>
					<span className="d-md-inline d-none">Place Order</span> <Button className="d-inline d-md-none px-2 py-0" variant={props.step4 ? "primary rounded-circle" : "default rounded-cicle"}>4</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default CheckoutSteps;
