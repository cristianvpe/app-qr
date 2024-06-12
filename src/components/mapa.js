import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ubicacionIcon from '../images/ubicacion.png'; // Importa la imagen del icono del marcador

const MapaConMarcador = ({ setLatLng }) => {
  useEffect(() => {
    const map = L.map('map').setView([40.031331, -3.602844], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: ubicacionIcon, // Utiliza la imagen importada del icono del marcador
      iconSize: [32, 32], // Tamaño del ícono
      iconAnchor: [16, 32], // Punto del ícono que se ancla al punto de ubicación
    });
    
    const marker = L.marker([40.031331, -3.602844], { icon: customIcon }).addTo(map);

    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      setLatLng({ lat, lng });
      marker.setLatLng([lat, lng]);
    });

    // Cambiar el cursor al ícono de chincheta
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.style.cursor = `url(${ubicacionIcon}) 16 32, auto`;
    }

    return () => {
      map.off();
      map.remove();
    };
  }, [setLatLng]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapaConMarcador;
