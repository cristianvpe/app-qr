import React from "react";
import Layout from "../components/layout";
import Collapse2 from "../components/collapse2";
import MyComponent from "../components/select";
import TandemButton from "../components/button";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/footer";
import VolverBoton from "../components/volverboton";
function Crearqr() {
  return(
<Layout>
  <div className="crear">
    
  <div className="tex-center">
  <h1 >GENERADOR DE QR </h1> 
  <StaticImage
        src="../images/qr-code.png"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> 
  <Collapse2></Collapse2>
  </div>

  <br></br>
  Introduce tu texto o url aquí:
<input  type="text" />
<MyComponent></MyComponent>   
<br></br>
<TandemButton enlace="#">Generar QR</TandemButton>
</div>
<VolverBoton/>
<Footer></Footer>
</Layout>
  )
}

export default Crearqr;