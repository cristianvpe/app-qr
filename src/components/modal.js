import React from "react";
import "../components/layout.css";

const Modal = ({ show, handleClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>Instrucciones</h2>
        <p>Selecciona una de las opciones disponibles y sigue las instrucciones:</p>
        <ul>
          <li><b>URL:</b> Introduce la URL que deseas convertir en un código QR.</li>
          <li><b>Geolocalización:</b> Coloca la ubicación deseada y genera un QR de ubicación.</li>
          <li><b>Texto:</b> Introduce el texto que deseas convertir en un código QR.</li>
        </ul>
        <p>Luego, elige el color y tamaño del QR utilizando las opciones disponibles.</p>
        <p>Puedes descargar el QR en formato PNG, JPG o SVG utilizando los botones correspondientes.</p>
        <p>También puedes guardar el QR ingresando un nombre y una descripción, luego haciendo clic en "Guardar QR".</p>
        <p>Finalmente, si deseas compartir el QR generado, utiliza los iconos de redes.</p>
      </div>
    </div>
  );
};

export default Modal;
