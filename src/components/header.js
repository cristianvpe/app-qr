import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import "../components/layout.css"; // Importa tu archivo CSS


const Header = () => {
  return (
    <header className="header">
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        width={100}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1 className="title">GENERADOR QR</h1>
    </header>
  );
};

export default Header;
