import React from "react";
import Layout from "../components/layout";
import AdminQR from "../components/tablaqr";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/layout.css";


const AdminPage = () => {
  return (
    <Layout>
        <Header></Header>
      <AdminQR url="http://localhost/api-qr-tandem/v1/list-qr.php" />
      <Footer></Footer>
    </Layout>
  );
};

export default AdminPage;
