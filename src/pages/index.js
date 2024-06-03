import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import AlertButton from "../components/button"
import Header from "../components/header"
import AlertButton2 from "../components/button2"
import Footer from "../components/footer"


const IndexPage = () => (
  <Layout>
    <div>
    <Header>
    </Header>
    </div>
    <div className="botones">
   <AlertButton/>
    <AlertButton2/>
   </div>
    <Footer/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
