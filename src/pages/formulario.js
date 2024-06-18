import React from 'react';
import Layout from '../components/layout'; 
import VolverBoton from '../components/volverboton';
import Header from '../components/header';
import Footer from '../components/footer';
import Formulario from '../components/formulario';
import { StaticImage } from 'gatsby-plugin-image';

const LoginForm = () => {
  return (
    <Layout>
        <Header/>
        <StaticImage className='logo-formulario'
          src="../images/logo.png" // Replace with your image path
          loading="eager"
          width={100} // Adjust width as desired
          quality={100}
          formats={['auto', 'webp', 'avif']}
          alt="Your logo description"
          style={{
            marginBottom: '20px', // Add some margin below the image
          }}
        />
        <Formulario/>
      <VolverBoton/>
      <Footer/>
    </Layout>
  );
};

export default LoginForm;
