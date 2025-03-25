import React, { useContext } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { AuthContext } from '../components/Login/context/AuthContext';

function MapPage() {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <div>User not logged in</div>;
  }

  return (
    <div className="map-container">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default MapPage;