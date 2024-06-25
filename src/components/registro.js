import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [delegacion, setDelegacion] = useState(''); // State for user delegation
  const [selectedLocation, setSelectedLocation] = useState(''); // State for dropdown selection
  const [isRegistered, setIsRegistered] = useState(false); // State for registration success
  const [message, setMessage] = useState(''); // State for displaying messages
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility

  const locations = ['Aranjuez', 'El Escorial', 'Madrid']; // Array of available locations

  const handleNombre = (e) => setNombre(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleDelegacion = (e) => setDelegacion(e.target.value); // Handle delegation input if needed
  const handleLocationChange = (e) => setSelectedLocation(e.target.value);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const handleRegistro = async () => {
    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/register-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          delegacion: selectedLocation, // Use selectedLocation for delegation
          email,
          password,
        }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (data.success) {
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    } catch (error) {
      console.error('Error registrando usuario', error);
      setMessage('Error en el registro');
      setIsRegistered(false);
    }
  };

  const successStyle = {
    color: 'white',
    backgroundColor: 'black',
  };

  const errorStyle = {
    color: 'white',
    backgroundColor: 'black',
  };

  return (
    <div>
      <label htmlFor='nombre'>Nombre</label>
      <input
        type="text"
        placeholder="Introduce tu nombre"
        id='nombre'
        value={nombre}
        onChange={handleNombre}
      />

      <label htmlFor='email'>Email</label>
      <input
        type="text"
        placeholder="Introduce tu email"
        id='email'
        value={email}
        onChange={handleEmail}
      />

      <label htmlFor='password'>Contraseña</label>
      <div className="password-container">
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Introduce tu Contraseña"
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

      <label htmlFor='ubicacion'>Delegacion</label>
      <select id="ubicacion" value={selectedLocation} onChange={handleLocationChange}>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      <button onClick={handleRegistro}>Registrar</button>
      {message && (
        <p style={isRegistered ? successStyle : errorStyle}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Registro;
