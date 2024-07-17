import React from 'react';
import QrCodeList from '../components/qrcodelist';
import Header from '../components/header';
import Footer from '../components/footer';
import VolverBoton from '../components/volverboton';
import EliminarQR from '../components/eliminarqr';
import VolverAtras from '../components/volveratras';
import "../components/layout.css";
import TandemButton from '../components/button';

const QrCodeListPage = () => {
  return (
    <div>
      <Header></Header>
      <TandemButton enlace="/generador-de-qr" style={{ backgroundColor: '#AC8859', color: 'white', padding: '10px 10px', marginTop: '20px', marginLeft: '20px', borderRadius: '5px'  }}> Añadir QR </TandemButton>
      <QrCodeList />
      <VolverAtras></VolverAtras>
      <Footer></Footer>
    </div>
  );
};

export default QrCodeListPage;
