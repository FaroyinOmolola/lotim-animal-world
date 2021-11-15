import React from "react";
import "./admin.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Enquiry from "./Enquiry";

function EnquiryPage() {
  return (
    <div id="enquiryPage" className=" admin pt-4">
      <Enquiry />
    </div>
  );
}
export default EnquiryPage;
