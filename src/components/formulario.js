import React, { useState, useEffect } from 'react';
import "./layout.css"; // Suponiendo que es un archivo CSS compartido
import '@fortawesome/fontawesome-free/css/all.min.css';
import { StaticImage } from "gatsby-plugin-image"; // Si estás utilizando Gatsby

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Inicialmente asumimos pantalla grande

  
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/login-users.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.message === 'Login exitoso') {
        // Manejar login exitoso (ej. almacenar datos de usuario, redireccionar)
        console.log(data.user);
        setMessage('Login exitoso');
      } else {
        setMessage('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en el login', error);
      setMessage('Error en el login');
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        {isSmallScreen ? (
          <>
            <h2>Acceso empleados</h2>
            <StaticImage
              src="../images/logo.png"
              loading="eager"
              width={100}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </>
        ) : (
          <>
            <StaticImage
              src="../images/logo.png"
              loading="eager"
              width={100}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
            <h2>Acceso empleados</h2>
          </>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
        <p>{message}</p>
        {!isSmallScreen && ( // Renderizar condicionalmente enlaces solo en pantallas grandes
          <>
            <a href="/olvidar">¿Olvidaste tu contraseña?</a>
            <a href="/registro">Registrarse</a>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
