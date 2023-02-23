import {useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import MapGoogleApiHourly from "../../common/MapGoogleApiHourly";
import HourlyGetQuoteForm from "./HourlyGetQuoteForm";

const Hourly = () => {
  const [origin,setOrigin]=useState({});
  const mapDirectionHandler = (origin) => {
    setOrigin(origin);
  };
  return (
    <Row className="section-getquote pt--20">
      <Col lg={6}>
        <Card className="section-getquote__card">
          <h4 className="section-getquote__title">Hourly Bases</h4>
          <HourlyGetQuoteForm onDirectionHandler={mapDirectionHandler}  />
        </Card>
      </Col>
      <Col lg={6}>
        <MapGoogleApiHourly origin={origin} /> 
      </Col>
    </Row>
  );
};
export default Hourly;
