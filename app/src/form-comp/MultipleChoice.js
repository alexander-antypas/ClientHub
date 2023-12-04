import React from 'react';
import { Form } from 'react-bootstrap';

function MultipleChoice() {

  const dropdownOptions = ['Option_1', 'Option_2', 'Option_3'];
  const selectedOptions = [];

  const handleCheckboxChange = (option) => {
    const index = selectedOptions.indexOf(option);
    if (index === -1) {
      selectedOptions.push(option);
    } else {
      selectedOptions.splice(index, 1);
    }
    console.log('Selected Options:', selectedOptions);
  };

  return (
    <Form.Group>
        {dropdownOptions.map((option) => (
        <Form.Check key={option} type="checkbox" label={option} onChange={() => handleCheckboxChange(option)} />
        ))}
    </Form.Group>
  );
}

export default MultipleChoice;
