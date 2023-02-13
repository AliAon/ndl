import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  InfoBox,
  LoadScript,
  DistanceMatrixService,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import MapGoogleApi from "../common/MapGoogleApi";
const containerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 0,
  lng: -180,
};
const origin = {
  lat: 31.718730053558804,
  lng: 73.98695371750617
};
const destination = {
  lat: 31.52562331681787,
  lng: 74.35513346567933
};
const apiKey = "AIzaSyDR6G4AS86R9DJssrIMxtm1KV875LZzbgA";

const Test = (props) => {
  const [response, setresponse] = useState("");
  const onClickHander = (e) => {};
  const directionsRendererOptions = {
    destination: destination,
    origin:origin,
    travelMode: "DRIVING",
  };

  const directionsCallback = (res) => {
    setresponse(res);
  };
  const distancehandler = (res) => {
    const {rows}=res
    console.log('Distance',rows[0].elements[0].distance.text)
    console.log('Duration',rows[0].elements[0].duration.text)

  };
  return (
    <Row>
      <Col>
        <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
          <Autocomplete>
            <>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  color="#DAC683"
                  className="form-control input-from__input shadow-none"
                  placeholder=""
                />
              </div>
            </>
          </Autocomplete>
        </LoadScript>
      </Col>
      <Col>
        <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            mapContainerClassName="mapstyle"
            center={center}
            zoom={2}
            onClick={onClickHander}
          >
            <DirectionsService
              options={directionsRendererOptions}
              callback={directionsCallback}
            />
            <DirectionsRenderer
              options={{
                directions: response,
              }}
            />
            <DistanceMatrixService
              callback={distancehandler}
              options={{
                destinations: [destination],
                origins: [origin],
                travelMode: "DRIVING",
              }}
            />
          </GoogleMap>
         
        </LoadScript>{" "}
      </Col>
    </Row>
  );
};
export default Test;
