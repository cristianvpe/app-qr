import React, { useState, useEffect } from 'react';
import "./layout.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { StaticImage } from "gatsby-plugin-image";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, })
      });
      const data = await response.json();
      if (data.message === 'Login exitoso') {
        console.log(data.user);
        setMessage('Login exitoso');
        localStorage.setItem('tandem_nombre', data.user.nombre);
        localStorage.setItem('tandem_email', data.user.email);
        localStorage.setItem('tandem_id', data.user.id);
        window.location.href = '/generador-de-qr';
      } else {
        setMessage('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en el login', error);
      setMessage('Error en el login');
    }
  };

  return (
    <div className="login-form-container with-placeholder-style">
      <div className="login-form">
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
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="introduce tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <div className="password-container with-placeholder-style">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="introduce tu contraseña"
            id='password'
            value={password}
            onChange={handlePassword}
          />
          <i
            className={`fa ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
            onClick={togglePasswordVisibility}
            style={{ cursor: 'pointer' }}
          ></i>
        </div>
        <button onClick={handleLogin}>Entrar</button>
        <p>{message}</p>
        <div className="links-container">
          <a href="/olvidar">¿Olvidaste tu contraseña?</a>
          <a href="/registro">Registrarse</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
