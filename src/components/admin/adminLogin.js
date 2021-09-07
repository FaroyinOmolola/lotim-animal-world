import React, {useState}from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios"
import { Container,
Button, Form, Spinner, InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminLogin () {
	const [adminDetails, setAdminDetails] = useState({
    adminEmail: "",
    adminPassword: ""
  })
	
  const handleDetails=event=>{
    const { name, value } = event.target
    setAdminDetails({...adminDetails, [name]: value})
  }

	const [validated, setValidated] = useState(false)
  const [correctDetails, setCorrectDetails] = useState(false)
  
  
  const [verificationCode, setVerificationCode] = useState(false)

  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(false);

    if (form.checkValidity() === false) {
      setValidated(true);
      event.stopPropagation();
     // return;
    }
    else{
      setCorrectDetails(true)
    axios.post("https://jsonplaceholder.typicode.com/posts/", adminDetails)
      .then(response=>{
        console.log(response);
         setVerificationCode(true);
         setCorrectDetails(false)
          
        
      })
      .catch(err=>{
        console.log(err);
        setCorrectDetails(false)
      })
    }
  };
  
  const [showPassword, setShowPassword] = useState(false)
  const handleVisibility = ()=>{
    setShowPassword(showPassword? false: true)
    }

  
  return(
    <Container id="contactus" className=" contact p-3 mx-auto my-5 rounded-pill">
    {!verificationCode?
      <Form className="contact-form p-3 mt-4" 
      validated={validated} 
      noValidate
      onSubmit={handleSubmit}>
      <div className="text-center text-primary pt-2">
        <h3 className="mb-0">Admin Login Page</h3> 
      </div>

        <Form.Group id="adminEmail" className="m-4">
        <Form.Label htmlFor="adminEmail" >Email Address</Form.Label> 
        <Form.Control type="email" 
         onChange={handleDetails}
         name="adminEmail"
         value={adminDetails.adminEmail}
         required 
         placeholder="Enter login email"/>
      </Form.Group>

      <Form.Group id="adminPassword" className="m-4">
         <Form.Label htmlFor="adminPassword"> Password</Form.Label> 
          <InputGroup className="mb-3">
         <Form.Control type={showPassword? "text":"password"}
           onChange={handleDetails}
           name="adminPassword"
           value={adminDetails.adminPassword} 
           required
           placeholder="Enter password"/>
         <Button onClick={handleVisibility} 
          variant="outline-secondary">
           {showPassword? <img src="/images/outline_visibility_off_black_24dp.png" 
            alt="visibility" />:
            <img src="/images/outline_visibility_black_24dp.png" 
           alt="visibility" />}
         </Button>
         </InputGroup>
      </Form.Group>

        <div className="text-center">
       <Button variant="primary" type="submit">Log in 
       {correctDetails?
        <Spinner className="mx-2"
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    /> : null}
    </Button>
      </div>
       </Form>:
      <VerificationCode />

     }
      
    </Container>
  )
}

  


const VerificationCode = () => {

const [adminVerification, setAdminVerification] = useState("");
  const [validatedCode, setValidatedCode] = useState(false)
  const [correctCode, setCorrectCode] = useState(false)
  const [validated, setValidated] = useState(false)

  let history = useHistory();

  const handleVerificationCode=event=>{
    setAdminVerification(event.target.value)
  }
console.log(adminVerification);
 
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(false);
  
    if (form.checkValidity() === false) {
      setValidated(true);
      event.stopPropagation();
     // return;
    }

    else{
      setCorrectCode(true)
    axios.post("https://jsonplaceholder.typicode.com/posts/", {code: adminVerification})
      .then(response=>{
        console.log(response); 
        setCorrectCode(false)
         setValidatedCode(true);
          history.push('/admin')
        
        
      })
      .catch(err=>{
        console.log(err);
        setCorrectCode(false)
      })
    }
  }

  return (
    <div>
      
      <Form className="contact-form p-3 mt-4" 
      validated={validated} 
      noValidate
      onSubmit={handleSubmit}>
      <div className="text-center text-primary pt-2">
        <h3 className="mb-0">Admin Login Page</h3> 
        <p ><small>A six digit verification code has been sent to your mail </small></p>
      </div>
      <Form.Group id="adminVerificationCode" className="m-4">
        <Form.Label htmlFor="adminEmail" >Enter Verification code</Form.Label> 
        <Form.Control type="text" 
         onChange={handleVerificationCode}
         name="adminVerification"
         value={adminVerification}
         pattern="[0-9]{6}"
         required 
         placeholder="E.g 567849"/>
      </Form.Group>

      <div className="text-center">
      <Button variant="primary" className="mx-3">Back
    </Button>

      <Button variant="primary"  className="mx-3" 
      type="submit">Proceed
        {correctCode? <Spinner className="mx-2"
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />: null}
    </Button>
      </div>

      </Form> 
    </div>
  )
}



export default AdminLogin;