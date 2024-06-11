import React from 'react';
import Privacidad from '../components/privacidad';
import Layout from '../components/layout'; 
import VolverBoton from '../components/volverboton';
import Header from '../components/header';
import Footer from '../components/footer';

const PrivacidadPage = () => {
  return (
    <Layout>
        <Header/>
      <Privacidad/>
      <VolverBoton/>
      <Footer/>
    </Layout>
  );
};

export default PrivacidadPage