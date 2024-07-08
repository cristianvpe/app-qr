import React from "react";
import Layout from "../components/layout";
import TablaUsuarios from "../components/tablausuarios";
import ScrollToTopButton from "../components/scroll";
import Header from "../components/header";
import Footer from "../components/footer";
import UpdateUser from "../components/updateuser";
import VolverBoton from '../components/volverboton';

function AdminUsuarios(){
return(
    <>
    <Layout>
    <Header/>
    <TablaUsuarios url="http://localhost/api-qr-tandem/v1/list-users.php"></TablaUsuarios>
    <UpdateUser></UpdateUser>
    <ScrollToTopButton/>
    <VolverBoton></VolverBoton>
    <Footer/>
    </Layout>
    </>
)
}
export default AdminUsuarios