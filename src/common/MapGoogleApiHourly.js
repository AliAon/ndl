import React, { useCallback, useEffect, useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  InfoBox,
  LoadScript,
  DistanceMatrixService,
  Marker,
} from "@react-google-maps/api";
const containerStyle = {
  height: "400px",
  width: "100%",
};

// const center = {
//   lat: 0,
//   lng: -180,
// };

// const origin = {
//   lat: 31.718730053558804,
//   lng: 73.98695371750617
// };
// const destination = {
//   lat: 31.52562331681787,
//   lng: 74.35513346567933
// };
const apiKey = "AIzaSyDR6G4AS86R9DJssrIMxtm1KV875LZzbgA";

const MapGoogleApiHourly = (props) => {
  const [CurrentLatLon, setCurrentLatLon] = useState({
    lat: 31.541990736853904,
    lng: 74.36893749666083,
  });
  const onClickHander = (e) => {};
  const { origin} = props;
  //Geting Current Location
  useEffect(() => {
    const getlocationhanlder = (pos) => {
      const { latitude, longitude } = pos.coords;
      setCurrentLatLon({
        lat: latitude,
        lng: longitude,
      });
    };
    window.navigator.geolocation.getCurrentPosition(getlocationhanlder);
  
  }, []);
  useEffect(()=>{
    if(origin.hasOwnProperty('lat')){
        setCurrentLatLon(origin);
    }else{
        console.log('Nooooo')
    }
  },[origin])


  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        mapContainerClassName="mapstyle"
        center={CurrentLatLon}
        zoom={15}
        onClick={onClickHander}
      >
       <Marker position={
          CurrentLatLon
        }/>
      </GoogleMap>
    </LoadScript>
  );
};
export default MapGoogleApiHourly;
