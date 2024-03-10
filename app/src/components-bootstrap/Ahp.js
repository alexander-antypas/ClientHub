import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table';
import MapPolygon from './MapPolygon';

function Ahp() {
  //#region Table vars
  //CATEGORIES
  //CR
  const [CRDistance, setCRDistance] = useState(1);
  const [CRSpatial, setCRSpatial] = useState(1);
  const [CRDemographic, setCRDemographic] = useState(1);
  const [CRCategory, setCRCategoty] = useState(1);
  // Function to multiply two matrices
  function multiplyArrays4x4(matrix4x4, array1x4) {
    if(matrix4x4.length !== 4 || array1x4.length !== 4) {
        return "Input arrays must be of size 4x4 and 1x4 respectively.";
    }

    // Initialize result array
    let result = [];
    // Perform matrix multiplication
    for (let i = 0; i < 4; i++) {
        let sum = 0;
        for (let j = 0; j < 4; j++) {
            sum += matrix4x4[i][j] * array1x4[j];
        }
        result.push(sum);
    }
    return result;
  }
  function multiplyArrays3x3(matrix3x3, array1x3) {
    if(matrix3x3.length !== 3 || matrix3x3[0].length !== 3 || array1x3.length !== 3) {
      return "Input arrays must be of size 3x3 and 1x3 respectively.";
  }

  // Initialize result array
  let result = [];

  // Perform matrix multiplication
  for (let i = 0; i < 3; i++) {
      let sum = 0;
      for (let j = 0; j < 3; j++) {
          sum += matrix3x3[i][j] * array1x3[j];
      }
      result.push(sum);
  }

  return result;
  }
  function multiplyArrays2x2(matrix2x2, array1x2) {
    if(matrix2x2.length !== 2 || matrix2x2[0].length !== 2 || array1x2.length !== 2) {
      return "Input arrays must be of size 2x2 and 1x2 respectively.";
  }

  // Initialize result array
  let result = [];

  // Perform matrix multiplication
  for (let i = 0; i < 2; i++) {
      let sum = 0;
      for (let j = 0; j < 2; j++) {
          sum += matrix2x2[i][j] * array1x2[j];
      }
      result.push(sum);
  }

  return result;
  }
  const changeCategoryWeights = () => {

    // Initialize a 4x4 array
    let TableMatrix = [];
    for (let i = 0; i < 3; i++) {
      TableMatrix[i] = []; // Initialize inner arrays
    }
    TableMatrix[0][0] = 1;
    TableMatrix[0][1] = DistanceSpatial;
    TableMatrix[0][2] = DistanceDemographic;

    TableMatrix[1][0] = SpatialDistance;
    TableMatrix[1][1] = 1;
    TableMatrix[1][2] = SpacialDemographic;

    TableMatrix[2][0] = DemographicDistance;
    TableMatrix[2][1] = DemographicSpacial;
    TableMatrix[2][2] = 1;
    const results = CalculateCR3x3(TableMatrix);
    setWDistance(results[0]);
    setWSpatial(results[1]);
    setWDemographic(results[2]);
    setCRCategoty(results[3]);
  }
  const changeDistanceWeights = () => {
    // Initialize a 4x4 array
    let TableMatrix = [];
    for (let i = 0; i < 3; i++) {
      TableMatrix[i] = []; // Initialize inner arrays
    }
    TableMatrix[0][0] = 1;
    TableMatrix[0][1] = SchoolHospital;
    TableMatrix[0][2] = SchoolTransport;

    TableMatrix[1][0] = HospitalSchool;
    TableMatrix[1][1] = 1;
    TableMatrix[1][2] = HospitalTransport;

    TableMatrix[2][0] = TransportSchool;
    TableMatrix[2][1] = TransportHospital;
    TableMatrix[2][2] = 1;

    const results = CalculateCR3x3(TableMatrix);

    setWSchool(results[0]);
    setWHospital(results[1]);
    setWTransport(results[2]);
    setCRDistance(results[3]);
  }
  const changeSpatialWeights = () => {
        // Initialize a 4x4 array
        let TableMatrix = [];
        for (let i = 0; i < 3; i++) {
          TableMatrix[i] = []; // Initialize inner arrays
        }
        TableMatrix[0][0] = 1;
        TableMatrix[0][1] = SlopeCoast;
        TableMatrix[0][2] = SlopeElevation;
    
        TableMatrix[1][0] = CoastSlope;
        TableMatrix[1][1] = 1;
        TableMatrix[1][2] = CoastElevation;
    
        TableMatrix[2][0] = ElevationSlope;
        TableMatrix[2][1] = ElevationCoast;
        TableMatrix[2][2] = 1;
        
        const results = CalculateCR3x3(TableMatrix);
    
    setWSlope(results[0]);
    setWCoast(results[1]);
    setWElevation(results[2]);
    setCRSpatial(results[3]);
  }
  const changeDemographicWeights = () => {
    // Initialize a 2x2 array
    let TableMatrix = [];
    for (let i = 0; i < 2; i++) {
      TableMatrix[i] = []; // Initialize inner arrays
    }
    TableMatrix[0][0] = 1;
    TableMatrix[0][1] = PopulationEconomy;

    TableMatrix[1][0] = EconomyPopulation;
    TableMatrix[1][1] = 1;
    
    const results = CalculateCR2x2(TableMatrix);
    
    setWPopulation(results[0]);
    setWEconomy(results[1]);
    setCRDemographic(results[2]);
  }
  function CalculateCR4x4(TableMatrix) {

    const SUMC1 = TableMatrix[0][0]+TableMatrix[1][0]+TableMatrix[2][0]+TableMatrix[3][0];
    const SUMC2 = TableMatrix[0][1]+TableMatrix[1][1]+TableMatrix[2][1]+TableMatrix[3][1];
    const SUMC3 = TableMatrix[0][2]+TableMatrix[1][2]+TableMatrix[2][2]+TableMatrix[3][2];
    const SUMC4 = TableMatrix[0][3]+TableMatrix[1][3]+TableMatrix[2][3]+TableMatrix[3][3];

    // Initialize a 4x4 array
    let NormalizedMatrix = [];
    for (let i = 0; i < 4; i++) {
        NormalizedMatrix[i] = []; // Initialize inner arrays
    }
    NormalizedMatrix[0][0] = TableMatrix[0][0]/SUMC1;
    NormalizedMatrix[0][1] = TableMatrix[0][1]/SUMC2;
    NormalizedMatrix[0][2] = TableMatrix[0][2]/SUMC3;
    NormalizedMatrix[0][3] = TableMatrix[0][3]/SUMC4;

    NormalizedMatrix[1][0] = TableMatrix[1][0]/SUMC1;
    NormalizedMatrix[1][1] = TableMatrix[1][1]/SUMC2;
    NormalizedMatrix[1][2] = TableMatrix[1][2]/SUMC3;
    NormalizedMatrix[1][3] = TableMatrix[1][3]/SUMC4;

    NormalizedMatrix[2][0] = TableMatrix[2][0]/SUMC1;
    NormalizedMatrix[2][1] = TableMatrix[2][1]/SUMC2;
    NormalizedMatrix[2][2] = TableMatrix[2][2]/SUMC3;
    NormalizedMatrix[2][3] = TableMatrix[2][3]/SUMC4;

    NormalizedMatrix[3][0] = TableMatrix[3][0]/SUMC1;
    NormalizedMatrix[3][1] = TableMatrix[3][1]/SUMC2;
    NormalizedMatrix[3][2] = TableMatrix[3][2]/SUMC3;
    NormalizedMatrix[3][3] = TableMatrix[3][3]/SUMC4;
    let Weight = [];
    for (let i = 0; i < 1; i++) {
      Weight[i] = []; // Initialize inner arrays
    }
    let w1 = (NormalizedMatrix[0][0]+NormalizedMatrix[0][1]+NormalizedMatrix[0][2]+NormalizedMatrix[0][3])/4;
    let w2 = (NormalizedMatrix[1][0]+NormalizedMatrix[1][1]+NormalizedMatrix[1][2]+NormalizedMatrix[1][3])/4;
    let w3 = (NormalizedMatrix[2][0]+NormalizedMatrix[2][1]+NormalizedMatrix[2][2]+NormalizedMatrix[2][3])/4;
    let w4 = (NormalizedMatrix[3][0]+NormalizedMatrix[3][1]+NormalizedMatrix[3][2]+NormalizedMatrix[3][3])/4;

    Weight[0] = w1;
    Weight[1] = w2;
    Weight[2] = w3;
    Weight[3] = w4;

    const result = multiplyArrays4x4(TableMatrix, Weight);

    const w1Product = result[0];
    const w2Product = result[1];
    const w3Product = result[2];
    const w4Product = result[3];
    
    const w1Ratio = w1Product / w1;
    const w2Ratio = w2Product / w2;
    const w3Ratio = w3Product / w3;
    const w4Ratio = w4Product / w4;
    const ci = (((w1Ratio+w2Ratio+w3Ratio+w4Ratio)/4)-4)/3;
    let results = [];
    for (let i = 0; i < 1; i++) {
      results[i] = []; // Initialize inner arrays
    }
    results[0] = w1;
    results[1] = w2;
    results[2] = w3;
    results[3] = w4;
    results[4] = Number((ci/0.9).toFixed(2))
    return results;
  }
  function CalculateCR3x3(TableMatrix) {

    const SUMC1 = TableMatrix[0][0]+TableMatrix[1][0]+TableMatrix[2][0];
    const SUMC2 = TableMatrix[0][1]+TableMatrix[1][1]+TableMatrix[2][1];
    const SUMC3 = TableMatrix[0][2]+TableMatrix[1][2]+TableMatrix[2][2];

    // Initialize a 3x3 array
    let NormalizedMatrix = [];
    for (let i = 0; i < 3; i++) {
        NormalizedMatrix[i] = []; // Initialize inner arrays
    }
    NormalizedMatrix[0][0] = TableMatrix[0][0]/SUMC1;
    NormalizedMatrix[0][1] = TableMatrix[0][1]/SUMC2;
    NormalizedMatrix[0][2] = TableMatrix[0][2]/SUMC3;

    NormalizedMatrix[1][0] = TableMatrix[1][0]/SUMC1;
    NormalizedMatrix[1][1] = TableMatrix[1][1]/SUMC2;
    NormalizedMatrix[1][2] = TableMatrix[1][2]/SUMC3;

    NormalizedMatrix[2][0] = TableMatrix[2][0]/SUMC1;
    NormalizedMatrix[2][1] = TableMatrix[2][1]/SUMC2;
    NormalizedMatrix[2][2] = TableMatrix[2][2]/SUMC3;
    let Weight = [];
    for (let i = 0; i < 1; i++) {
      Weight[i] = []; // Initialize inner arrays
    }
    let w1 = (NormalizedMatrix[0][0]+NormalizedMatrix[0][1]+NormalizedMatrix[0][2])/3;
    let w2 = (NormalizedMatrix[1][0]+NormalizedMatrix[1][1]+NormalizedMatrix[1][2])/3;
    let w3 = (NormalizedMatrix[2][0]+NormalizedMatrix[2][1]+NormalizedMatrix[2][2])/3;

    Weight[0] = w1;
    Weight[1] = w2;
    Weight[2] = w3;
    const result = multiplyArrays3x3(TableMatrix, Weight);
    const w1Product = result[0];
    const w2Product = result[1];
    const w3Product = result[2];
    
    const w1Ratio = w1Product / w1;
    const w2Ratio = w2Product / w2;
    const w3Ratio = w3Product / w3;
    const ci = (((w1Ratio+w2Ratio+w3Ratio)/3)-3)/2;
    let results = [];
    for (let i = 0; i < 1; i++) {
      results[i] = []; // Initialize inner arrays
    }
    results[0] = w1;
    results[1] = w2;
    results[2] = w3;
    results[3] = Number((ci/0.58).toFixed(2))
    return results;
  }
  function CalculateCR2x2(TableMatrix) {

    const SUMC1 = TableMatrix[0][0]+TableMatrix[1][0];
    const SUMC2 = TableMatrix[0][1]+TableMatrix[1][1];

    // Initialize a 2x2 array
    let NormalizedMatrix = [];
    for (let i = 0; i < 2; i++) {
        NormalizedMatrix[i] = []; // Initialize inner arrays
    }
    NormalizedMatrix[0][0] = TableMatrix[0][0]/SUMC1;
    NormalizedMatrix[0][1] = TableMatrix[0][1]/SUMC2;

    NormalizedMatrix[1][0] = TableMatrix[1][0]/SUMC1;
    NormalizedMatrix[1][1] = TableMatrix[1][1]/SUMC2;

    let Weight = [];
    for (let i = 0; i < 1; i++) {
      Weight[i] = []; // Initialize inner arrays
    }
    let w1 = (NormalizedMatrix[0][0]+NormalizedMatrix[0][1])/2;
    let w2 = (NormalizedMatrix[1][0]+NormalizedMatrix[1][1])/2;

    Weight[0] = w1;
    Weight[1] = w2;
    const result = multiplyArrays2x2(TableMatrix, Weight);
    const w1Product = result[0];
    const w2Product = result[1];
    
    const w1Ratio = w1Product / w1;
    const w2Ratio = w2Product / w2;
    const ci = (((w1Ratio+w2Ratio)/2)-2);

    let results = [];
    for (let i = 0; i < 1; i++) {
      results[i] = []; // Initialize inner arrays
    }
    results[0] = w1;
    results[1] = w2;
    results[2] = ci
    return results;
  }
 //WEIGHTS
 const [WDistance, setWDistance] = useState(1);
 const [WSpatial, setWSpatial] = useState(1);
 const [WDemographic, setWDemographic] = useState(1);

  const [DistanceSpatial, setDistanceSpatial] = useState(1);
  const [SpatialDistance, setSpatialDistance] = useState(1);
  const handleDistanceSpatial = (e) => {
    const enteredValue = parseFloat(e.target.value);
    if (!isNaN(enteredValue) && enteredValue >= 0.0001) {
        setDistanceSpatial(enteredValue);
        setSpatialDistance(1 / enteredValue);
        changeCategoryWeights();
    }
  };
  const [DistanceDemographic, setDistanceDemographic] = useState(1);
  const [DemographicDistance, setDemographicDistance] = useState(1);
  const handleDistanceDemographic = (e) => {
    const enteredValue = parseFloat(e.target.value);
    if (!isNaN(enteredValue) && enteredValue >= 0.0001) {
      setDistanceDemographic(enteredValue);
      setDemographicDistance(1/enteredValue);
      changeCategoryWeights();
    }
  };
  const [SpacialDemographic, setSpacialDemographic] = useState(1);
  const [DemographicSpacial, setDemographicSpacial] = useState(1);
  const handleSpacialDemographic = (e) => {
    const enteredValue = parseFloat(e.target.value);
    if (!isNaN(enteredValue) && enteredValue >= 0.0001) {
      setSpacialDemographic(enteredValue);
      setDemographicSpacial(1/enteredValue);
      changeCategoryWeights();
    }
  };
  ///SPACIAL
  //WHEIGHTS
  const [WSlope, setWSlope] = useState(1);
  const [WCoast, setWCoast] = useState(1);
  const [WElevation, setWElevation] = useState(1);

  const [SlopeCoast, setSlopeCoast] = useState(1);
  const [CoastSlope, setCoastSlope] = useState(1);
  const handleSlopeCoast = (e) => {
    const enteredValue = parseFloat(e.target.value);
    if (!isNaN(enteredValue) && enteredValue >= 0.0001) {
      setSlopeCoast(enteredValue);
      setCoastSlope(1/enteredValue);
      changeSpatialWeights();
    }
  };
  const [SlopeElevation, setSlopeElevation] = useState(1);
  const [ElevationSlope, setElevationSlope] = useState(1);
  const handleSlopeElevation = (e) => {
    const enteredValue = parseFloat(e.target.value);
    if (!isNaN(enteredValue) && enteredValue >= 0.0001) {
      setSlopeElevation(enteredValue);
      setElevationSlope(1/enteredValue);
      changeSpatialWeights();
    }
  };
  const [CoastElevation, setCoastElevation] = useState(1);
  const [ElevationCoast, setElevationCoast] = useState(1);
  const handleCoastElevation = (e) => {
    const enteredValue = parseFloat(e.target.value);
    if (!isNaN(enteredValue) && enteredValue >= 0.0001) {
      setCoastElevation(enteredValue);
      setElevationCoast(1/enteredValue);
      changeSpatialWeights();
    }
  };
  ///DEMOGRAPHIC
  //WHEIGHTS
  const [WPopulation, setWPopulation] = useState(1);
  const [WEconomy, setWEconomy] = useState(1);

  const [PopulationEconomy, setPopulationEconomy] = useState(1);
  const [EconomyPopulation, setEconomyPopulation] = useState(1);
  const handlePopulationEconomy = (e) => {
    const enteredValue = parseFloat(e.target.value);
    if (!isNaN(enteredValue) && enteredValue >= 0.0001) {
      setPopulationEconomy(enteredValue);
      setEconomyPopulation(1/enteredValue);
      changeDemographicWeights();
    }
  };

  //DISTANCE
  //WHEIGHTS
  const [WSchool, setWSchool] = useState(1);
  const [WHospital, setWHospital] = useState(1);
  const [WTransport, setWTransport] = useState(1);

  const [SchoolHospital, setSchoolHospital] = useState(1);
  const [HospitalSchool, setHospitalSchool] = useState(1);
  const handleSchoolHospital = (e) => {
    const enteredValue = parseFloat(e.target.value);
    if (!isNaN(enteredValue) && enteredValue >= 0.0001) {
      setSchoolHospital(enteredValue);
      setHospitalSchool(1/enteredValue);
      changeDistanceWeights();
    }
  };
  const [SchoolTransport, setSchoolTransport] = useState(1);
  const [TransportSchool, setTransportSchool] = useState(1);
  const handleSchoolTransport = (e) => {
    const enteredValue = parseFloat(e.target.value);
    if (!isNaN(enteredValue) && enteredValue >= 0.0001) {
      setSchoolTransport(enteredValue);
      setTransportSchool(1/enteredValue);
      changeDistanceWeights();
    }
  };
  const [HospitalTransport, setHospitalTransport] = useState(1);
  const [TransportHospital, setTransportHospital] = useState(1);
  const handleHospitalTransport = (e) => {
    const enteredValue = parseFloat(e.target.value);
    if (!isNaN(enteredValue) && enteredValue >= 0.0001) {
      setHospitalTransport(enteredValue);
      setTransportHospital(1/enteredValue);
      changeDistanceWeights();
    }
  };
  //#endregion
  //#region general 
  // Function to handle API response and extract vector points
  const handleApiResponse = (data) => {
    try {
      // Map each object to extract latitude, longitude, and name
      const polygons = data.map((polygon) => {
        const id = parseFloat(polygon.split("--")[0]);
        const info = parseFloat(polygon.split("--")[3]);  
        const transformed_multipolygon = polygon.split("--")[1]
        .replace(/\)/g, ']') // Removing the ending part
        .replace(/\(/g, '[')
        const dataArray = JSON.parse(transformed_multipolygon, (key, value) => {
          return typeof value === 'number' ? parseFloat(value) : value;
        });
        const reversedDataArray = dataArray.map(point => {
          return [point[1], point[0]]; // reversing the order of coordinates
        });
        return [reversedDataArray, info, id];
      }).filter(polygon => polygon !== null);
      setVectorPolygons(polygons)
      //alert(polygons[0][0][0])
  } catch (error) {
      console.error('Error handling API response:', error);
      return [];
  }
  };
  const handleClearButtonClick = () => {
    window.location.reload();
  };
  const [timestamp, settimestamp] = useState(new Date().toLocaleString('en-GB'));
  const [resultData, setResultData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [vectorPolygons, setVectorPolygons] = useState([]);
  //VARIABLES for collapse
  const [distopen, distsetOpen] = useState(false);
  const [spaopen, spasetOpen] = useState(false);
  const [demopen, demsetOpen] = useState(false);
  const [allopen, allsetOpen] = useState(false);
  const toggleCollapse = (collapseName) => {
    // Close all collapse components first
    distsetOpen(false);
    spasetOpen(false);
    demsetOpen(false);
    allsetOpen(false);

    // Toggle the specified collapse component
    if (collapseName === 'dist') {
      distsetOpen(!distopen);
    } else if (collapseName === 'spa') {
      spasetOpen(!spaopen);
    } else if (collapseName === 'dem') {
      demsetOpen(!demopen);
    }else if (collapseName === 'all')
    allsetOpen(!allopen);
  };
  //#endregion
  //Function to handle the "Run Algorithm" button click
  const handleRunAlgorithm = () => {
    console.log('Data try');
    // Create a JavaScript object with the constants
    const dataToSend = {
      WDistance,
      WSpatial,
      WDemographic,
      WSchool,
      WHospital,
      WTransport,
      WSlope,
      WCoast,
      WElevation,
      WPopulation,
      WEconomy
    };
    setResultData([]);
    setLoading(true)
    fetch('http://localhost:5000/ahp', {
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
        setResultData([['0','none']]);
        console.error('Error:', data.error);
      } else {
        // Handle the success response
        setResultData(data); 
        handleApiResponse(data);
        //alert(data)
      }
      settimestamp(new Date().toLocaleString('en-GB'))
      setLoading(false)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  return (
    <div style={{display:'flex'}}>
        <Form style={{width:'60em', height: '70em', scrollbarWidth: 'none', overflowY: 'scroll' }}>
        <br/><br/>
        <h1 style={{color:"white"}}>Analytic Hierarchy Process </h1><br/>
        <Button onClick={handleClearButtonClick} variant="dark" size='sm' className="d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path>
              </svg>
              <span className="ms-1">Clear</span> 
            </Button>
        <br/>
        <h6 style={{color:"white"}}>Last Time Searched</h6>
        <h6 style={{color:"white"}}>{timestamp}</h6>
        <br/>
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
                    <th>CR: {CRCategory}</th>
                    <th>Distance</th>
                    <th>Spatial</th>
                    <th>Demographic</th>
                    <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Distance</td>
                    <td id="ch1">1.0</td>
                    <td id="ch2">
                      <input type="number" min = "0.0001" step = "0.0001" defaultValue={1} onChange={(e) => handleDistanceSpatial(e)}/>
                    </td>
                    <td id="ch3"><input type="number" min = "0.0001" step = "0.0001" defaultValue={1} onChange={(e) => handleDistanceDemographic(e)}/></td>
                    <td>{WDistance}</td>
                    </tr>
                    <tr>
                    <td>Spatial</td>
                    <td id="ch5">{SpatialDistance}</td>
                    <td id="ch6">1.0</td>
                    <td id="ch7"><input type="number" min = "0.0001" step = "0.0001" defaultValue={1} onChange={(e) => handleSpacialDemographic(e)}/></td>
                    <td>{WSpatial}</td>
                    </tr>
                    <tr>
                    <td>Demographic</td>
                    <td id="ch9">{DemographicDistance}</td>
                    <td id="ch10">{DemographicSpacial}</td>
                    <td id="ch11">1.0</td>
                    <td>{WDemographic}</td>
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
                    <th>CR: {CRDistance}</th>
                    <th>School</th>
                    <th>Hospitals</th>
                    <th>Public Transport</th>
                    <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Schools</td>
                    <td>1.0</td>
                    <td><input type="number" min = "0.0001" step = "0.0001" defaultValue={1} onChange={(e) => handleSchoolHospital(e)}/></td>
                    <td><input type="number" min = "0.0001" step = "0.0001" defaultValue={1} onChange={(e) => handleSchoolTransport(e)}/></td>
                    <td>{WSchool}</td>
                    </tr>
                    <tr>
                    <td>Hospitals</td>
                    <td>{HospitalSchool}</td>
                    <td>1.0</td>
                    <td><input type="number" min = "0.0001" step = "0.0001" defaultValue={1} onChange={(e) => handleHospitalTransport(e)}/></td>
                    <td>{WHospital}</td>
                    </tr>
                    <tr>
                    <td>Public Transport</td>
                    <td >{TransportSchool}</td>
                    <td >{TransportHospital}</td>
                    <td>1.0</td>
                    <td>{WTransport}</td>
                    </tr>
                    <tr>
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
                    <th>CR: {CRSpatial}</th>
                    <th>Slope</th>
                    <th>Distance from coast</th>
                    <th>Elevation</th>
                    <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Slope</td>
                    <td>1.0</td>
                    <td><input type="number" min = "0.0001" step = "0.0001" defaultValue={1} onChange={(e) => handleSlopeCoast(e)}/></td>
                    <td><input type="number" min = "0.0001" step = "0.0001" defaultValue={1} onChange={(e) => handleSlopeElevation(e)}/></td>
                    <td>{WSlope}</td>
                    </tr>
                    <tr>
                    <td>Distance from coast</td>
                    <td>{CoastSlope}</td>
                    <td>1.0</td>
                    <td><input type="number" min = "0.0001" step = "0.0001" defaultValue={1} onChange={(e) => handleCoastElevation(e)}/></td>
                    <td>{WCoast}</td>
                    </tr>
                    <tr>
                    <td>Elevation</td>
                    <td >{ElevationSlope}</td>
                    <td >{ElevationCoast}</td>
                    <td>1.0</td>
                    <td>{WElevation}</td>
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
                    <th>CR: {CRDemographic}</th>
                    <th>Population Density</th>
                    <th>Economy</th>
                    <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Population Density</td>
                    <td>1.0</td>
                    <td><input type="number" min = "0.0001" step = "0.0001" defaultValue={1} onChange={(e) => handlePopulationEconomy(e)}/></td>
                    <td>{WPopulation}</td>
                    </tr>
                    <tr>
                    <td>Economy</td>
                    <td>{EconomyPopulation}</td>
                    <td>1.0</td>
                    <td>{WEconomy}</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Collapse>
        <Form.Group className="mb-3" controlId="formHorizontalCheck">
            <Button type="button" variant="secondary" onClick={handleRunAlgorithm}>Run Algorithm</Button>
        </Form.Group>
        </Form>
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
                    <td style={{border: '1px solid #fff', padding: '8px'}}>{point.split('--')[0]}</td>
                    <td style={{border: '1px solid #fff', padding: '8px'}}>{point.split('--')[2]}</td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <MapPolygon vectorPolygons={vectorPolygons} />
        </div>
        )}
    </div>
  );
}

export default Ahp;