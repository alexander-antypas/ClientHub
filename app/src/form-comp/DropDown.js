import React from 'react';
import { Form, Dropdown } from 'react-bootstrap';

function DropDown() {

  const dropdownOptions = ['Option_1', 'Option_2', 'Option_3'];
  
  const handleDropdownSelect = (selectedValue) => {
    console.log('Selected Option:', selectedValue);
  };

  return (
    <Form.Group>
        <Dropdown onSelect={handleDropdownSelect}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Select an Option
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {dropdownOptions.map((option) => (
            <Dropdown.Item key={option} eventKey={option}>
                {option}
            </Dropdown.Item>
            ))}
        </Dropdown.Menu>
        </Dropdown>
    </Form.Group>
  );
}

export default DropDown;
