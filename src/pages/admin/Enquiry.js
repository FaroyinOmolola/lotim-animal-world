import React from "react";
import "./admin.scss";
import { Container, Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getOneEnquiryAction } from "../../actions/ContactUsAction";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading";

function Enquiry() {
  const enquiryList = useSelector((state) => state.listEnquiry);
  const { loading, listEnquiry } = enquiryList;
  const dispatch = useDispatch();

  return (
    <div id="enquiry" className="">
      <Container className="">
        {loading ? (
          <Loading />
        ) : (
          <Table bordered>
            <thead className="bg-secondary text-white">
              <tr>
                <th>ID</th>
                <th>Date Created</th>

                <th>Enquiry</th>

                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {listEnquiry?.map((elm) => (
                <tr key={elm?._id}>
                  <Link
                    to="#"
                    className=" text-decoration-none"
                    onClick={() => {
                      dispatch(getOneEnquiryAction(elm?._id));
                    }}
                  >
                    {" "}
                    <td>{elm?._id}</td>
                  </Link>
                  <td>
                    {new Date(`${elm?.createdAt}`)
                      .toUTCString()
                      .split(" ")
                      .slice(1, 4)
                      .join(" ")}
                  </td>
                  <td>{elm?.enquiry}</td>

                  <td>
                    <Button variant="success">Active</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
}
export default Enquiry;
