import React, { useState } from "react";
import Collapse from "./collapse1";
import '../components/layout.css'; // Asegúrate de importar tu archivo CSS

function Collapse2() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button className="instructions-button" onClick={handleToggleCollapse}>
        Instrucciones
      </button>
      <Collapse isCollapsed={isCollapsed}>
        <div>
          <p>Introduce un texto o una url, después elige un color y un tamaño para tu QR.</p>
          <p>Comprueba que la información es correcta y por último descarga en el formato que desees y elige la carpeta de tu equipo donde guardar tu archivo.</p>
        </div>
      </Collapse>
    </div>
  );
}

export default Collapse2;
