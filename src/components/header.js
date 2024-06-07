import * as React from "react";
import { Link } from "gatsby";
import "../components/layout.css"
import { StaticImage } from 'gatsby-plugin-image';

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `white`,
      width: `100%`, 
      borderBottom: `1px solid #ddd`, 
    }}
  >
    <Link to="/" style={{ display: `flex`, alignItems: `center` }}>
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        width={60} 
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="Logo PN"
        style={{ marginLeft: `20px` }} 
      />
      <h1 style={{ margin: 0 }}>{}</h1> {}
    </Link>
  </header>
);

export default Header;