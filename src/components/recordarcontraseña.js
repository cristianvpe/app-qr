import React, { useState } from 'react';

const OlvideContrasena = () => {
  const [email, setEmail] = useState('');
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleRequestReset = async () => {
    if (!email) {
      setErrorMessage('Por favor, introduce un correo electrónico.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/sendemail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('La respuesta no es JSON');
      }

      const data = await response.json();

      // Always set setIsRequestSent to true
      setIsRequestSent(true);

    } catch (error) {
      console.error('Error solicitando restablecimiento de contraseña:', error);
      setErrorMessage('Error solicitando restablecimiento de contraseña: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="olvide-contrasena">
      <h2>¿Olvidaste tu contraseña?</h2>
      <p>Introduce tu correo electrónico y te enviaremos las instrucciones para restablecer tu contraseña.</p>
      <input
        type="email"
        placeholder="Introduce tu correo electrónico"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={handleRequestReset} disabled={!email || isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar'}
      </button>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      {isRequestSent && (
        <div className="alert alert-success" role="alert">
          El mensaje ha sido enviado con éxito, revisa tu bandeja
        </div>
      )}
    </div>
  );
};

export default OlvideContrasena;
