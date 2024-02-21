import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Icon } from 'react-leaflet';
import L from 'leaflet';

function MapComponent({ vectorPoints }) {
  const [mapPosition, setMapPosition] = useState([38.2522, 24.05]);

  useEffect(() => {
    if (vectorPoints.length > 0) {
      setMapPosition(vectorPoints[0]);
    }
  }, [vectorPoints]);

  const customIcon = index =>
  new L.divIcon({
    className: 'custom-icon',
    html: `<div style="background-color: #000; color: #fff; padding: 5px; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;">${index + 1}</div>`,
  });


  return (
    <>
      {vectorPoints.length > 0 && (
        <div style={{ border: 'solid', alignItems: 'Center', width: '107em', height: '93em', color: 'white' }}>
          <MapContainer center={mapPosition} zoom={7} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {vectorPoints.map((point, index) => (
              <Marker key={index} position={point[0]} icon={customIcon(index)}>
                <Popup>Elevation:{point[1][0]}<br /> County: {point[1][1]}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </>
  );
}

export default MapComponent;
