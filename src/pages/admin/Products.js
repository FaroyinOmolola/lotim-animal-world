import React from "react";
import "./admin.scss";
import { Container, Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../../components/Loading";

function Product() {
  const productList = useSelector((state) => state.listAdminProduct);
  const { loading, listAdminProduct } = productList;
  console.log(listAdminProduct);

  return (
    <div id="products" className="">
      {loading ? (
        <Loading />
      ) : (
        <Container className="">
          <Table bordered>
            <thead className="bg-secondary text-white">
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Varieties</th>
                <th>Cost</th>
                <th>Price</th>
                <th>Qty Available</th>
                <th>Qty Remaining</th>
                <th>Status</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {listAdminProduct?.products?.map((value, id) => (
                <tr key={id + "product"}>
                  <Link
                    to={`/admin/product/${value?._id}`}
                    className=" text-decoration-none"
                  >
                    <td>{value?.name}</td>
                  </Link>
                  <td>{value?.brand}</td>
                  <td>{value?.varieties.length}</td>
                  <td>
                    <span className="naira">N</span>
                    {value?.varieties[0].cost}
                    <span></span>
                  </td>
                  <td>
                    <span className="naira">N</span>
                    {value?.varieties[0].price}
                  </td>
                  <td>
                    <ProductQuantity value={value} />
                  </td>
                  <td>
                    <QuantityLeft value={value} />
                  </td>
                  <td>
                    <Button>Active</Button>
                  </td>
                  <td>
                    <Button variant="warning">Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </div>
  );
}
export default Product;

const ProductQuantity = ({ value }) => {
  let total = 0;
  value.varieties.forEach((_v) => {
    total += _v.quantity;
  });
  return <span>{total}</span>;
};

const QuantityLeft = ({ value }) => {
  let total = 0;
  value.varieties.forEach((_v) => {
    total += _v.quantity;
  });
  let orderCompleted = 0;
  value.varieties.forEach((_v) => {
    total += _v.completedOrder;
  });
  return <span>{total - orderCompleted}</span>;
};
