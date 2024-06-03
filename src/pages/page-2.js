import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../components/layout.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"

const EmployeeLoginForm = () => {
  return (
    <Layout>
      <Header/>
      <div className="login-form-container">
        <form className="login-form">
          <h2>Acceso de Empleados</h2>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Ingresar</button>
        </form>
      </div>
      <Footer/>
    </Layout>
  );
};
export default EmployeeLoginForm;
export const Head = () => <Seo title="Acceso de Empleados" />