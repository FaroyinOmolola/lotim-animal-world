import React from 'react';
import '../../index.scss';
import "./home.scss";
import { Container, Carousel, CarouselItem, Col, Row,
Button, Form, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory} from "react-router-dom";
import axios from "axios"


function Home(){

  let history = useHistory();

  const redirectTo = (url) => {
    history.push(url)
  }
 
  return(
    <div id="home" className="app">
      <Carousel fade>
        <CarouselItem interval= {8000} className="carousel-container">
          <img 
            className="d-block w-100" 
          src="/images/little-puppy-basket.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carouselcaption metro-bold"> 
            <h1 className="fs-lg-1 ">Welcome Clients!</h1>
            <h3>We look forward to caring for your animals</h3>
            <a href="#contactus"><button className="btn btn-primary px-5 py-2 m-2">Book Appointment</button></a> 
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem interval= {8000} className="carousel-container">
          <img 
            className="d-block w-100" 
            src="/images/black man and dog edited.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="carouselcaption"> 
            <h1 className="fs-lg-1">Healthy pet is Essential!</h1>
            <h3>We provide all health care and grooming services</h3>
            <a href="#contactus"><button  className="btn btn-primary px-5 py-2 m-2">Book Appointment</button></a>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem interval= {8000} className="carousel-container">
          <img 
            className="d-block w-100" 
            src="/images/drug.jpeg"
            alt="First slide"
          />
          <Carousel.Caption className="carouselcaption"> 
            <h1 className="fs-lg-1">We Deliver to Your Doorstep!</h1>
            <h3>Quality Animal drugs, Vaccines and Care producs</h3>
            <button onClick={()=>redirectTo('/products')} className="btn btn-primary px-5 py-2 m-2">Order Now</button>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem interval= {8000} className="carousel-container">
          <img 
            className="d-block w-100 h-100" 
            src="/images/pet-accessories-still-life-with-food-bowl-treats-edited.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carouselcaption"> 
            <h1 className="fs-lg-1">We Deliver to Your Doorstep!</h1>
            <h3>Quality Pet Food and Accessories</h3>
            <button onClick={()=>redirectTo('/products')} className="btn btn-primary px-5 py-2 m-2">Order Now</button>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>

      <Container id="why" className="mx-auto my-4 my-lg-5 lh-lg">
        <h1 className="text-center bold text-dark">
          Why Choose Us
        </h1>
        <p className="mx-auto mw-md-50">
          Lotim Animal World, is a leading Veterinary Drug Store and Animal Health care facility.
          Here, we understand the deep connection you share with your animal companion and the desire to maximize profit
          in your livestock and poultry production. We know that your pet is indeed a family member. Just like you, we are pet lovers, pet owners, breeders and farmers.
          We know first hand this amazing journey, with all of its ups and downs, joys and challenges.
          Therefore we are here to provide you with all the help you need to care for pet and profit in your livestock and poultry business.
        </p>
        <div>
          <div className="text-center">
            <button onClick={()=>redirectTo('/about')} className="bold d-inline text-white btn btn-secondary d-inline">READ MORE</button>
          </div>
        </div>
      </Container>
      <Container className=" my-4 my-lg-5 lh-lg">
        <Row id="reasons" className="text-center gx-5">
          <Col md={6} className="mx-auto reason my-5 w-sm-100 shadow p-3">
            <Button className=" shadow cursor-unset rounded-pill mn"><img src="/images/outline_medication_white_24dp.png" alt="expert staff"/></Button>
            <h4 className="mt-3 text-dark">EXPERT STAFF</h4>
            <p>Our Veterinarians and other Staffs are proffessionals in their field.
            We prioritise your satisfaction.</p>
          </Col>
          <Col md={6} className="mx-auto reason my-5 shadow p-3">
            <Button className="cursor-unset mn shadow rounded-pill"><img src="/images/outline_local_shipping_white_24dp.png" alt="prompt delivery"/></Button>
            <h4 className="mt-3 text-dark">PROMPT DELIVERY</h4>
            <p>You can access our services and products from your comfort zone with our home delivery services.</p>
          </Col>
          <Col md={6} className="mx-auto reason my-5 shadow p-3">
            <Button className="cursor-unset mn shadow rounded-pill"><img src="/images/outline_forum_white_24dp.png" alt="effective communication"/></Button>
            <h4 className="mt-3 text-dark">EFFECTIVE COMMUNICATION</h4>
            <p>We aim to communicate about every aspect of your animal's health. You can reach us on all our channels and
            your concerns will be addressed promptly.</p>
          </Col>
          <Col md={6} className="mx-auto reason my-5 shadow p-3">
            <Button className="cursor-unset mn shadow rounded-pill"><img src="/images/outline_spa_white_24dp.png" alt="honesty and empathy"/></Button>
            <h4 className="mt-3 text-dark">HONESTY AND EMPATHY</h4>
            <p>We operate with absolute transparency and openness. We are devoted to providing the best medical care possible to your pets and for your business.</p>
          </Col>
          
        </Row>
      </Container>
      <div className="poultry-display" >
        <div className="carousel" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item poultry-carousel active">
              <img 
                className="d-block w-100" 
                src="/images/poultry.jpeg"
                alt="poultry"
                />
              <div class="carousel-caption carouselcaption">
                <h1 className="fs-lg-1">For Poultry Consultation</h1>
                <h3 className="">Purchase of Poultry Vaccines and Drugs</h3>
                <a href="#contactus"><button className="btn btn-primary px-5 py-2 m-2">Contact Us</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>


        <Row id="services" className="text-center mx-3 mx-md-0 my-5 justify-content-center">
          <Col xs={12} md={6} lg={4} className="m-4 shadow service p-0" >
            <img className="d-block w-100 service-img" src="/images/consultation edited.jpg" alt="consultation service" />
            <h5 className="text-dark mn-2 service-heading">CONSULTATION SERVICES</h5>
            <p className=" mx-4 lh-lg service-text">We offer online, walk-in, home or farm consultation for intending or existing pet owners, livestock or poultry farm owners.
              Work with us and maximize profit.
            </p>          
          </Col>
          <Col xs={12} md={6} lg={4} className="m-4 shadow service p-0">
            <img className="d-block w-100 service-img" src="/images/drugs edited.jpg" alt="animal drugs and vaccines" />
            <h5 className="text-dark mn-2 service-heading">ANIMAL DRUGS AND VACCINES</h5>
            <p className=" mx-4 lh-lg service-text">We sell, supply and deliver quality veterinary drugs and vaccines to pet owners and farmers.
            We have you covered with our delivery services.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className="m-4 shadow service p-0">
            <img className="d-block w-100 service-img" src="/images/farm management edited.jpg" alt="farm management" />
            <h5 className="text-dark mn-2 service-heading">FARM MANAGEMENT</h5>
            <p className=" mx-4 lh-lg service-text">We develop and implement farm plan that meets your goals and objectives and as well
            supervise farm operations and progress.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className="m-4 shadow service p-0">
            <img className="d-block w-100 service-img" src="/images/pet care edited.jpg" alt="consultation service" />
            <h5 className="text-dark mn-2 service-heading">PET CARE AND TREATMENT</h5>
            <p className=" mx-4 lh-lg service-text">We cater for your pet's health; vaccination, grooming, treatment and disease management.
            Do business with us to give your pet healthy and quality life.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className="m-4 shadow service p-0">
            <img className="d-block w-100 service-img" src="/images/pet accessories edited.jpg" alt="consultation service" />
            <h5 className="text-dark mn-2 service-heading">PET FOOD AND ACCESSORIES</h5>
            <p className=" mx-4 lh-lg service-text">We sell, supply and deliver quality pet food and accessories for your companions and guards.
            We have you covered with our delivery services.
            </p>
          </Col>
        </Row> 
      <Contact/>
     </div> 
  	)
}


