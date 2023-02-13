import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MapGoogleApi from "../../common/MapGoogleApi";
import GetQuoteForm from "./GetQuoteForm";

const GetQuote = () => {
  // const [origin,setOrigin]=useState({});
  // const [destination,setDestination]=useState({});
  // const [IsShow,setIsShow]=useState(false)
  // const mapDirectionHandler = (origin, destination) => {
    // setOrigin(origin);
    // setDestination(destination)
  // };
  return (
    <Row className="section-getquote  align-items-center">
      <Col lg={6}>
        <Card className="section-getquote__card">
          <h4 className="section-getquote__title">GET A QUOTE</h4>
          <GetQuoteForm  />
        </Card>
      </Col>
      <Col lg={6}>
        {/* <MapGoogleApi origin={origin} destination={destination}/>  */}
        <MapGoogleApi /> 

        {/* <img src="./images/getaquotecar.png" className="section-getquote__img"/> */}
      </Col>
    </Row>
  );
};
export default GetQuote;
