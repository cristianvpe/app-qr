import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Mapa({ latitud, longitud }) {
  return (
    <MapContainer center={[latitud, longitud]} zoom={13} style={{ height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitud, longitud]}>
        <Popup>
          Tu ubicación
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
