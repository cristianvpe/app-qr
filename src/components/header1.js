import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';
import "../components/layout.css";

const Header1 = () => {
  // Estado para manejar la autenticación del usuario
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simular autenticación (esto debería reemplazarse con lógica real de autenticación)
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Remover el usuario de localStorage (o cualquier otro almacenamiento que uses)
    localStorage.removeItem('user');
    // Actualizar el estado de autenticación
    setIsAuthenticated(false);
  };

  return (
    <header className="header">
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        width={100}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1 className="title">GENERADOR QR</h1>
      {isAuthenticated && (
        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      )}
    </header>
  );
};

export default Header1;
