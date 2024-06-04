import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Header from "../components/header"
import Footer from "../components/footer"
import TandemButton from "../components/button"


const IndexPage = () => (
  <Layout>
    <div>
    <Header>
    </Header>
    </div>
    <div className="botones">
   <TandemButton enlace="page-2">Acceso QR</TandemButton>
   <TandemButton enlace="page-3">Informacion Institucional</TandemButton>
   </div>
    <Footer/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
