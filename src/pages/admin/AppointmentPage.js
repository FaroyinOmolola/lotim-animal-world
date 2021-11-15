import React from "react";
import "./admin.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Appointment from "./Appointment";

function AppointmentPage() {
  return (
    <div id="appointmentPage" className=" admin pt-4">
      <Appointment />
    </div>
  );
}
export default AppointmentPage;
