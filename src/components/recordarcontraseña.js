import React, { useState } from 'react';

const OlvideContrasena = () => {
  const [email, setEmail] = useState('');
  const [isRequestSent, setIsRequestSent] = useState(false); // State for password reset request

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleRequestReset = async () => {
    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/reset-password.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsRequestSent(true);
        console.log('Solicitud de restablecimiento enviada:', data);
      } else {
        console.error('Error al enviar la solicitud:', data);
        // Optionally display an error message to the user (e.g., "Email not found")
      }
    } catch (error) {
      console.error('Error solicitando restablecimiento de contraseña:', error);
      // Handle errors gracefully (e.g., display a generic error message)
    }
  };

  return (
    <div className="olvide-contrasena">
      <h2>¿Olvidaste tu contraseña?</h2>
      <p>Introduce tu correo electrónico y te enviaremos las instrucciones para restablecer tu contraseña.</p>
      <label htmlFor="email">Correo electrónico</label>
      <input
        type="email"
        placeholder="Introduce tu correo electrónico"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={handleRequestReset} disabled={!email}>
        Enviar
      </button>
      {isRequestSent && ( // Conditionally render success message
        <div className="alert alert-info" role="alert">
          Hemos enviado un correo electrónico con instrucciones para restablecer tu contraseña. Revisa tu bandeja de entrada (o spam) en unos minutos.
        </div>
      )}
    </div>
  );
};

export default OlvideContrasena;
