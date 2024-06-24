import React from 'react';
import Layout from '../components/layout'; 
import '../components/layout.css';
import VolverBoton from '../components/volverboton';
import Header from '../components/header';
import Footer from '../components/footer';
import OlvideContrasena from '../components/recordarcontraseña';
import { StaticImage } from 'gatsby-plugin-image';

const Contrasena = () => {
  return (
    <Layout>
      <Header/>
      <div className="login-form-container">
        <div className="login-form">
          <StaticImage
            src="../images/logo.png"
            loading="eager"
            width={100}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
          <OlvideContrasena/>
        </div>
      </div>
      <VolverBoton/>
      <Footer/>
    </Layout>
  );
};

export default Contrasena;
