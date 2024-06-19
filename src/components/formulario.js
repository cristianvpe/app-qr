import React from "react";
import "./layout.css";
import { StaticImage } from "gatsby-plugin-image";

const LoginForm = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth < 768); // Adjust breakpoint as needed

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
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
        <h2>Acceso empleados</h2>
        <label htmlFor="usuario">Usuario</label>
        <input type="text" id="usuario" name="usuario" />
        <br />
        <label htmlFor="contrasena">Contraseña</label>
        <input type="password" id="contrasena" name="contrasena" />
        <br />
        <button type="submit">Entrar</button>

        {!isSmallScreen && ( // Conditionally render links only on larger screens
          <>
            <a href="#">Olvidaste contraseña</a>
            <a href="/registro">Registrarse</a>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
