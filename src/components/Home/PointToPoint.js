import { useCallback, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MapGoogleApi from "../../common/MapGoogleApi";
import PointGetQuoteForm from "./PointGetQuoteForm";

const PointToPoint = () => {
  const [origin,setOrigin]=useState({});
  const [destination,setDestination]=useState({});
  const [distance,setDistance]=useState('')
  const [duration,setDuration]=useState('')
  const [IsShow,setIsShow]=useState(false)
  const [mileperrate,setmileperrate]=useState(null)
  const [totalprice,settotalprice]=useState(0)
  const [fromlocationname,setfromlocationname]=useState('')
  const [tolocationname,settolocationname]=useState('')
  const [tollPrice, setTollPrice] = useState(0);

  const mapDirectionHandler = (origin, destination,permilerate,fromlocationname,tolocationname) => {
    setOrigin(origin);
    setDestination(destination)
    setmileperrate(permilerate)
    setfromlocationname(fromlocationname)
    settolocationname(tolocationname)
  };
  //Get Distance/Duration from MapGoogleApiComponnent
  const DistanceDurationHandler=(distance,duration)=>{
    setDistance(distance)
    setDuration(duration)
    CalculateBasicFarePerMileRate(distance,mileperrate)
  }
  //Geting miles
  const CalculateBasicFarePerMileRate=(distance,mileperrate)=>{

    //SET TollPrices If Needed
    if (
      fromlocationname.includes("New York") || fromlocationname.includes("NY") &&
      tolocationname.includes("New York") || tolocationname.includes("NY")
    ) {
      setTollPrice(14.76);
    } else if (
      fromlocationname.includes("New Jersey") || fromlocationname.includes("NJ") &&
      tolocationname.includes("NJ")
    ) {
      setTollPrice(22.99);
    } else if (
      fromlocationname.includes("Boston") &&
      tolocationname.includes("Boston")
    ) {
      setTollPrice(4);
    }

    //SET Basic fare plus TollPrices If Needed
    const km=distance.split(' ')[0]
    const miles=km*0.62137
    const basicfare=miles*mileperrate
    console.log('basicfare',basicfare)
    console.log('tollPrice',tollPrice)
    const faretollprice=parseFloat(basicfare+tollPrice).toFixed(2);
    settotalprice(faretollprice)
  } 
  return (
    <Row className="section-getquote pt--20">
      <Col lg={6}>
        <Card className="section-getquote__card">
          <h4 className="section-getquote__title">Point To Point</h4>
          <PointGetQuoteForm onDirectionHandler={mapDirectionHandler} totalprice={totalprice} distance={distance} duration={duration} />
        </Card>
      </Col>
      <Col lg={6}>
        <MapGoogleApi origin={origin} destination={destination} onGetDistanceDuration={DistanceDurationHandler}/> 
        {/* <img src="./images/getaquotecar.png" className="section-getquote__img"/> */}
      </Col>
    </Row>
  );
};
export default PointToPoint;
