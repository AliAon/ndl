import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import Autocomplete from "react-google-autocomplete";
const Test = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker placeholderText="Select Date" selected={startDate} onChange={(date) => setStartDate(date)} />
    );    //   <Autocomplete
    //   className='form-control'
    //   apiKey="AIzaSyDR6G4AS86R9DJssrIMxtm1KV875LZzbgA"
    //   options={
    //     {
    //       types:["(regions)"]
    //     }
    //   }
    //   onPlaceSelected={(place) => {
    //     console.log(place);
    //   }}
    // />
 
};
export default Test;
