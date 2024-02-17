import React, { useState } from 'react';
import styles from '../style.module.css'; // Correct path to your CSS file
import { Button, Form } from 'react-bootstrap';
import MultiRangeSlider from '../form-comp/MultiRangeSlider';
import SingleRangeSlider from '../form-comp/SingleRangeSlider'
import Collapse from 'react-bootstrap/Collapse';

function Spatial() {
  //#region general 
  const handleClearButtonClick = () => {
    window.location.reload();
  };
  const [rememberChecked, setRememberChecked] = useState(false);

  const handleRememberChange = (e) => {
    setRememberChecked(e.target.checked);
  };
  //VARIABLES for collapse
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  //#endregion
  //#region FORM VARIABLES
  //multiple range(2)
  const [selectedRangeCoastMin, setselectedRangeCoastMin] = useState(null);
  const [selectedRangeCoastMax, setselectedRangeCoastMax] = useState(null);
  const handleRangeChangeCoast = ({min,max}) => {
    setselectedRangeCoastMin(min);
    setselectedRangeCoastMax(max);
  };
  ///singlerange(7)
  const [selectedRangeSchool, setselectedRangeSchool] = useState(100);
  const handleRangeChangeSchool = (event) => {
    setselectedRangeSchool(event.target.value);
  };
  const [selectedRangeHospital, setselectedRangeHospital] = useState(100);
  const handleRangeChangeHospital = (event) => {
    setselectedRangeHospital(event.target.value);
  };
  const [selectedRangeAirport, setselectedRangeAirport] = useState(100);
  const handleRangeChangeAirport = (event) => {
    setselectedRangeAirport(event.target.value);
  };
  const [selectedRangePort, setselectedRangePort] = useState(100);
  const handleRangeChangePort = (event) => {
    setselectedRangePort(event.target.value);
  };
  //#endregion
  //#region CSS
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
  //#endregion
  //Function to handle the "Run Algorithm" button click
  const handleRunAlgorithm = () => {
    console.log('Data try');
    // Create a JavaScript object with the constants
    const dataToSend = {
      selectedRangeAirport,
      selectedRangeCoastMax,
      selectedRangeCoastMin,
      selectedRangeHospital,
      selectedRangePort,
      selectedRangeSchool
    };
    fetch('http://localhost:5000/addfilter', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(dataToSend),
    })
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      if (data.error) {
        // Handle the error response
        console.error('Error:', data.error);
      } else {
        // Handle the success response
        console.log('Success:', data.message);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    if (!rememberChecked) {
      window.location.reload()
    }
  };
  return (
    <div style={sidebarStyle} className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${sidebarOpen ? styles.open : styles.closed}`}>
      <Button color='black' onClick={toggleSidebar} style={buttonStyle} variant="secondary">
        | | |
      </Button>
      {sidebarOpen && (
        <div className="sidebar-content d-flex flex-column align-items-center justify-content-center">
          <Form style={{ width:'20em', height: '70em', scrollbarWidth: 'none', overflow: 'scroll'}}>
            <br/><br/>
            <h1>Search for towns in greece</h1><br/>
            <Button onClick={handleClearButtonClick} variant="dark" size='sm'>
              Clear
            </Button>
            <br/><br/>
            <h6>School (km)</h6>
            <SingleRangeSlider max={100} min={0.1} step={0.1} defaultValue={selectedRangeSchool} onChange={handleRangeChangeSchool}/>
            <br/>
            <h6>Hospital (km)</h6>
            <SingleRangeSlider max={100} min={0.1} step={0.1} defaultValue={selectedRangeHospital} onChange={handleRangeChangeHospital}/>
            <br/>
            <h6>Airport (km)</h6>
            <SingleRangeSlider max={100} min={0.1} step={0.1} defaultValue={selectedRangeAirport} onChange={handleRangeChangeAirport}/>
            <br/>
            <h6>Port (km)</h6>
            <SingleRangeSlider max={100} min={0.1} step={0.1} defaultValue={selectedRangePort} onChange={handleRangeChangePort}/>
            <br/>
            
            <h6>Coast distance (km)</h6><br/>
            <MultiRangeSlider min={0} max={100} onChange={handleRangeChangeCoast}/>
            <br/><br/>
            <Form.Group className="mb-3" controlId="formHorizontalCheck">
                <Form.Check name="remember" label="Remember filters" checked={rememberChecked} onChange={handleRememberChange}/>
                <br/>
                <Button type="button" variant="secondary" onClick={handleRunAlgorithm}>Search</Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </div>
  );
}

export default Spatial;
