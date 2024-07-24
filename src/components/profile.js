import React, { useState, useEffect } from "react";
import '../components/layout.css';
import { StaticImage } from "gatsby-plugin-image";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    nombre: '',
    email: '',
    id: ''
  });

  useEffect(() => {
    setProfileData({
      nombre: localStorage.getItem('tandem_nombre') || '',
      email: localStorage.getItem('tandem_email') || '',
      id: localStorage.getItem('tandem_id') || ''
    });
  }, []);

  return (
    <div className="content-container">
      <h2 className="page-title">Perfil del Usuario</h2>
      <div className="profile-container">
        <StaticImage
          src="../images/avatar.png"
          alt="avatar"
          className="avatar"
          style={{ width: '100px', height: '100px' }}
        />
        <p className="profile-item">Nombre: {profileData.nombre}</p>
        <p className="profile-item">Email: {profileData.email}</p>
        <p className="profile-item">Id: {profileData.id}</p>
        <a href="/olvidar" role="button" className="btn btn-primary">
          Cambiar contraseña
        </a>
      </div>
    </div>
  );
};

export default Profile;
