import React, { useState } from "react";
import { Container, Button, Form, Spinner, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  adminLogin,
  adminRequestVerifcation,
} from "../../actions/AdminActions";
import { useHistory } from "react-router";

function AdminLogin(props) {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const adminLoginDetails = useSelector((state) => state.adminLoginDetails);
  const { loading, success, error } = adminLoginDetails;

  console.log(success);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      e.stopPropagation();
    } else {
      setValidated(true);
      dispatch(adminLogin({ adminEmail, adminPassword }));

      ///Revisit when API is ready
    }
  };

  return (
    <Container
      id="contactus"
      className=" contact p-3 mx-auto my-5 rounded-pill"
    >
      {!success ? (
        <Form
          className="contact-form p-3 mt-5"
          validated={validated}
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="text-center text-primary pt-2">
            <h3 className="mb-0">Admin Login Page</h3>
          </div>

          <Form.Group id="adminEmail" className="m-4">
            <Form.Label htmlFor="adminEmail">Email Address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setAdminEmail(e.target.value)}
              name="adminEmail"
              value={adminEmail}
              required
              placeholder="Enter login email"
            />
          </Form.Group>

          <Form.Group id="adminPassword" className="m-4">
            <Form.Label htmlFor="adminPassword"> Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type={showPassword ? "text" : "password"}
                onChange={(e) => setAdminPassword(e.target.value)}
                name="adminPassword"
                value={adminPassword}
                required
                placeholder="Enter password"
              />
              <Button
                onClick={() => setShowPassword(showPassword ? false : true)}
                variant="outline-secondary"
              >
                {showPassword ? (
                  <img
                    src="/images/outline_visibility_off_black_24dp.png"
                    alt="visibility"
                  />
                ) : (
                  <img
                    src="/images/outline_visibility_black_24dp.png"
                    alt="visibility"
                  />
                )}
              </Button>
            </InputGroup>
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Log in
              {loading && (
                <Spinner
                  className="mx-2"
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
            </Button>
          </div>
          {error && (
            <div className="text-danger text-center p-2 m-2 ">
              Error: Login unsuccessful!
            </div>
          )}
        </Form>
      ) : (
        <VerificationCode />
      )}
    </Container>
  );
}

const VerificationCode = (props) => {
  const [adminVerification, setAdminVerification] = useState("");
  const [validateCode, setValidateCode] = useState(false);
  const [correctCode, setCorrectCode] = useState(false);
  const [validated, setValidated] = useState(false);

  // const [backToLogin, setBackToLogin] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      e.stopPropagation();
    } else {
      setValidated(true);
      dispatch(adminRequestVerifcation(validateCode));
      history.push("./admin"); ///Revisit when API is ready
      setValidateCode(true);
      setCorrectCode(true);
    }
  };

  return (
    <div>
      <Form
        className="contact-form p-3 mt-4"
        validated={validated}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="text-center text-primary pt-2">
          <h3 className="mb-0">Admin Login Page</h3>
          <p>
            <small>
              A six digit verification code has been sent to your mail{" "}
            </small>
          </p>
        </div>
        <Form.Group id="adminVerificationCode" className="m-4">
          <Form.Label htmlFor="adminEmail">Enter Verification code</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setAdminVerification(e.target.value)}
            name="adminVerification"
            value={adminVerification}
            pattern="[0-9]{6}"
            required
            placeholder="E.g 567849"
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" className="mx-3" type="submit">
            Proceed
            {correctCode ? (
              <Spinner
                className="mx-2"
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : null}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AdminLogin;

// let history = useHistory();

// const handleVerificationCode = (event) => {
//   setAdminVerification(event.target.value);
// };
// console.log(adminVerification);

// const handleSubmit = (event) => {
//   const form = event.currentTarget;
//   event.preventDefault();
//   setValidated(false);

//   if (form.checkValidity() === false) {
//     setValidated(true);
//     event.stopPropagation();
//     // return;
//   } else {
//     setCorrectCode(true);
//     axios
//       .post("https://jsonplaceholder.typicode.com/posts/", {
//         code: adminVerification,
//       })
//       .then((response) => {
//         console.log(response, validatedCode);
//         setCorrectCode(false);
//         setValidatedCode(true);
//         history.push("/admin");
//       })
//       .catch((err) => {
//         console.log(err);
//         setCorrectCode(false);
//       });
//   }
// };
