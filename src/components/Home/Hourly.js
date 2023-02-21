import { useCallback, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MapGoogleApi from "../../common/MapGoogleApi";
import HourlyGetQuoteForm from "./HourlyGetQuoteForm";
import PointGetQuoteForm from "./PointGetQuoteForm";

const Hourly = () => {
  const [origin,setOrigin]=useState({});
  const [destination,setDestination]=useState({});
  const [distance,setDistance]=useState('')
  const [duration,setDuration]=useState('')
  const [IsShow,setIsShow]=useState(false)
  const [mileperrate,setmileperrate]=useState(null)
  const [totalprice,settotalprice]=useState(0)

  const mapDirectionHandler = (origin,permilerate) => {
    setOrigin(origin);
    setmileperrate(permilerate)
  };
  // //Get Distance/Duration from MapGoogleApiComponnent
  // const DistanceDurationHandler=(distance,duration)=>{
  //   setDistance(distance)
  //   setDuration(duration)
  //   CalculateBasicFarePerMileRate(distance,mileperrate)
  // }
  // //Geting miles
  // const CalculateBasicFarePerMileRate=(distance,mileperrate)=>{
  //   const km=distance.split(' ')[0]
  //   const miles=km*0.62137
  //   const basicfare=(miles*mileperrate).toFixed(2)
  //   settotalprice(basicfare)
  // } 
  return (
    <Row className="section-getquote  align-items-center">
      <Col lg={6}>
        <Card className="section-getquote__card">
          <h4 className="section-getquote__title">Hourly Bases</h4>
          <HourlyGetQuoteForm onDirectionHandler={mapDirectionHandler} totalprice={totalprice} distance={distance} duration={duration} />
        </Card>
      </Col>
      <Col lg={6}>
        {/* <MapGoogleApi origin={origin} destination={destination} onGetDistanceDuration={DistanceDurationHandler}/>  */}
        {/* <img src="./images/getaquotecar.png" className="section-getquote__img"/> */}
      </Col>
    </Row>
  );
};
export default Hourly;
