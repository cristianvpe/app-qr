
import React from "react";
import '../components/layout.css';
import { StaticImage } from "gatsby-plugin-image";
import { useEffect, useState } from "react";

const Profile = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    setNombre(localStorage.getItem('tandem_nombre') || '');
    setEmail(localStorage.getItem('tandem_email') || '');
    setId(localStorage.getItem('tandem_id') || '');
  }, []);

  return (
    <div>
      <StaticImage
              src="../images/avatar.png"
              alt="avatar"
              className="avatar"
              style={{ width: '100px', height: '100px' }}
            />
      <p className="profile-item">Nombre: {nombre}</p>
      <p className="profile-item">Email: {email}</p>
      <p className="profile-item">Id: {id}</p>
      <a href="/olvidar" role="button" className="btn btn-primary">
        Olvidar
      </a>
    </div>
  );
};

export default Profile;
  
