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
        <Formulario/>
      <VolverBoton/>
      <Footer/>
    </Layout>
  );
};

export default LoginForm;
