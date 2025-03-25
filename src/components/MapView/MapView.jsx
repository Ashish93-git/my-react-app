import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLocation } from "react-router-dom";

const MapView = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const cardId = params.get("cardId"); // Extracting cardId if needed

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[20.5937, 78.9629]}>
        <Popup>India - Card ID: {cardId}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
