import React, { useState, useEffect } from "react";
import '../components/layout.css';
import { StaticImage } from "gatsby-plugin-image";


const Profile = () => {
  const [profileData, setProfileData] = useState({
    nombre: '',
    email: '',
    id: ''
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    setProfileData({
      nombre: localStorage.getItem('tandem_nombre') || '',
      email: localStorage.getItem('tandem_email') || '',
      id: localStorage.getItem('tandem_id') || ''
    });

    const savedImage = localStorage.getItem('profile_image');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setImage(base64Image);
        localStorage.setItem('profile_image', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="content-container">
      <h2 className="page-title">Perfil del Usuario</h2>
      <div className="profile-container">
        {image ? (
          <img src={image} alt="avatar" className="avatar" style={{ width: '100px', height: '100px' }} />
        ) : (
          <StaticImage
            src="../images/avatar.png"
            alt="avatar"
            className="avatar"
            style={{ width: '100px', height: '100px' }}
          />
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
        <p className="profile-item">Nombre: {profileData.nombre}</p>
        <p className="profile-item">Email: {profileData.email}</p>
        <p className="profile-item">Id: {profileData.id}</p>

        <a href="/admin-usuarios" role="button" className="btn btn-primary">
          Listado usuarios
        </a>
        
        <a href="/admin-qr" role="button" className="btn btn-primary">
          Listado de QR
        </a>
        
        <a href="/generador-de-qr" role="button" className="btn btn-primary">
          Generar de QR
        </a>
        
        <a href="/olvidar" role="button" className="btn btn-primary">
          Cambiar contraseña
        </a>
      </div>
    </div>
  );
};

export default Profile;
