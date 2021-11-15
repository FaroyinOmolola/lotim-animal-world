import React from "react";
import "./admin.scss";
import { Container, Table, Button } from "react-bootstrap";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Appointment(props) {
  const bookingList = useSelector((state) => state.listBooking);
  const { loading, listBooking } = bookingList;

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
    <div id="appointment" className="">
      <Container className="">
        {loading ? (
          <Loading />
        ) : (
          <Table bordered>
            <thead className="bg-secondary text-white">
              <tr>
                <th>ID</th>
                <th>Date Created</th>
                <th>Appointment Schedule</th>
                <th>Aim</th>
                <th>Addition Info</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {listBooking?.map((elm) => (
                <tr key={elm?._id}>
                  <Link
                    to={`/admin/appointment/${elm?._id}`}
                    className=" text-decoration-none"
                  >
                    {" "}
                    <td>{elm?._id}</td>
                  </Link>
                  <td>{new Date(`${elm?.createdAt}`).toDateString()}</td>
                  <td>
                    {new Date(`${elm?.bookingsDate}`).toDateString()}{" "}
                    {time(new Date(`${elm?.bookingsDate}`).toTimeString())}
                  </td>
                  <td>{elm?.reason}</td>
                  <td>{elm?.description}</td>
                  <td>
                    <Button variant="success">Confirmed</Button>
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
export default Appointment;
