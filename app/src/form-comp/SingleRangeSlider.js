import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

function SingleRangeSlider({ max, min, step, defaultValue, onChange }) {
  
  const smallinput = {
    width: '55px',
    height: '25px',
  };
  const longslider = {
    width: '100%',
    margin: 'auto',
  };

  return (
    <Form.Group as={Row}>
      <Col xs="9">
        <RangeSlider
          variant="dark"
          max={max}
          min={min}
          step={step}
          defaultValue={defaultValue}
          style={longslider}
          onChange={onChange}
        />
      </Col>
      <Col xs="3">
        <Form.Control value={defaultValue} style={smallinput} size="sm" />
      </Col>
    </Form.Group>
  );
}

export default SingleRangeSlider;
