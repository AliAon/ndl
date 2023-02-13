import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MapGoogleApi from "../../common/MapGoogleApi";
import GetQuoteForm from "./GetQuoteForm";
const apiKey = "AIzaSyDR6G4AS86R9DJssrIMxtm1KV875LZzbgA";

const GetQuote = () => {
  const origin = {
  lat: 31.718730053558804,
  lng: 73.98695371750617
};
const destination = {
  lat: 31.52562331681787,
  lng: 74.35513346567933
};
  // const [origin,setOrigin]=useState({});
  // const [destination,setDestination]=useState({});
  // const [IsShow,setIsShow]=useState(false)
  const mapDirectionHandler=(origin,destination)=>{
    // setOrigin(origin);
    // setDestination(destination)
  }
  return (
    <Row className="section-getquote  align-items-center">
        <Col lg={6}>
            <Card className="section-getquote__card">
                <h4 className="section-getquote__title">GET A QUOTE</h4>
                <GetQuoteForm  onMapDirection={mapDirectionHandler}/>
            </Card>
        </Col>
        <Col lg={6}>
         <MapGoogleApi origin={origin} destination={destination}/> 
        {/* <img src="./images/getaquotecar.png" className="section-getquote__img"/> */}
        </Col>
    </Row>
  );
};
export default GetQuote;
