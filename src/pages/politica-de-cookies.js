import React from 'react';
import PoliticaDeCookies from '../components/cookies';
import Layout from '../components/layout'; 
import VolverBoton from '../components/volverboton';
import Header from '../components/header';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/scroll';

const Politica = () => {
  return (
    <Layout>
        <Header/>
      <PoliticaDeCookies/>
      <VolverBoton/>
      <ScrollToTopButton/>
      <Footer/>
    </Layout>
  );
};

export default Politica;