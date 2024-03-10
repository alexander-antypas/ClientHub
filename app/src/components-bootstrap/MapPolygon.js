import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
function getColor(value) {
    if (value >= 0 && value < 1) {
      return '#FF5733'; // red
    } else if (value >= 1 && value < 2) {
      return '#FFA500'; // orange
    } else if (value >= 2 && value < 3) {
      return '#FFFF00'; // yellow
    } else if (value >= 3 && value < 4) {
      return '#50EE00'; // light green
    } else if (value >= 4 && value <= 5) {
      return '#008000'; // green
    } else {
      return '#000000'; // fallback color, if value is outside the specified range
    }
  }
function MapPolygon({ vectorPolygons }) {
  const [mapPosition, setMapPosition] = useState([37.94095210881218, 23.74202120802261]); // Default to the first point of the first polygon

  useEffect(() => {
    if (vectorPolygons.length > 0) {
      const firstPolygon = vectorPolygons[0][0]; // Assuming the structure based on your example
      //alert(firstPolygon)
      const [firstLng, firstLat] = firstPolygon[0]; // Extract first point to set initial map center
      setMapPosition([firstLat, firstLng]);
    }
  }, [vectorPolygons]);

  return (
    <>
      {vectorPolygons.length > 0 && (
        <div style={{ height: '93em', width: '107em' }}>
          <MapContainer center={mapPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {vectorPolygons.map((info, index) => (
              <Polygon
                key={index}
                pathOptions={{ color: getColor(info[1]) }}
                positions={info[0]}
              >
              <Popup>{info[2]} : {info[1]} </Popup>
              </Polygon>
            ))}
          </MapContainer>
        </div>
      )}
    </>
  );
}

export default MapPolygon;


// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';

// function MapPolygon({ vectorPolygons }) {
//   const [mapPosition, setMapPosition] = useState([38.2522, 24.05]);

//   useEffect(() => {
//     if (vectorPolygons.length > 0) {
//       // Set map position based on the first polygon's coordinates
//       const firstPolygon = vectorPolygons[0];
//       const centerLat = firstPolygon.reduce((acc, curr) => acc + curr[0], 0) / firstPolygon.length;
//       const centerLng = firstPolygon.reduce((acc, curr) => acc + curr[1], 0) / firstPolygon.length;
//       setMapPosition([centerLat, centerLng]);
//     }
//   }, [vectorPolygons]);

//   return (
//     <>
//       {vectorPolygons.length > 0 && (
//         <div style={{ border: 'solid', alignItems: 'center', width: '107em', height: '93em', color: 'white' }}>
//           <MapContainer center={mapPosition} zoom={7} style={{ height: '100%', width: '100%' }}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             {vectorPolygons.map((polygon, index) => (
//               <Polygon key={index} pathOptions={{ color: 'blue' }} positions={polygon[0]}>
//                 <Popup>
//                   {/* You can add any information related to the polygon here */}
//                   This is polygon {index + 1}
//                 </Popup>
//               </Polygon>
//             ))}
//           </MapContainer>
//         </div>
//       )}
//     </>
//   );
// }

// export default MapPolygon;