import React, { useState } from 'react';
import "../components/layout.css"
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import VolverBoton from '../components/volverboton';
import Header from '../components/header';
import Footer from '../components/footer';
import Registered from '../components/registro';

const Register = () => {
  return (
    <Layout>
      <Header/>
      <Registered> 
        <StaticImage
          src="../images/logo.png"
          loading="eager"
          width={100}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Registered>
      <VolverBoton/>
      <Footer/>
    </Layout>
  );
};

export default Register;