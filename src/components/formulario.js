import React from "react";
import "./layout.css"; // Asegúrate de importar el archivo CSS

const LoginForm = () => (
  <div className="login-form-container">
    <div className="login-form">
      <h2>Acceso empleados</h2>
      <form>
        <label htmlFor="usuario">Usuario</label>
        <input type="text" id="usuario" name="usuario" />
        <br />
        <label htmlFor="contrasena">Contraseña</label>
        <input type="password" id="contrasena" name="contrasena" />
        <br />
        <button type="submit">Entrar</button>
      </form>
      <a href="#">Olvidaste contraseña</a>
      <a href="/registro">Registrarse</a>
    </div>
  </div>
);

export default LoginForm;
