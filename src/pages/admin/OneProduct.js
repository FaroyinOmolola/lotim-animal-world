import React, { useEffect } from "react";
import "./admin.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { adminGetOneProductAction } from "../../actions/AdminProductsActions";
import { useDispatch } from "react-redux";

function OneProduct(props) {
	const product = useSelector((state) => state.oneAdminProduct);
	const { loading, oneAdminProduct } = product;
	console.log(oneAdminProduct);
	const productId = props.match.params?.id;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(adminGetOneProductAction(productId));
	}, [dispatch, productId]);

	let totalQuantity = 0;
	oneAdminProduct?.varieties.forEach((_v) => {
		totalQuantity += _v.quantity;
	});

	let orderCompleted = 0;
	oneAdminProduct?.varieties.forEach((_v) => {
		orderCompleted += _v.completedOrder;
	});

	return (
		<div id="one-product" className="admin pt-4">
			{loading ? (
				<Loading />
			) : (
				<Container className="">
					<h1 className="fs-3">Product Details</h1>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Product Name:
						</Col>
						<Col xs={9}>{oneAdminProduct?.name}</Col>
					</Row>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Brand:
						</Col>
						<Col xs={9}>{oneAdminProduct?.brand}</Col>
					</Row>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Date Uploaded:
						</Col>
						<Col xs={9}>
							{new Date(`${oneAdminProduct?.createdAt}`).toDateString()}
						</Col>
					</Row>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Product ID:
						</Col>
						<Col xs={9}>{oneAdminProduct?._id}</Col>
					</Row>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Animal Category:
						</Col>
						<Col xs={9}>
							<ul className="mb-0">
								{oneAdminProduct?.animal.map((elm) => (
									<li key={elm}>{elm}</li>
								))}
							</ul>
						</Col>
					</Row>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Product Category:
						</Col>
						<Col xs={9}>
							<ul className="mb-0">
								{oneAdminProduct?.category.map((elm) => (
									<li key={elm}>{elm}</li>
								))}
							</ul>
						</Col>
					</Row>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Total Quantity Stocked:
						</Col>
						<Col xs={9}>{totalQuantity}</Col>
					</Row>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Total Quantity Available:
						</Col>
						<Col xs={9}>{totalQuantity - orderCompleted}</Col>
					</Row>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Description:
						</Col>
						<Col xs={9}>{oneAdminProduct?.description}</Col>
					</Row>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Features:
						</Col>
						<Col xs={9}>
							{oneAdminProduct?.features.map((elm) => (
								<Row key={elm._id}>
									<Col xs={4}>{elm.key}</Col>
									<Col xs={8}>{elm.value}</Col>
								</Row>
							))}
						</Col>
					</Row>
					<Row className="my-2">
						<Col className="text-primary" xs={3}>
							Varieties Available:
						</Col>
						<Col xs={9}>{oneAdminProduct?.varieties.length}</Col>
					</Row>

					<p className="text-primary fs-4" xs={3}>
						Varieties:
					</p>

					<Row>
						{oneAdminProduct?.varieties.map((elm) => (
							<Col key={elm._id} className="mx-auto">
								<Card style={{ width: "20rem" }} className="mb-3">
									<Card.Img variant="top" src="holder.js/100px180" />
									<Card.Body>
										<Card.Title>
											<Row>
												<Col xs={8}>{elm.key}</Col>
												<Col xs={4}>{elm.value}</Col>
											</Row>
										</Card.Title>
										<Row>
											<Col xs={8}>Quantity Stocked:</Col>
											<Col xs={4}>{elm.quantity}</Col>
										</Row>
										<Row>
											<Col xs={8}>Quantity Available:</Col>
											<Col xs={4}>
												{elm.outOfStock ? 0 : elm.quantity - elm.completedOrder}
											</Col>
										</Row>
										<Row>
											<Col xs={8}>Cost:</Col>
											<Col xs={4}>{elm.cost}</Col>
										</Row>
										<Row>
											<Col xs={8}>Price:</Col>
											<Col xs={4}>{elm.price}</Col>
										</Row>
										<Row>
											<Col xs={8}>Discount:</Col>
											<Col xs={4}>{elm.discount * 100}% </Col>
										</Row>
										<Row>
											<Col xs={8}>Total Order:</Col>
											<Col xs={4}>{elm.totalOrder} </Col>
										</Row>
										<Row>
											<Col xs={8}>Completed Order:</Col>
											<Col xs={4}>{elm.completedOrder} </Col>
										</Row>
										<Row>
											<Col xs={8}>Rejected Order:</Col>
											<Col xs={4}>{elm.rejectedOrder} </Col>
										</Row>
										<Row>
											<Col xs={8}>Cancelled Order:</Col>
											<Col xs={4}>{elm.canceledOrder} </Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
						))}
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
export default OneProduct;
