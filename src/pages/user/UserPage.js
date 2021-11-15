import React from "react";
import "./user.scss";
import { Container, Row, Col } from "react-bootstrap";

function User() {
	return (
		<div className="user-bg mb-0 user">
			<Container className=" my-3 py-3 bg-white">
				<Row>
					<Col xs={12} md={3}>
						User
					</Col>
					<Col xs={12} md={9}>
						User
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default User;
