import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { BASE_URL } from "../../../common/Config";
import { useEffect, useState } from "react";
function ModelForm(props) {
  const {car,bookdate,booktime,distance,duration,from,to}=props.bookeddata
  const data = {
    location_from: from,
    location_to: to,
    date: bookdate,
    pick_up_time: booktime,
    car: car,
    distance: distance,
    duration: duration,
    ride_type: "Point to Point",
  }

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [IsshowPayWithCard, SetshowPayWithCard] = useState(false);
  const [Isfirstnamempty, SetIsfirstnamempty] = useState(true);
  const [Islastnamempty, SetIslastnamempty] = useState(true);
  const [Isphonenoempty, SetIsphonenoempty] = useState(true);
  let userData;

  const firstnamehandler = (e) => {
    if(e.target.value!==''){
      SetIsfirstnamempty(false)
    }else{
      SetIsfirstnamempty(true)
    }
    setFirstname(e.target.value);

  };
  const lastnamehandler = (e) => {
    setLastname(e.target.value);
    if(e.target.value==''){
      SetIslastnamempty(true)
   }else{
    SetIslastnamempty(false)
   }
  };
  const phonenohandler = (e) => {
    setphoneno(e.target.value);
    if(e.target.value==''){
      SetIsphonenoempty(true)
   }else{
    SetIsphonenoempty(false)
   }
  };

  useEffect(()=>{
    if(Isfirstnamempty===false && Islastnamempty===false && Isphonenoempty===false){
      SetshowPayWithCard(true)
    }else{
      SetshowPayWithCard(false)
    }
  },[firstname,lastname,phoneno])

  const HideModelHandler = () => {
    userData={
     ...data,
     user_firstName: firstname,
     user_lastName: lastname,
     user_phoneNumber: lastname,
   }
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
    console.log(quoteresult)
  }
  //get token and
  const onToken = (token) => {
    console.log(token);
    console.log("btn clicked");
    TokenUserDataHandler(token, userData);
  };
  return (
    <Form className="mb--10 mt--20" >
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
          placeholder="+1 (000) 000-000"
          onChange={phonenohandler}
          value={phoneno}
          required
        />
        <small class="form-text text-muted">phone is required.</small>

      </Form.Group>
      <Row className="justify-content-between">
        <Col className="text-right">
         {IsshowPayWithCard && <StripeCheckout
            token={onToken}
            amount={bfare * 100}
            currency="USD"
            
            stripeKey="pk_test_51MbP29IRuNLD0p1RwfZ6DKGA3kXPzLe3jZSLbdmRMYyfYcLGIXFtwusNNnf7VVjCANLCUsuyw7GSFo7kiCmSB5Rr00WT8ybijK"
          >
            <Button
              className="btn-block product-one-card__product-btn"
              onClick={HideModelHandler}
              >
              Pay With Card
            </Button>
          </StripeCheckout>
        }
        </Col>
      </Row>
    </Form>
  );
}

export default ModelForm;
