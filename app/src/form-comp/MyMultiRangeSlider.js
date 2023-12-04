import React from 'react';
import {Form} from 'react-bootstrap';
import MultiRangeSlider from "./MultiRangeSlider";

function MyMultiRangeSlider() {
  return (
    <Form.Group>
        <MultiRangeSlider
            min={0}
            max={100}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
    </Form.Group>      
  );
}

export default MyMultiRangeSlider;
