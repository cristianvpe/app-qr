import React from "react";
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import "../components/layout.css"
import TandemButton from "../components/button";
import Header from "../components/header"
import Footer from "../components/footer";
import VolverBoton from "../components/volverboton";



function Inicio() {
  return (
    <Layout>
      <Header></Header>
      <div className="qrinicio">
        <h1>GENERADOR DE QR</h1>
        <StaticImage
          src="../images/qr-code.png"
          loading="eager"
          width={150}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <br></br>
        <div className="qrboton">
        <TandemButton enlace="/generador-de-qr" class="boton-qr">Crear QR</TandemButton>
        </div>
      </div>

      <div className="qrarchivo">
        <h2>ARCHIVOS QR</h2>
        <StaticImage
          src="../images/qr-code.png"
          loading="eager"
          width={120}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <StaticImage
          src="../images/qr-code.png"
          loading="eager"
          width={120}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <StaticImage
          src="../images/qr-code.png"
          loading="eager"
          width={120}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <div className="qrboton">
        <TandemButton class="boton-qr">Acceder QR</TandemButton>
      </div>
      </div>
      <VolverBoton/>
      <Footer/>
    </Layout>
  )
}

export default Inicio