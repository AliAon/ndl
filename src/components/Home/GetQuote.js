import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MapGoogleApi from "../../common/MapGoogleApi";
import GetQuoteForm from "./GetQuoteForm";

const GetQuote = () => {
  const [origin,setOrigin]=useState({});
  const [destination,setDestination]=useState({});
  const [distance,setDistance]=useState('')
  const [duration,setDuration]=useState('')
  const [IsShow,setIsShow]=useState(false)
  const mapDirectionHandler = (origin, destination) => {
    setOrigin(origin);
    setDestination(destination)
  };
  //Get Distance/Duration from MapGoogleApiComponnent
  const DistanceDurationHandler=(distance,duration)=>{
    setDistance(distance)
    setDuration(duration)
  }
  return (
    <Row className="section-getquote  align-items-center">
      <Col lg={6}>
        <Card className="section-getquote__card">
          <h4 className="section-getquote__title">GET A QUOTE</h4>
          <GetQuoteForm onDirectionHandler={mapDirectionHandler} distance={distance} duration={duration} />
        </Card>
      </Col>
      <Col lg={6}>
        <MapGoogleApi origin={origin} destination={destination} onGetDistanceDuration={DistanceDurationHandler}/> 
        {/* <img src="./images/getaquotecar.png" className="section-getquote__img"/> */}
      </Col>
    </Row>
  );
};
export default GetQuote;
