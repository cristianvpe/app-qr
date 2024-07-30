import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const locations = ['Aranjuez', 'El Escorial', 'Madrid'];

  const handleNombre = (e) => setNombre(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLocationChange = (e) => setSelectedLocation(e.target.value);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const handleRegistro = async () => {
    try {
      const response = await fetch('https://cristian.tandempatrimonionacional.eu/api-qr-tandem/v1/register-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          delegacion: selectedLocation,
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
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <label htmlFor='nombre'>Nombre</label>
      <input
        type="text"
        placeholder="Introduce tu nombre"
        id='nombre'
        value={nombre}
        onChange={handleNombre}
        style={{ width: '100%', marginBottom: '10px', padding: '10px', boxSizing: 'border-box' }}
      />

      <label htmlFor='email'>Email</label>
      <input
        type="text"
        placeholder="Introduce tu email"
        id='email'
        value={email}
        onChange={handleEmail}
        style={{ width: '100%', marginBottom: '10px', padding: '10px', boxSizing: 'border-box' }}
      />

      <label htmlFor='password'>Contraseña</label>
      <div className="password-container" style={{ position: 'relative', width: '100%', marginBottom: '10px' }}>
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Introduce tu contraseña"
          id='password'
          value={password}
          onChange={handlePassword}
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
        />
        <i
          className={`fa ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
          onClick={togglePasswordVisibility}
          style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
        ></i>
      </div>

      <label htmlFor='ubicacion'>Delegación</label>
      <select id="ubicacion" value={selectedLocation} onChange={handleLocationChange} style={{ width: '100%', marginBottom: '10px', padding: '10px', boxSizing: 'border-box' }}>
        <option value="" disabled>Selecciona tu delegación</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      <button onClick={handleRegistro} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}>Registrar</button>
      {message && (
        <p style={isRegistered ? successStyle : errorStyle}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Registro;
