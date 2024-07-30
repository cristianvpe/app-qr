import React, { useState } from 'react';

const DeleteUserButton = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteUser = async () => {
    if (!email) {
      setMessage('Por favor, proporciona un correo electrónico.');
      return;
    }

    try {
      const response = await fetch('https://cristian.tandempatrimonionacional.eu/api-qr-tandem/v1/delete-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error al eliminar el usuario: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Eliminar Usuario</h2>
      <input
        type="text"
        placeholder="Correo electrónico del usuario"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleDeleteUser}>Eliminar Usuario</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteUserButton;