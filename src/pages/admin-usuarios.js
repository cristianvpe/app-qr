import React from "react";
import Layout from "../components/layout";
import TablaUsuarios from "../components/tablausuarios";
import ScrollToTopButton from "../components/scroll";
import Header from "../components/header";
import Footer from "../components/footer";
import VolverAtras from "../components/volveratras";
import "../components/layout.css";
import TandemButton from "../components/button";

function AdminUsuarios() {
    return (
        <>
            <Layout>
                <Header/>
                <TandemButton enlace="/registro" style={{ backgroundColor: '#AC8859', color: 'white', padding: '10px 10px', marginTop: '20px', marginLeft: '20px', borderRadius: '5px'  }}> Añadir usuario </TandemButton>
                <TablaUsuarios url="http://localhost/api-qr-tandem/v1/list-users.php"></TablaUsuarios>
                <ScrollToTopButton/>
                <VolverAtras></VolverAtras>
                <Footer />
            </Layout>
        </>
    )
}

export default AdminUsuarios