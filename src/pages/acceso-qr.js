import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../components/layout.css";
import TandemButton from "../components/button";
import Header from "../components/header";
import Footer from "../components/footer";
import VolverBoton from "../components/volverboton";

function Inicio() {
  return (
    <Layout>
      <div className="container">
        <Header />
        <div className="content">
          <div className="qrinicio">
            <h1>GENERADOR DE QR</h1>
            <StaticImage
              src="../images/qr-code.png"
              loading="eager"
              width={200} 
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
            <br />
            <div className="qrboton">
              <TandemButton enlace="/generador-de-qr" class="boton-qr">Crear QR</TandemButton>
            </div>
          </div>
        </div>
        <VolverBoton />
      </div>
      <Footer />
    </Layout>
  );
}

export default Inicio;
