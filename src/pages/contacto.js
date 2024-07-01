import React from 'react';
import Layout from '../components/layout'; 
import Contacto from '../components/contacto';
import VolverBoton from '../components/volverboton';
import Header from '../components/header';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/scroll';

const ContactPage = () => {
  return (
    <Layout>
        <Header/>
      <Contacto/>
      <VolverBoton/>
      <ScrollToTopButton/>
      <Footer/>
    </Layout>
  );
};

export default ContactPage;