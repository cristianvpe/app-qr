import React from 'react';
import AvisoLegal from '../components/avisolegal';
import Layout from '../components/layout'; 
import VolverBoton from '../components/volverboton';
import Header from '../components/header';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/scroll';

const AvisoLegalPage = () => {
  return (
    <Layout>
        <Header/>
      <AvisoLegal/>
      <VolverBoton/>
      <ScrollToTopButton/>
      <Footer/>
    </Layout>
  );
};

export default AvisoLegalPage;
