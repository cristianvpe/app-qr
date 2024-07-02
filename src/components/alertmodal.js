import React from 'react';
import '../components/layout.css'; 

const AlertModal = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="alert-modal-overlay">
      <div className="alert-modal">
        <p>El QR se ha guardado en la base de datos correctamente</p>
        <button onClick={onClose} className="alert-modal-button">Cerrar</button>
      </div>
    </div>
  );
};

export default AlertModal;
