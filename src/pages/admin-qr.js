import React from 'react';
import QrCodeList from '../components/qrcodelist';
import Header from '../components/header';
import Footer from '../components/footer';
import VolverBoton from '../components/volverboton';
import EliminarQR from '../components/eliminarqr';

const QrCodeListPage = () => {
  return (
    <div>
      <Header></Header>
      <QrCodeList />
      <VolverBoton></VolverBoton>
      <Footer></Footer>
    </div>
  );
};

export default QrCodeListPage;
