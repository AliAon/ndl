import React, { useState } from "react";
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
const containerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 0,
  lng: -180,
};

const apiKey = "AIzaSyDR6G4AS86R9DJssrIMxtm1KV875LZzbgA";

const FromInput = (props) => {
  return (
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
              name="location_from"
              id="location_from"
              color="#DAC683"
              placeholder="From"
              style={{
                height: "30px",
                width: "100%",
                margin: "5px",
                backgroundColor: "#343434",
                color: "#DAC683",
                borderRadius: "5px",
                border: "1px solid white",
              }}
            />
          </div>
        </>
      </Autocomplete>
    </LoadScript>
  );
};
export default FromInput;
