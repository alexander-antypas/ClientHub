import React, { useState } from 'react';
import styles from '../style.module.css'; // Correct path to your CSS file
import { Button, Form } from 'react-bootstrap';
import MultiRangeSlider from '../form-comp/MultiRangeSlider';
import SingleRangeSlider from '../form-comp/SingleRangeSlider'
import DropDown from '../form-comp/DropDown'
import MapComponent from './MapComponent'

function Spatial() {
  //#region general 
  const [timestamp, settimestamp] = useState(new Date().toLocaleString('en-GB'));
  const [resultData, setResultData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [vectorPoints, setVectorPoints] = useState([]);

  // Function to handle API response and extract vector points
  const handleApiResponse = (data) => {
    try {
      // Map each object to extract latitude, longitude, and name
      const points = data.map((point) => {
          const latitude = parseFloat(point.split(',')[1]);
          const longitude = parseFloat(point.split(',')[2]);
          const elevation = parseFloat(point.split(',')[3]);
          const county = point.split(',')[4];
          const thepoint = [latitude,longitude];
          const info = [elevation,county]
          return[thepoint, info];
        }).filter(point => point !== null);
      setVectorPoints(points)
      //setResultData(points)
  } catch (error) {
      console.error('Error handling API response:', error);
      return [];
  }
  };

  const handleClearButtonClick = () => {
    window.location.reload();
  };
  //VARIABLES for collapse
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [isRiverChecked, setIsRiverChecked] = useState(true);
  const handleRiverChange = (event) => {
      setIsRiverChecked(event.target.checked);
  };

  const [isHospitalChecked, setIsHospitalChecked] = useState(true);
  const handleHospitalChange = (event) => {
      setIsHospitalChecked(event.target.checked);
  };

  const [isAirportChecked, setIsAirportChecked] = useState(true);
  const handleAirportChange = (event) => {
      setIsAirportChecked(event.target.checked);
  };

  const [isPortChecked, setIsPortChecked] = useState(true);
  const handlePortChange = (event) => {
      setIsPortChecked(event.target.checked);
  };

  const [isCoastChecked, setIsCoastChecked] = useState(true);
  const handleCoastChange = (event) => {
      setIsCoastChecked(event.target.checked);
  };
  const [isElevationChecked, setIsElevationChecked] = useState(true);
  const handleElevationChange = (event) => {
      setIsElevationChecked(event.target.checked);
  };
  //#endregion
  //#region FORM VARIABLES
  //dropdown
  const periferies = ['Π. ΑΝΑΤΟΛΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ - ΘΡΑΚΗΣ', 'Π. ΚΕΝΤΡΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ', 
  'Π. ΔΥΤΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ', 'Π. ΗΠΕΙΡΟΥ', 'Π. ΘΕΣΣΑΛΙΑΣ', 'Π. ΒΟΡΕΙΟΥ ΑΙΓΑΙΟΥ', 'Π. ΝΟΤΙΟΥ ΑΙΓΑΙΟΥ',
   'Π. ΣΤΕΡΕΑΣ ΕΛΛΑΔΑΣ', 'Π. ΔΥΤΙΚΗΣ ΕΛΛΑΔΑΣ', 'Π. ΠΕΛΟΠΟΝΝΗΣΟΥ', 'Π. ΙΟΝΙΩΝ ΝΗΣΩΝ', 'Π. ΚΡΗΤΗΣ', 'Π. ΑΤΤΙΚΗΣ'];
   const [selectedRegion, setselectedRegion] = useState('Π. ΑΤΤΙΚΗΣ');
   const handleRegion = ({defaultValue}) => {
     setselectedRegion(defaultValue);
   };
  //multiple range(2)
  const [selectedRangeCoastMin, setselectedRangeCoastMin] = useState(0);
  const [selectedRangeCoastMax, setselectedRangeCoastMax] = useState(20);
  const handleRangeChangeCoast = ({min,max}) => {
    setselectedRangeCoastMin(min);
    setselectedRangeCoastMax(max);
  };
  const [selectedRangeElevationMin, setselectedRangeElevationMin] = useState(0);
  const [selectedRangeElevationMax, setselectedRangeElevationMax] = useState(20);
  const handleRangeChangeElevation = ({min,max}) => {
    setselectedRangeElevationMin(min);
    setselectedRangeElevationMax(max);
  };
  ///singlerange(7)
  const [selectedRangeRiver, setselectedRangeRiver] = useState(10);
  const handleRangeChangeRiver = (event) => {
    setselectedRangeRiver(event.target.value);
  };
  const [selectedRangeHospital, setselectedRangeHospital] = useState(10);
  const handleRangeChangeHospital = (event) => {
    setselectedRangeHospital(event.target.value);
  };
  const [selectedRangeAirport, setselectedRangeAirport] = useState(10);
  const handleRangeChangeAirport = (event) => {
    setselectedRangeAirport(event.target.value);
  };
  const [selectedRangePort, setselectedRangePort] = useState(10);
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
    height: '93em',
    border: '1px solid #000',
  };
  //#endregion
  //Function to handle the "Run Algorithm" button click
  const handleRunAlgorithm = () => {
    console.log('Data try');
    if(!isRiverChecked){
      setselectedRangeRiver(0);
    }
    if(!isHospitalChecked){
      setselectedRangeHospital(0);
    }
    if(!isAirportChecked){
      setselectedRangeAirport(0)
    }
    if(!isPortChecked){
      setselectedRangePort(0);
    }
    if(!isCoastChecked){
      setselectedRangeCoastMax(0)
      setselectedRangeCoastMin(0)
    }
    if(!isElevationChecked){
      setselectedRangeElevationMax(0)
      setselectedRangeElevationMin(0)
    }
    // Create a JavaScript object with the constants
    const dataToSend = {
      selectedRegion,
      selectedRangeAirport,
      selectedRangeCoastMax,
      selectedRangeCoastMin,
      selectedRangeHospital,
      selectedRangePort,
      selectedRangeRiver,
      selectedRangeElevationMax,
      selectedRangeElevationMin
    };
    setResultData([]);
    setLoading(true)
    fetch('http://localhost:5000/addfilter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        setResultData([['0','none']]); // Display error message in the div
      } else {
        handleApiResponse(data);
        setResultData(data); // Display success message in the div
      }
      settimestamp(new Date().toLocaleString('en-GB'))
      setLoading(false)
    })
    .catch((error) => {
      setResultData([['0','none']]); // Display error message in the div
    });
  };
  return (
    <div style={{display:'flex'}}>
    <div style={sidebarStyle} className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${sidebarOpen ? styles.open : styles.closed}`}>
      <Button color='black' onClick={toggleSidebar} style={buttonStyle} variant="secondary">
        | | |
      </Button>
      {sidebarOpen && (
        <div className="sidebar-content d-flex flex-column align-items-center justify-content-center">
          <br/>
          <h6>Last Time Searched</h6>
          <h6>{timestamp}</h6>
          <Form style={{ width:'20em', height: '70em', scrollbarWidth: 'none', overflow: 'scroll'}}>
            <br/>
            <h1>Explore towns in Greece</h1><br/>
            <Button onClick={handleClearButtonClick} variant="dark" size='sm' className="d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path>
              </svg>
              <span className="ms-1">Clear</span> 
            </Button>
            <br/>
            <h6>Select Region</h6>
            <DropDown options={periferies} defaultValue={selectedRegion} onChange={handleRegion}></DropDown>
            <br/>
            <input type="checkbox" checked={isRiverChecked} onChange={handleRiverChange} style={{ marginRight: '10px' }}/>
            <label style={{ marginRight: '10px' }}>River (km)</label>
            {isRiverChecked && (
              <SingleRangeSlider max={20} min={0.1} step={0.1} defaultValue={selectedRangeRiver} onChange={handleRangeChangeRiver}/>
            )}
            <br />
            <input type="checkbox" checked={isHospitalChecked} onChange={handleHospitalChange} style={{ marginRight: '10px' }} />
            <label>Hospital (km)</label>
            {isHospitalChecked && (
              <SingleRangeSlider max={20} min={0.1} step={0.1} defaultValue={selectedRangeHospital} onChange={handleRangeChangeHospital}/>
            )}
            <br/>
            <input type="checkbox" checked={isAirportChecked} onChange={handleAirportChange} style={{ marginRight: '10px' }}/>
            <label style={{ marginRight: '10px' }}>Airport (km)</label>
            {isAirportChecked && (
            <SingleRangeSlider max={20} min={0.1} step={0.1} defaultValue={selectedRangeAirport} onChange={handleRangeChangeAirport}/>
            )}
            <br/>
            <input type="checkbox" checked={isPortChecked} onChange={handlePortChange} style={{ marginRight: '10px' }}/>
            <label style={{ marginRight: '10px' }}>Port (km)</label>
            {isPortChecked && (
            <SingleRangeSlider max={20} min={0.1} step={0.1} defaultValue={selectedRangePort} onChange={handleRangeChangePort}/>
            )}
            <br/>
            <input type="checkbox" checked={isCoastChecked} onChange={handleCoastChange} style={{ marginRight: '10px' }}/>
            <label style={{ marginRight: '10px' }}>Coast distance (km)</label>
            <br/>
            {isCoastChecked && (
            <div>
                <br/>
              <MultiRangeSlider min={0} max={20} onChange={handleRangeChangeCoast}/><br/><br/>
            </div>
            )}
            <input type="checkbox" checked={isElevationChecked} onChange={handleElevationChange} style={{ marginRight: '10px' }}/>
            <label style={{ marginRight: '10px' }}>Elevation (m)</label>
            <br/><br/>
            {isElevationChecked && (
            <div>
            <MultiRangeSlider min={0} max={1850} onChange={handleRangeChangeElevation}/> <br/>
            </div>
            )}
            <Form.Group className="mb-3" controlId="formHorizontalCheck">
                <br/>
                <Button type="button" variant="secondary" onClick={handleRunAlgorithm}>Search</Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </div>
    {loading === true &&(
      <div style={{ alignItems: 'Top', color:'white'}}>
          <h2>Loading...</h2>
      </div>
    )}
    {resultData.length > 0 && (
      <div style={{display:'flex'}}>
        <div style={{ height:'93em',overflow:'scroll',color: 'white', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#333'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr>
                <th style={{border: '1px solid #fff', padding: '8px'}}>Number</th>
                <th style={{border: '1px solid #fff', padding: '8px'}}>Name</th>
              </tr>
            </thead>
            <tbody>
                {resultData.map((point, index) => (
                <tr key={index}>
                  <td style={{border: '1px solid #fff', padding: '8px'}}>{index+1}</td>
                  <td style={{border: '1px solid #fff', padding: '8px'}}>{point.split(',')[0]}</td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
        <MapComponent vectorPoints={vectorPoints} />
      </div>
      )}

    </div>
  );
}

export default Spatial;
