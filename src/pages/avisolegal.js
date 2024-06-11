import React from 'react';
import AvisoLegal from '../components/avisolegal';
import Layout from '../components/layout'; 
import VolverBoton from '../components/volverboton';
import Header from '../components/header';
import Footer from '../components/footer';

const AvisoLegalPage = () => {
  return (
    <Layout>
        <Header/>
      <AvisoLegal/>
      <VolverBoton/>
      <Footer/>
    </Layout>
  );
};

export default AvisoLegalPage;
