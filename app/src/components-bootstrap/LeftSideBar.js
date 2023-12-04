import React, { useState } from 'react';
import styles from '../style.module.css'; // Correct path to your CSS file
import { Button, Form } from 'react-bootstrap';
import MyMultiRangeSlider from '../form-comp/MyMultiRangeSlider';
import SingleRangeSlider from '../form-comp/SingleRangeSlider'
import DropDown from '../form-comp/DropDown';
import MultipleChoice from '../form-comp/MultipleChoice';
import SingleChoice from '../form-comp/SingleChoice';

function LeftSideBar() {

  //VARIABLES
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //SIDEBAR
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  //CSS
  const buttonStyle = {
    width: '50px',
    height: '50px',
    transition: 'transform 0.3s ease-in-out',
    transform: sidebarOpen ? 'rotate(90deg)' : 'rotate(0)',
    
  };
  const sidebarStyle = {
    height: '100vh',
    border: '1px solid #000',
  };

  return (
    <div className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${sidebarOpen ? styles.open : styles.closed}`} style={sidebarStyle}>
      <Button onClick={toggleSidebar} style={buttonStyle} variant="secondary">
        | | |
      </Button>
      {sidebarOpen && (
        <div className="sidebar-content d-flex flex-column align-items-center justify-content-center">
          <Form>
            <br/><br/>
            <Form.Label> Filters</Form.Label>
            <br/><br/>
            <DropDown/>
            <br/><br/>
            <MyMultiRangeSlider/>
            <br/><br/><br/><br/>
            <SingleRangeSlider/>
            <br/><br/>
            <MultipleChoice/>
            <br/><br/>
            <SingleChoice/>
            <br/><br/>
            <Form.Group className="mb-3" controlId="formHorizontalCheck">
                <Form.Check label="Remember filters"/>
                <br/>
                <Button type="submit" variant="secondary">Run Algorithm</Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </div>
  );
}

export default LeftSideBar;
