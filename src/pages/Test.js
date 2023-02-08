import React from 'react';
import Autocomplete from "react-google-autocomplete";
const Test=()=>{
    return(
        <Autocomplete
        className='form-control'
        apiKey=""
        onPlaceSelected={(place) => {
          console.log(place);
        }}
      />
    )
   
}
export default Test