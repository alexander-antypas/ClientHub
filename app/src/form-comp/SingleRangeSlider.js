import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

function SingleRangeSlider() {

  const [ value, setValue ] = React.useState(30);

  const smallinput = {
    width: '55px',
    height: '25px',
  }
  const longslider = {
    width: '100%',
    margin: 'auto',
  }

  return (   
    <Form.Group as={Row}>
        <Col xs="9">
            <RangeSlider
            onChange={e => setValue(e.target.value)}
            variant='dark'
            style={longslider}
            />
        </Col>
        <Col xs="3">
            <Form.Control value={value} style={smallinput}/>
        </Col>
    </Form.Group>
  );
}

export default SingleRangeSlider;
