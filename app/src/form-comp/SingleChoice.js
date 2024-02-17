import React from 'react';
import { Form } from 'react-bootstrap';

function SingleChoice({name, choices, onChange }) {
  return (
    <Form.Group className="mb-3">
      {choices.map((choice, index) => (
        <Form.Check
          key={index}
          type="radio"
          label={choice}
          name={choice}
          id={`${name}${index}`}
          onChange={onChange} // Call the onChange callback when the radio button is selected
        />
      ))}
    </Form.Group>
  );
}

export default SingleChoice;
