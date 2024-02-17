import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table';

function Ahp() {
  //#region general 
  const handleClearButtonClick = () => {
    window.location.reload();
  };
  const [rememberChecked, setRememberChecked] = useState(false);

  const handleRememberChange = (e) => {
    setRememberChecked(e.target.checked);
  };
  //VARIABLES for collapse
  const [distopen, distsetOpen] = useState(false);
  const [spaopen, spasetOpen] = useState(false);
  const [demopen, demsetOpen] = useState(false);
  const [safopen, safsetOpen] = useState(false);
  const [allopen, allsetOpen] = useState(false);
  const toggleCollapse = (collapseName) => {
    // Close all collapse components first
    distsetOpen(false);
    spasetOpen(false);
    demsetOpen(false);
    safsetOpen(false);
    allsetOpen(false);

    // Toggle the specified collapse component
    if (collapseName === 'dist') {
      distsetOpen(!distopen);
    } else if (collapseName === 'spa') {
      spasetOpen(!spaopen);
    } else if (collapseName === 'dem') {
      demsetOpen(!demopen);
    }else if (collapseName === 'saf') {
      safsetOpen(!safopen);
    }else if (collapseName === 'all')
    allsetOpen(!allopen);
  };
  //#endregion
  //#region FORM VARIABLES
  //single choice (9)
  const AirQuality_choices = ["Very High","High", "Medium", "Low","Very Low", "Don't mind"];
  const [selectedChoiceAir, setSelectedChoiceAir] = useState(null);
  const handleRadioChangeAir = (event) => {
    setSelectedChoiceAir(event.target.name);
  };
  const Climate_choices = ["Very Hot","Hot", "Warm", "Cold","Very Cold", "Don't mind"];
  const [selectedChoiceClimate, setSelectedChoiceClimate] = useState(null);
  const handleRadioChangeClimate = (event) => {
    setSelectedChoiceClimate(event.target.name);
  };
  const Population_choices = ["Very High", "High", "Medium","Low", "Very Low", "Don't mind"];
  const [selectedChoicePop, setSelectedChoicePop] = useState(null);
  const handleRadioChangePop = (event) => {
    setSelectedChoicePop(event.target.name);
  };
  const Unemployment_choices = ["Very High", "High", "Medium","Low", "Very Low", "Don't mind"];
  const [selectedChoiceUn, setSelectedChoiceUn] = useState(null);
  const handleRadioChangeUn = (event) => {
    setSelectedChoiceUn(event.target.name);
  };
  const Entertainment_choices = ["Very High", "High", "Medium","Low", "Very Low", "Don't mind"];
  const [selectedChoiceEn, setSelectedChoiceEn] = useState(null);
  const handleRadioChangeEn = (event) => {
    setSelectedChoiceEn(event.target.name);
  };
  const Crime_choices = ["Very High", "High", "Medium","Low", "Very Low", "Don't mind"];
  const [selectedChoiceCrime, setSelectedChoiceCrime] = useState(null);
  const handleRadioChangeCrime = (event) => {
    setSelectedChoiceCrime(event.target.name);
  };
  const Road_choices = ["Very High", "High", "Medium","Low", "Very Low", "Don't mind"];
  const [selectedChoiceRoad, setSelectedChoiceRoad] = useState(null);
  const handleRadioChangeRoad = (event) => {
    setSelectedChoiceRoad(event.target.name);
  };
  const Migrant_choices = ["Very High", "High", "Medium","Low", "Very Low", "Don't mind"];
  const [selectedChoiceMig, setSelectedChoiceMig] = useState(null);
  const handleRadioChangeMig = (event) => {
    setSelectedChoiceMig(event.target.name);
  };
  const Flood_choices = ["Very High", "High", "Medium","Low", "Very Low", "Don't mind"];
  const [selectedChoiceFlood, setSelectedChoiceFlood] = useState(null);
  const handleRadioChangeFlood = (event) => {
    setSelectedChoiceFlood(event.target.name);
  };
  //multiple range(2x3)
  const [selectedRangeSlopeMin, setselectedRangeSlopeMin] = useState(null);
  const [selectedRangeSlopeMax, setselectedRangeSlopeMax] = useState(null);
  const handleRangeChangeSlope = (min,max) => {
    setselectedRangeSlopeMin(min);
    setselectedRangeSlopeMax(max);
  };
  const [selectedRangeElevationMin, setselectedRangeElevationMin] = useState(null);
  const [selectedRangeElevationMax, setselectedRangeElevationMax] = useState(null);
  const handleRangeChangeElevation = ({min,max}) => {
    setselectedRangeElevationMin(min);
    setselectedRangeElevationMax(max);
  };
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
  const [selectedRangeTransport, setselectedRangeTransport] = useState(100);
  const handleRangeChangeTransport = (event) => {
    setselectedRangeTransport(event.target.value);
  };
  const [selectedRangeAirport, setselectedRangeAirport] = useState(100);
  const handleRangeChangeAirport = (event) => {
    setselectedRangeAirport(event.target.value);
  };
  const [selectedRangeTrain, setselectedRangeTrain] = useState(100);
  const handleRangeChangeTrain = (event) => {
    setselectedRangeTrain(event.target.value);
  };
  const [selectedRangePort, setselectedRangePort] = useState(100);
  const handleRangeChangePort = (event) => {
    setselectedRangePort(event.target.value);
  };
  const [selectedRangeBeach, setselectedRangeBeach] = useState(100);
  const handleRangeChangeBeach = (event) => {
    setselectedRangeBeach(event.target.value);
  };
  //#endregion
  //Function to handle the "Run Algorithm" button click
  const handleRunAlgorithm = () => {
    console.log('Data try');
    // Create a JavaScript object with the constants
    const dataToSend = {
      selectedChoiceAir,
      selectedChoiceClimate,
      selectedChoiceCrime,
      selectedChoiceEn,
      selectedChoiceFlood,
      selectedChoiceMig,
      selectedChoicePop,
      selectedChoiceRoad,
      selectedChoiceUn,
      selectedRangeAirport,
      selectedRangeBeach,
      selectedRangeCoastMax,
      selectedRangeCoastMin,
      selectedRangeElevationMax,
      selectedRangeElevationMin,
      selectedRangeHospital,
      selectedRangePort,
      selectedRangeSchool,
      selectedRangeSlopeMax,
      selectedRangeSlopeMin,
      selectedRangeTrain,
      selectedRangeTransport
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
      window.location.reload();
    }
  };
  return (
    <>
        <Form style={{ width:'40em', height: '70em', overflowY: 'scroll' }}>
        <br/><br/>
        <h1>AHP Filters</h1><br/>
        <Button onClick={handleClearButtonClick} variant="dark" size='sm'>
            Clear
        </Button>
        <br/><br/>
        <Button variant="dark" onClick={() => toggleCollapse('all')} aria-controls="example-collapse-text" 
            aria-expanded={allopen} size='lg'>
            Categories Weights
        </Button>
        <br/><br/>
        <Collapse in={allopen}>
            <div id="example-collapse-text">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Distance</th>
                    <th>Spatial</th>
                    <th>Demographic</th>
                    <th>Safety</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Distance</td>
                    <td id="ch1">1.0</td>
                    <td id="ch2"><input
                        type="text"
                        value={"ok"}
                        onChange={(e) => this.handleChange("ch5", e.target.value)}/>
                    </td>
                    <td id="ch3">ch2</td>
                    <td id="ch4">ch3</td>
                    </tr>
                    <tr>
                    <td>Spatial</td>
                    <td id="ch5">1/ch1</td>
                    <td id="ch6">1.0</td>
                    <td id="ch7">ch4</td>
                    <td id="ch8">ch5</td>
                    </tr>
                    <tr>
                    <td>Demographic</td>
                    <td id="ch9">1/ch2</td>
                    <td id="ch10">1/ch4</td>
                    <td id="ch11">1.0</td>
                    <td id="ch12">ch6</td>
                    </tr>
                    <tr>
                    <td>Safety</td>
                    <td id="ch13">1/ch3</td>
                    <td id="ch14">1/ch5</td>
                    <td id="ch15">1/ch6</td>
                    <td id="ch16">1.0</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Collapse>
        <Button variant="dark" onClick={() => toggleCollapse('dist')} aria-controls="example-collapse-text" 
            aria-expanded={distopen} size='lg'>
            Distance Weights
        </Button>
        <br/><br/>
        <Collapse in={distopen}>
            <div id="example-collapse-text">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>School</th>
                    <th>Public Transport</th>
                    <th>Hospitals</th>
                    <th>Ports</th>
                    <th>Airports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Schools</td>
                    <td>1.0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Public Transport</td>
                    <td></td>
                    <td>1.0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Hospitals</td>
                    <td ></td>
                    <td ></td>
                    <td>1.0</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Ports</td>
                    <td ></td>
                    <td ></td>
                    <td></td>
                    <td>1.0</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Airports</td>
                    <td ></td>
                    <td ></td>
                    <td></td>
                    <td></td>
                    <td>1.0</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Collapse>
        <Button variant="dark" onClick={() => toggleCollapse('spa')} aria-controls="example-collapse-text" aria-expanded={spaopen} size='lg'>
            Spacial Weights
        </Button>
        <br/><br/>
        <Collapse in={spaopen}>
            <div id="example-collapse-text">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Slope</th>
                    <th>Distance from coast</th>
                    <th>Elevation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Slope</td>
                    <td>1.0</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Distance from coast</td>
                    <td></td>
                    <td>1.0</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Elevation</td>
                    <td ></td>
                    <td ></td>
                    <td>1.0</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Collapse>
        <Button variant="dark" onClick={() => toggleCollapse('dem')} aria-controls="example-collapse-text" aria-expanded={demopen} size='lg'>
            Demographic Weights
        </Button>
        <br/><br/>
        <Collapse in={demopen}>
            <div id="example-collapse-text">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Population Density</th>
                    <th>Economy</th>
                    <th>Entertainment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Population Density</td>
                    <td>1.0</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Economy</td>
                    <td></td>
                    <td>1.0</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Entertainment</td>
                    <td ></td>
                    <td ></td>
                    <td>1.0</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Collapse>
        <Button variant="dark" onClick={() => toggleCollapse('saf')} aria-controls="example-collapse-text" aria-expanded={safopen} size='lg'>
            Safety Weights
        </Button>
        <br/><br/>
        <Collapse in={safopen}>
            <div id="example-collapse-text">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Crime</th>
                    <th>Road Accidents</th>
                    <th>Migrant Index</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Crime</td>
                    <td>1.0</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Road Accidents</td>
                    <td></td>
                    <td>1.0</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Migrant Index</td>
                    <td ></td>
                    <td ></td>
                    <td>1.0</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Collapse>
        <Form.Group className="mb-3" controlId="formHorizontalCheck">
            <Form.Check name="remember" label="Remember filters" checked={rememberChecked} onChange={handleRememberChange}/>
            <br/>
            <Button type="button" variant="secondary" onClick={handleRunAlgorithm}>Run Algorithm</Button>
        </Form.Group>
        </Form>
        
    </>
  );
}

export default Ahp;
