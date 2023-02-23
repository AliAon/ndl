import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { BASE_URL } from "../../../common/Config";
import { Fragment, useEffect, useState } from "react";
import { useSnackbar } from 'react-simple-snackbar'

function ModelForm(props) {
  const {car,bookdate,booktime,distance,duration,from,to,form_type,flight_no}=props.bookeddata
  let data;
  if(form_type==='point_to_point'){
     data = {
      location_from: from,
      location_to: to,
      date: bookdate,
      pick_up_time: booktime,
      car: car,
      distance: distance,
      duration: duration,
      flight_no:flight_no,
      ride_type: "Point to Point",
    }
  }else if(form_type==='hourly'){
    data = {
      location_from: from,
      date: bookdate,
      pick_up_time: booktime,
      car: car,
      ride_type: "hourly",
    }
  }
  

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [completeuserdata,setcompleteuserdata]=useState({})
  const [IsshowPayWithCard, SetshowPayWithCard] = useState(false);
  const [IsHideFrom, SetIsHideFrom] = useState(true);
  const options = {
    position: 'top-center',
    style: {
      backgroundColor: '#8f5e25',
      color: 'white',
      fontFamily: 'Manrope',
      fontSize: '18px',
      textAlign: 'center',
    },
    closeStyle: {
      color: 'white',
      fontSize: '16px',
    },
  }
  const [openSnackbar, closeSnackbar] = useSnackbar(options)

  let userData;

  const firstnamehandler = (e) => {
  
    setFirstname(e.target.value);

  };
  const lastnamehandler = (e) => {
    setLastname(e.target.value);
 
  };
  const phonenohandler = (e) => {
    setphoneno(e.target.value);
   
  };

  const HideModelHandler = () => {
   props.onsetModalShow(false);
 };


 //Geting fare from GetQuoteComponent
  const bfare = parseFloat(props.fare);
  const product={
    name:"payment",
    amount:bfare
  }

  //sending token and user data to backend after payment
  const TokenUserDataHandler=async(token,userData)=>{
    console.log('userData',data)
    const result=await axios.post(`${BASE_URL}/payment/Stripe`,
    {
      product, 
      token
    })
    const quoteData={
      ...userData,
      payments: result.data.data._id,
      email: result.data.data.user_email
    }
  // sendng Quote
    const quoteresult=await axios.post(`${BASE_URL}/quote/create`,quoteData)
  }
 
  const modelformhandler=(e)=>{
    e.preventDefault()
    userData={
      ...data,
      user_firstName: firstname,
      user_lastName: lastname,
      user_phoneNumber: phoneno,
    }
    setcompleteuserdata(userData)
    setFirstname('')
    setLastname('')
    setphoneno('')
    SetIsHideFrom(false)
    SetshowPayWithCard(true)
  }
   //get token and
   const onToken = (token) => {
    console.log('Stripe Token',token);
    console.log("btn clicked");
   TokenUserDataHandler(token, completeuserdata);
   openSnackbar('Payment Successfull!')
   props.OnresetForm()
  };
  //on Closed
  const oncloseHandler=()=>{
   console.log('popup closed')
  }
 
  return (
    <Fragment>
   {IsHideFrom && <Form onSubmit={modelformhandler} className="mb--10 mt--20" >
   <h6 className='section__description text-center'>Provide the following info</h6>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={firstnamehandler}
          required
        />
        <small class="form-text text-muted">firstname is required.</small>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Last Name"
          onChange={lastnamehandler}
          value={lastname}
          required
        />
      <small class="form-text text-muted">lastname is required.</small>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="tel"
          placeholder="+91 336 7788 755"
          onChange={phonenohandler}
          value={phoneno}
          pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          required
        />
        <small class="form-text text-muted">phone is required.</small>

      </Form.Group>
      <Row className="justify-content-between">
        <Col className="text-right">
      
            <Button
              className="btn-block product-one-card__product-btn"
              type="submit"
              
              >
              Pay Now
            </Button>
        
        </Col>
      </Row>
    </Form>}
    { IsshowPayWithCard &&<Row>
      <Col>
      <h6 className='section__description text-center'>Click And Pay</h6>

         <StripeCheckout
            token={onToken}
            amount={bfare * 100}
            currency="USD"
            closed={oncloseHandler}
            stripeKey="pk_test_51MbP29IRuNLD0p1RwfZ6DKGA3kXPzLe3jZSLbdmRMYyfYcLGIXFtwusNNnf7VVjCANLCUsuyw7GSFo7kiCmSB5Rr00WT8ybijK"
          >
            <Button
              className="btn-block product-one-card__product-btn"
              onClick={HideModelHandler}              
              >
              Pay With Card
            </Button>
          </StripeCheckout>
        
      </Col>
    </Row>}
    </Fragment>
  );
}

export default ModelForm;
