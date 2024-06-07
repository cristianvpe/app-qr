import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./layout.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container"> 
        <div className="footer-content">
          <div className="footer-links">
            <a className="a" href="https://www.patrimonionacional.es/aviso-legal">
              Aviso Legal
            </a>
            {" "} |{" "}
            <a className="a" href="https://www.patrimonionacional.es/accesibilidad">
              Accesibilidad
            </a>
            {" "} |{" "}
            <a className="a" href="https://www.patrimonionacional.es/politica-de-privacidad">
              Política de Privacidad
            </a>
            {" "} |{" "}
            <a className="a" href="https://www.patrimonionacional.es/politica-de-cookies">
              Política de cookies
            </a>
            {" "} |{" "}
            <a className="a" href="https://www.patrimonionacional.es/contacto">
              Contacto
            </a>
          </div>
          <div className="footer-logos">
            <StaticImage
              src="../images/logosfooter/logo1.png"
              alt="Logo 1"
              className="footer-logo"
            />
            <StaticImage
              src="../images/logosfooter/logo2.png"
              alt="Logo 2"
              className="footer-logo"
            />
            <StaticImage
              src="../images/logosfooter/logo3.png"
              alt="Logo 3"
              className="footer-logo"
            />
          
            <StaticImage
              src="../images/logosfooter/logo5.png"
              alt="Logo 5"
              className="footer-logo"
            />
          </div>
          <div className="footer-left">
            <span>© {new Date().getFullYear()} &middot; </span>
            <a className="a" href="https://www.patrimonionacional.es/">Patrimonio Nacional</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
