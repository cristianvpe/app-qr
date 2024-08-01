// src/pages/ProfilePage.js
import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import VolverBoton from "../components/volverboton";
import Profile from "../components/profile";
import '../components/layout.css';
import CerrarSesion from "../components/cerrarsesion";


const ProfilePage = () => {
  return (
    <Layout>
      <Header />
      <CerrarSesion></CerrarSesion>
      <main className="main-content">
        <Profile />
        <div className="actions">
          <VolverBoton />
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default ProfilePage;
