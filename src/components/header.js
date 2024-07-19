import * as React from "react";
import { Link } from "gatsby";
import "../components/layout.css";
import { StaticImage } from "gatsby-plugin-image";
import Darkmode from "./darkmode";
import { FaMoon } from 'react-icons/fa';

const Header = ({ siteTitle, toggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false); // Manage dark mode state

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState); // Toggle dark mode state
  };

  return (
    <Darkmode dark={isDarkMode}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: `flex`, alignItems: `center` }}>
          <StaticImage
            src="../images/logo.png"
            loading="eager"
            width={60}
            quality={95}
            formats={["auto", "webp", 'avif']}
            alt="Logo PN"
            style={{ marginLeft: `20px` }}
          />
          <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        </Link>
        <button onClick={handleToggleDarkMode} style={{ width: '30px', height: '30px' }}>
          <FaMoon />
        </button>
      </header>
    </Darkmode>
  );
};

export default Header;
