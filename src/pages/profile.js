import React from "react"
import CerrarSesion from "../components/cerrarsesion"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import VolverBoton from "../components/volverboton"


const Profile = () => {
  return (
    <>
      <Layout>
        <Header></Header>
        <div className="qr-contenido">
      <p>Nombre: {localStorage.getItem('tandem_nombre')}</p>
      <p>Email: {localStorage.getItem('tandem_email')}</p>
      <p>Id: {localStorage.getItem('tandem_id')}</p>
      </div>
      <a href="/contrasenia" role='button' className='aform'>Cambiar contraseña</a>
      <br></br>
      <CerrarSesion></CerrarSesion>
      <VolverBoton></VolverBoton>
      <Footer></Footer>
      </Layout>
    </>
  )
}
export default Profile