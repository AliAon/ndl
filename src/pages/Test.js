const Test = (props) => {
  const getlocationhanlder=(pos)=>{
  const {latitude,longitude}=pos.coords
  const center={
    lat: latitude,
    lng: longitude
  }
  
  }
  window.navigator.geolocation.getCurrentPosition(getlocationhanlder)
  return ;
};
export default Test;
