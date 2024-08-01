import React, { useState } from 'react';
import '../components/layout.css';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Registro from '../components/registro';
import Footer from "../components/footer";
import Header from "../components/header";
import VolverAtras from '../components/volveratras';



const Register = () => {


    return (
      <Layout>
        <Header></Header>
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
      <h2>Registro</h2>
         
        <Registro></Registro>
        </div>
        </div>
      <VolverAtras></VolverAtras>
      <Footer></Footer>
        </Layout>
    );
};

export default Register;