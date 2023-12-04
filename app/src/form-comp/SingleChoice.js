import React from 'react';
import { Form } from 'react-bootstrap';

function SingleChoice() {

  return (
    <Form.Group className="mb-3">
        <Form.Check type="radio" label="first radio" name="formHorizontalRadios" id="formHorizontalRadios1" />
        <Form.Check type="radio" label="second radio" name="formHorizontalRadios" id="formHorizontalRadios2" />
        <Form.Check type="radio" label="third radio" name="formHorizontalRadios" id="formHorizontalRadios3" />
    </Form.Group>
  );
}

export default SingleChoice;
