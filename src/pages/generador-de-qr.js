import * as React from "react";
import { useState, useRef } from "react";
import Layout from "../components/layout";
import "../components/layout.css"
import Collapse2 from "../components/collapse2";
import MyComponent from "../components/select";
import TandemButton from "../components/button";
import QRCode from 'qrcode.react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import download from 'downloadjs';
import VolverBoton from "../components/volverboton";
import Footer from "../components/footer";

function Crearqr() {
  const [inputValue, setInputValue] = useState('');
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const qrRef = useRef(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleColorChange = (color) => {
    setQrColor(color);
  };
  const handleSizeChange = (size) => {
    setQrSize(parseInt(size, 10));
  };
  const handleDownload = async () => {
    if (qrRef.current) {
      const dataUrl = await toPng(qrRef.current);
      download(dataUrl, 'qr-code.png');
    }
  };

  const handleDownload2 = async () => {
    if (qrRef.current) {
      const dataUrl = await toJpeg(qrRef.current);
      download(dataUrl, 'qr-code.jpeg');
    }
  };

  const handleDownload3 = async () => {
    if (qrRef.current) {
      const dataUrl = await toSvg(qrRef.current);
      download(dataUrl, 'qr-code.svg');
    }
  };

  const containerStyle = {
    backgroundColor: "#FAEBD7",
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "50%",
    height: "50%",
    margin: "auto", 
    marginTop:"1em",
    justifyContent: "center", 
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "2px solid #ccc",
    fontSize: "16px",
    width: "50%", 
    marginBottom: "10px", 
  };

  const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta']; // Colores ampliados
  return (
    <Layout>
      <div style={containerStyle}>
        <h1>GENERADOR DE QR</h1>
        <Collapse2 />
        <br />
        <p>Introduce tu texto o url aquí:</p>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          style={inputStyle} 
        />
        <MyComponent
          onColorChange={handleColorChange}
          onSizeChange={handleSizeChange}
          colorOptions={colorOptions}
        />
        <br /> 
        <div className="qr-contenido">
          <div ref={qrRef}>
            <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
          </div>
          <br />
          <br />
          <p>Contenido del QR:</p>
          <p>{inputValue}</p>
        </div>
        <br />
        <div className="buttondownload-container">
          <button onClick={handleDownload} className="buttondownload">PNG</button>
          <button onClick={handleDownload2} className="buttondownload">JPG</button>
          <button onClick={handleDownload3} className="buttondownload">SVG</button>
        </div>
      </div>
      <VolverBoton/>
      <Footer/>
    </Layout>
  );
}

export default Crearqr;
