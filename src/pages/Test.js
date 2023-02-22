import React, { useState } from 'react';
import Select from 'react-select';
import { suvHours } from '../data/HoursData';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

const options=suvHours.map((el)=>{
  return {
    value:el.val,
    label:el.hour
  }
})

function Test() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        maxMenuHeight={170}
        options={options}
      
      />
    </div>
  );
}
export default Test