import React from "react";
import "./layout.css";

const Registered = () => (
  <div className="login-form-container">
    <div className="login-form">
      <h2>Registro</h2>
      <form>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          placeholder="Ingrese su nombre de usuario" // Placeholder for username
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Ingrese su dirección de correo electrónico" 
        />
        <br />
        <label htmlFor="delegacion">Delegación</label>
        <input
          type="text"
          id="delegacion"
          name="delegacion"
          placeholder="Ingrese su delegación" 
        />
        <br />
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          placeholder="Ingrese su contraseña" 
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
      <a href="#">Olvidaste contraseña</a>
      <a href="/registro">Registrarse</a>
    </div>
  </div>
);

export default Registered;
