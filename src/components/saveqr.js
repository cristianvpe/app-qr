import React from "react";

const SaveQr = ({ loading, handleSaveQr, descargado }) => {
  return (
    <div>
      <h3>GUARDAR</h3>
      <button onClick={handleSaveQr} disabled={loading} className="button-guardar">
        {loading ? "Guardando..." : "Guardar QR"}
      </button>
      {descargado && <p className="pdescarga">¡El QR se ha descargado!</p>}
    </div>
  );
};

export default SaveQr;
