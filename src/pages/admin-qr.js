import React from 'react';
import QrCodeList from '../components/qrcodelist';
import Header from '../components/header';
import Footer from '../components/footer';
import VolverBoton from '../components/volverboton';
import EliminarQR from '../components/eliminarqr';
import VolverAtras from '../components/volveratras';
import { Button } from "@mui/material";
import "../components/layout.css";

const QrCodeListPage = () => {
  return (
    <div>
      <Header></Header>
      <Button enlace="/generador-de-qr" style={{ backgroundColor: '#AC8859', color: 'white', padding: '10px 10px', marginTop: '20px', marginLeft: '20px', borderRadius: '5px'  }}> Añadir QR </Button>
      <QrCodeList />
      <VolverAtras></VolverAtras>
      <Footer></Footer>
    </div>
  );
};

export default QrCodeListPage;
