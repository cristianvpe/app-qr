import React, { useState } from 'react';

const UpdateUser = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost/api-qr-tandem/v1/update-user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, role }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

};

export default UpdateUser;