export default Home;


export class Contact extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        contactMeansValue: "",
        reasonValue: "",
        fullname: "",
        contactEmail: "",
        contactNumber: "",
        enquiryDetails: "",
        appointmentDate: "",
        appointmentTime:" ",
        appointmentAim: "",
        validated: false,
        loading: false, 
        success: false
      }

    }

    handleDetails =(event)=>{
      const value = event.target.value
      const name = event.target.name;

      this.setState({
        [name]: value
      })

    }
    handleRefresh = (event)=>{
      const value = event.target.value;
      this.setState({
        [value]: ""
      })
    }

    handleContactMeans=(event)=>{
      this.setState({
        contactMeansValue: event.target.value
      });
    }
    

    handleReason=(event)=>{
      console.log(event.target, event.target.value);
      this.setState({
        reasonValue: event.target.value
      });
    }

     handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
     
      event.stopPropagation();
      this.setState({
        validated: true,
      });
      return;
    }
 
    this.setState({
        loading: true
      });
    
    axios.post("https://jsonplaceholder.typicode.com/posts/", 
      {...this.state, validated: undefined, loading: undefined, success: undefined})
      .then(response=>{
        console.log(response);
        this.setState({loading: false, success: true});   
      })
      .catch(err=>{
        console.log(err);
        this.setState({loader: false}); 
      })
    
  };

