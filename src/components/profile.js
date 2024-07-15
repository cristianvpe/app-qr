// src/components/Profile.js
import React from "react";
import '../components/layout.css';
import { StaticImage } from "gatsby-plugin-image";

const Profile = () => {
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
        <p className="profile-item">Nombre: {localStorage.getItem('tandem_nombre')}</p>
        <p className="profile-item">Email: {localStorage.getItem('tandem_email')}</p>
        <p className="profile-item">Id: {localStorage.getItem('tandem_id')}</p>
        <a href="/" role="button" className="btn btn-primary">
          Cambiar contraseña
        </a>
      </div>
    </div>
  );
};

export default Profile;
