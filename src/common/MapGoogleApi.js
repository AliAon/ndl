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

const MapGoogleApi = (props) => {
  const [showmapmark,setShowmapmark]=useState(true)
  const [showdistandirection,setshowdistandirection]=useState(true)
  const [response, setresponse] = useState("");
  const [maporigin,setmaporigin]=useState({})
  const [mapdestination,setmapdestination]=useState({})
  const [CurrentLatLon, setCurrentLatLon] = useState({
    lat: 31.541990736853904,
    lng: 74.36893749666083,
  });
  const onClickHander = (e) => {};
  const { origin, destination } = props;
  //set origin & destination

  const onloadmaphandler=()=>{
    setmaporigin(origin)
    setmapdestination(destination)
  }


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

  const directionsRendererOptions = {
    destination: destination,
    origin: origin,
    travelMode: "DRIVING",
  };
  const directionsCallback = (res) => {
    setresponse(res);
    setShowmapmark(false)
  };
  const distancehandler = (res) => {
    const { rows } = res;
    const distance = rows[0]?.elements[0].distance.text;
    const duration = rows[0]?.elements[0].duration.text;
    props.onGetDistanceDuration(distance, duration);
  };

  useEffect(()=>{
    if(origin.hasOwnProperty('lat')){
      console.log('hasOwnProperty','origin',origin)
      console.log('hasOwnProperty','origin',destination)
      setshowdistandirection(true)
      setShowmapmark(false)


    }else{
      console.log('origin',origin)
      console.log('destination',destination)
      setCurrentLatLon((prev)=>{
        return prev
      })
      setShowmapmark(true)
      setshowdistandirection(false)
    }
  },[origin,destination])

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        mapContainerClassName="mapstyle"
        center={CurrentLatLon}
        zoom={15}
        onLoad={onloadmaphandler}
        onClick={onClickHander}
      >
       {showmapmark && <Marker position={
          CurrentLatLon
        }/>}
         <DirectionsService
          options={directionsRendererOptions}
          callback={directionsCallback}
        />
        {showdistandirection && <DirectionsRenderer
          options={{
            directions: response,
          }}
        />}
        <DistanceMatrixService
          callback={distancehandler}
          options={{
            destinations: [destination],
            origins: [origin],
            travelMode: "DRIVING",
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};
export default React.memo(MapGoogleApi);