render(){
let reasonVal = this.state.reasonValue;
let success =this.state.success;
let loading =this.state.loading;
  
let contactMeansVal = this.state.contactMeansValue;


  return(
    
      <Container id="contactus" className=" contact p-3 mx-auto my-5 rounded-pill">
    {
      !success?
  
      <Form className="contact-form p-3 mt-4" 
      validated={this.state.validated} 
      noValidate
      onSubmit={this.handleSubmit}>
      <div className="text-center text-primary pt-2">
        <h3 className="mb-0">For Enquiry or Appointment</h3>
        <p ><small>Please fill the form below</small></p>
      </div>

        <Form.Group id="fullname" className="m-4">
           <Form.Label>Full Name</Form.Label> 
           <Form.Control type="text" 
           onChange={this.handleDetails}
           name="fullname"
           value={this.state.fullname} 
           placeholder="Full Name"
           required/>
           <p className="invalid-feedback">Please enter full name</p>
        </Form.Group>
      
        <Form.Select id="selectContact" className="m-4 select" 
        onChange={this.handleContactMeans} 
          name="contactMeansValue"
          required
          value={this.state.contactMeansValue}>
          <option value="">Please select preferred contact means</option>
          <option value ="1">Email</option>
          <option value ="2">Phone number</option>
          <option value ="3">Both</option>
          <p className="invalid-feedback">Please enter preferred contact means</p>
        </Form.Select>

        <div>
        {contactMeansVal==="1" &&(
          <Form.Group id="email" className="m-4">
           <Form.Label>Email Address</Form.Label> 
           <Form.Control type="email" 
           onChange={this.handleDetails}
           name="contactEmail"
           value={this.state.contactEmail}
           required 
           placeholder="Email Address"/>
           <p className="invalid-feedback">Please enter valid email address e.g. xmn@gmail.com</p>
        </Form.Group>
          )}</div>

        <div>{contactMeansVal==="2" &&( 
          <Form.Group id="phone number" className="m-4">
           <Form.Label>Phone number</Form.Label> 
           <Form.Control type="text" 
           onChange={this.handleDetails}
           name="contactNumber"
           value={this.state.contactNumber} 
           required
           pattern="[0]{1}[7-9]{1}[0-1]{1}[0-9]{8}" placeholder="Phone Number"/>
          <p className="invalid-feedback">Please enter valid phone number e.g. 07061234567</p>
        </Form.Group>
        )}</div>

        <div>{contactMeansVal==="3" &&( 
          <div>
          <Form.Group id="email" className="m-4">
           <Form.Label>Email Address</Form.Label> 
           <Form.Control type="email"
           onChange={this.handleDetails}
           name="contactEmail"
           value={this.state.contactEmail}
           required
           placeholder="Email Address"/>
           <p className="invalid-feedback">Please enter valid email address e.g. xmn@gmail.com</p>
        </Form.Group>
          <Form.Group id="phone number" className="m-4">
           <Form.Label>Phone number</Form.Label> 
           <Form.Control type="text"
           onChange={this.handleDetails} 
           name="contactNumber"
           value={this.state.contactNumber}
           pattern="[0]{1}[7-9]{1}[0-1]{1}[0-9]{8}" 
           required
           placeholder="Phone Number"/>
           <p className="invalid-feedback">Please enter valid phone number e.g. 07061234567</p>
          </Form.Group>
        </div>
        )}</div>
         
          <div>{contactMeansVal==="" &&("")}
        </div>

        <Form.Select className="m-4 select" 
          onChange={this.handleReason}
          name="reasonValue" 
          value={this.state.reasonValue}
          required>
          <option value="">Please select reason for contact</option>
          <option value ="1">Enquiry</option>
          <option value ="2">Appointment</option>
          <p className="invalid-feedback">Please select reason for contact</p>
        </Form.Select>
        <div>
        {reasonVal==="1" &&(
          <Form.Group id="enquiry" className="m-4">
           <Form.Label>Enquiry Details</Form.Label> 
           <Form.Control as="textarea"
           onChange={this.handleDetails} 
           name="enquiryDetails"
           value={this.state.enquiryDetails}
           required 
           rows={3} placeholder="What would you like to know"/>
           <p className="invalid-feedback">Please enter enquiry details</p>
        </Form.Group>
          )}</div>

        <div>{reasonVal==="2" &&( 
          <div>
            <Form.Group id="appointment date" className="m-4">
             <Form.Label>Preferred appointment date</Form.Label> 
             <Form.Control type="date"
             onChange={this.handleDetails}
             name="appointmentDate"
              value={this.state.appointmentDate}/>
            </Form.Group>
            <Form.Group id="appointment time" className="m-4">
             <Form.Label>Preferred appointment time</Form.Label> 
             <Form.Control type="time"
             onChange={this.handleDetails}
              name="appointmentTime"
              value={this.state.appointmentTime}/>
            </Form.Group>
            <Form.Select className="m-4 select"
            onChange={this.handleDetails}
            name="appointmentAim" 
            required
            value={this.state.appointmentAim}> 
              <option>Please select the aim of this meeting</option>
              <option value ="1">Unhealthy pet or animal</option>
              <option value ="2">Professional guidance</option>
              <option value ="3">Purchase of goods</option>
              <option value ="4">Animal health consultation</option>
              <option value ="5">Poultry or livestock farm management</option>
              <option value ="6">Others</option>
              <p className="invalid-feedback">Please select the aim of this meeting</p>
            </Form.Select>
          </div>
        )}</div>
         
          <div>{reasonVal==="" &&("")}
        </div>

        <div className="text-center">
        <Button variant="primary" type="submit">Submit
          {loading?<Spinner className="mx-2"
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />: null}
        </Button>

        </div>
      </Form>:
      <Container id="contactus" className=" text-center contact p-3 mx-auto my-5 rounded-pill">
       <div className="">
       <Button className="btn-primary p-3 mb-2 rounded-circle"><img src="/images/outline_check_white_24dp.png" alt="submitted succesfully"/></Button>
       <h5 className="p-3 my-2">Your Enquiry/Appointment request has been submitted succesfully!</h5>
       <p className="p-3 my-2">We will contact you shortly</p>
       </div>
      </Container>
      
    }
      
    </Container>
  )
}
}


