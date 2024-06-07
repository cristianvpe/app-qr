import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Header from "../components/header1"
import Header1 from "../components/header1"
import Footer from "../components/footer"
import TandemButton from "../components/button"


const IndexPage = () => (
  <Layout> 
    <Header>
    </Header>
    <div className="botones">
   <TandemButton enlace="acceso-qr">Acceso QR</TandemButton>
   <TandemButton enlace="informacion-institucional">Informacion Institucional</TandemButton>
   </div>
    <Footer/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
