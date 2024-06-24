import React, { useState } from 'react';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [delegacion, setDelegacion] = useState(''); // State for user delegation
  const [selectedLocation, setSelectedLocation] = useState(''); // State for dropdown selection
  const [isRegistered, setIsRegistered] = useState(false); // State for registration success

  const locations = ['Aranjuez', 'El Escorial', 'Madrid']; // Array of available locations

  const handleNombre = (e) => setNombre(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleDelegacion = (e) => setDelegacion(e.target.value); // Handle delegation input if needed
  const handleLocationChange = (e) => setSelectedLocation(e.target.value);

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
      if (data.success) {
        setIsRegistered(true);
        console.log('Registro exitoso:', data);
      } else {
        console.error('Error al registrar:', data);
        // Optionally handle specific errors or display an error message to the user
      }
    } catch (error) {
      console.error('Error registrando usuario', error);
      // Handle errors gracefully (e.g., display an error message to the user)
    }
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
      <input
        type="password"
        placeholder="Introduce tu Contraseña"
        id='password'
        value={password}
        onChange={handlePassword}
      />

      <label htmlFor='ubicacion'>Delegacion</label>
      <select id="ubicacion" value={selectedLocation} onChange={handleLocationChange}>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      <button onClick={handleRegistro}>Registrar</button>

      {isRegistered && ( // Conditionally render success alert
        <div className="alert alert-success" role="alert">
          Se ha registrado con éxito!
        </div>
      )}
    </div>
  );
};

export default Registro;
