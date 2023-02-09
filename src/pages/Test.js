import React from 'react';
import Autocomplete from "react-google-autocomplete";
const Test=()=>{
    return(
        <Autocomplete
        className='form-control'
        apiKey="AIzaSyDR6G4AS86R9DJssrIMxtm1KV875LZzbgA"
        options={
          {
            types:["(regions)"]
          }
        }
        onPlaceSelected={(place) => {
          console.log(place);
        }}
      />
    )
   
}
export default Test