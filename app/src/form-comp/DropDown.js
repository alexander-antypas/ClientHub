import React, { useEffect, useState, useRef } from 'react';
import { Form, Dropdown } from 'react-bootstrap';

function DropDown({options, defaultValue, onChange }) {

  const [opValue, setOption] = useState(defaultValue);
  const defaultValueRef = useRef(defaultValue);
  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ defaultValue: opValue});
  }, [opValue, onChange]);

  return (
    <Form.Group>
        <Dropdown onSelect={(event) => {
            setOption(event);
            defaultValueRef.current = event;
          }}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {defaultValue}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {options.map((option) => (
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
