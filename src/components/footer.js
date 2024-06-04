import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"

const Footer = () => {
  return (
    <footer> <br></br>
      <div className="footer-right">
        <div className="footer-links">
          <a className="a" href="https://www.patrimonionacional.es/aviso-legal">
            Aviso Legal
          </a>
          
          |{" "} 
          <a className="a" href="https://www.patrimonionacional.es/accesibilidad">
            Accesibilidad
          </a>
          
          |{" "}
          <a className="a" href="https://www.patrimonionacional.es/politica-de-privacidad">
            Política de Privacidad
          </a>
          |{" "}
          <a className="a" href="https://www.patrimonionacional.es/politica-de-cookies">
            Política de cookies
          </a>
          |{" "}
          <a className="a" href="https://www.patrimonionacional.es/contacto">
            Contacto
          </a>
        </div>
      </div>
      <br/>
      <div className="footer-left">
        <span>© {new Date().getFullYear()} &middot; </span>
        <a class="a" href="https://www.patrimonionacional.es/">Patrimonio Nacional</a>
      </div>
    </footer>
  )
}

export default Footer
