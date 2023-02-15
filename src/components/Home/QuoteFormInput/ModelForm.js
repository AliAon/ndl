import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
function ModelForm(props) {
  const HideModelHandler=()=>{
    props.onsetModalShow(false)
  }
  const onToken = (token) => {
    console.log(token);
    console.log("btn clicked");
    //  TokenUserDataHandler(token, userData);
  };
  const bfare = 10;
  return (
    <Form className="mb--10 mt--20">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="tel" placeholder="+1 (000) 000-000" />
      </Form.Group>
      <Row className="justify-content-between">
        <Col className="text-right">
          <StripeCheckout
            token={onToken}
            amount={bfare * 100}
            currency="USD"
            stripeKey="pk_test_51MbP29IRuNLD0p1RwfZ6DKGA3kXPzLe3jZSLbdmRMYyfYcLGIXFtwusNNnf7VVjCANLCUsuyw7GSFo7kiCmSB5Rr00WT8ybijK"
          >
            <Button
              className="btn-block product-one-card__product-btn" onClick={HideModelHandler}
            >
              Pay With Card
            </Button>
          </StripeCheckout>
        </Col>
      </Row>
    </Form>
  );
}

export default ModelForm;
