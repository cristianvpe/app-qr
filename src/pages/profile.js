// src/pages/ProfilePage.js
import React from "react";
import CerrarSesion from "../components/cerrarsesion";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import VolverBoton from "../components/volverboton";
import Profile from "../components/profile";
import '../components/layout.css';


const ProfilePage = () => {
  return (
    <Layout>
      <Header />
      <CerrarSesion />
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
