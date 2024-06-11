import React from 'react';
import Accesibilidad from '../components/accesibilidad';
import Layout from '../components/layout'; 
import VolverBoton from '../components/volverboton';
import Header from '../components/header';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/scroll';

const AccesibilidadPage = () => {
  return (
    <Layout>
        <Header/>
      <Accesibilidad/>
      <VolverBoton/>
      <ScrollToTopButton/>
      <Footer/>
    </Layout>
  );
};

export default AccesibilidadPage;