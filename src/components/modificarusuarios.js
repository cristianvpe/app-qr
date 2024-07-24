import React, { useState } from 'react';

const ModificarUsuario = ({ initialNombre, initialEmail, initialDelegacion, initialRole, onUserUpdated }) => {
  const [nombre, setNombre] = useState(initialNombre);
  const [email, setEmail] = useState(initialEmail);
  const [delegacion, setDelegacion] = useState(initialDelegacion);
  const [role, setRole] = useState(initialRole);
  const [message, setMessage] = useState('');

  const manejarUsuario = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/update-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, delegacion, role }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setMessage(data.message);
      onUserUpdated({ nombre, email, delegacion, role });
    } catch (error) {
      console.error('Error registrando usuario:', error);
      setMessage('Error en el registro');
    }
  };

  return (
    <div>
      <h2>Actualizar Datos de Usuario</h2>
      <form onSubmit={manejarUsuario}>
        <div>
          <p>{email}</p>
        </div>
        <div>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Delegación:
            <input type="text" value={delegacion} onChange={(e) => setDelegacion(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Rol:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="empleado">Empleado</option>
            </select>
          </label>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ModificarUsuario;
