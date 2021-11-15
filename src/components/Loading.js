import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
	return (
		<div className="loader">
			<Spinner
				variant="primary"
				animation="border"
				className="fs-1 rounded-circle"
			/>
		</div>
	);
}

export default Loading;
