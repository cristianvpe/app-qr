import React, { useState } from 'react';

const UpdateUser = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost/api-qr-tandem/v1/change-role.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, role }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Actualizar Rol de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Role:
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
          </label>
        </div>
        <button type="submit">Actualizar Rol</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateUser;