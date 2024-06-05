import React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import Collapse2 from "../components/collapse2";
import MyComponent from "../components/select";
import TandemButton from "../components/button";
import Footer from "../components/footer";
import VolverBoton from "../components/volverboton";
import QRCode from 'qrcode.react';

function Crearqr() {
  const [inputValue, setInputValue] = useState('');
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleColorChange = (color) => {
    setQrColor(color);
  };
  const handleSizeChange = (size) => {
    setQrSize(parseInt(size, 10));
  };
  const containerStyle = {
    backgroundColor: "beige",
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };
  return (
    <Layout>
      <div style={containerStyle}>
        <h1>GENERADOR DE QR</h1>
      
        <Collapse2 />
        <br />
        <p>Introduce tu texto o url aquí:</p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <MyComponent onColorChange={handleColorChange} onSizeChange={handleSizeChange} />
        <br />
        <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
        <br />
        <TandemButton enlace="#">Generar QR</TandemButton>
      </div>
      <VolverBoton/>
      <Footer/>
    </Layout>
  )
}
export default Crearqr;