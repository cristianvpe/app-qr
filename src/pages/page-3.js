import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../components/layout.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Institucional from "../components/button2"
import Footer from "../components/footer"
import Header from "../components/header"

const Informacion = () => {
  return (
    <Layout>
      <Header/>
      <Footer/>
    </Layout>
  );
};
export default Informacion;
export const Head = () => <Seo title="Acceso de Empleados" />