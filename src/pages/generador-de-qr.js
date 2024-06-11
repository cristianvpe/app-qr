import * as React from "react";
import { useState, useRef } from "react";
import Layout from "../components/layout";
import "../components/layout.css";
import MyComponent from "../components/select";
import QRCode from "qrcode.react";
import { toPng, toJpeg, toSvg } from "html-to-image";
import download from "downloadjs";
import VolverBoton from "../components/volverboton";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaQuestionCircle } from "react-icons/fa"; // Import the help icon
import Modal from "../components/modal"; // Import the modal component
import Tabs from "../components/tabs";
import CompaQr from "../components/share";



function Crearqr() {
  const [inputValue, setInputValue] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [qrColor, setQrColor] = useState("black");
  const [qrSize, setQrSize] = useState(100);
  const [activeTab, setActiveTab] = useState('url'); // State to manage active tab
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const qrRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleLatitudeChange = (event) => {
    const value = event.target.value;
    if (/^-?\d*\.?\d*$/.test(value)) {
      setLatitude(value);
    }
  };

  const handleLongitudeChange = (event) => {
    const value = event.target.value;
    if (/^-?\d*\.?\d*$/.test(value)) {
      setLongitude(value);
    }
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
      download(dataUrl, "qr-code.png");
    }
  };

  const handleDownload2 = async () => {
    if (qrRef.current) {
      const dataUrl = await toJpeg(qrRef.current);
      download(dataUrl, "qr-code.jpeg");
    }
  };

  const handleDownload3 = async () => {
    if (qrRef.current) {
      const dataUrl = await toSvg(qrRef.current);
      download(dataUrl, "qr-code.svg");
    }
  };

  const handleHelpClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
    marginTop: "1em",
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

  const textAreaStyle = {
    ...inputStyle,
    resize: "none", // Prevent resizing of the textarea
  };

  const helpIconStyle = {
    marginLeft: "10px",
    cursor: "pointer",
  };

  const titleContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const colorOptions = [
    "black",
    "blue",
    "red",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "magenta",
  ];

  const renderInputField = () => {
    switch (activeTab) {
      case 'url':
        return (
          <div>
            <p>Introduce la URL:</p>
            <input
              type="text"
              placeholder="www.ejemplo.com"
              value={inputValue}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
        );
      case 'geolocation':
        return (
          <div>
            <p>Introduce la geolocalización (latitud y longitud):</p>
            <input
              type="text"
              placeholder="Latitud: 34,056687222"
              value={latitude}
              onChange={handleLatitudeChange}
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Longitud: -117,195731667"
              value={longitude}
              onChange={handleLongitudeChange}
              style={inputStyle}
            />
  
          </div>
        );
      case 'text':
        return (
          <div>
            <p>Introduce el texto:</p>
            <textarea
              placeholder="Introduce el texto"
              value={inputValue}
              onChange={handleInputChange}
              style={textAreaStyle}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const getQrValue = () => {
    switch (activeTab) {
      case 'url':
        return inputValue;
      case 'geolocation':
        return `geo:${latitude},${longitude}`;
      case 'text':
        return inputValue;
      default:
        return '';
    }
  };

  return (
    <Layout>
      <Header />
      <div style={containerStyle}>
        <div style={titleContainerStyle}>
          <h1>GENERADOR DE QR</h1>
          <FaQuestionCircle style={helpIconStyle} onClick={handleHelpClick} />
        </div>
        <br />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <br />
        {renderInputField()}
        <MyComponent
          onColorChange={handleColorChange}
          onSizeChange={handleSizeChange}
          colorOptions={colorOptions}
        />
        <br />
        <div className="qr-contenido">
          <div ref={qrRef}>
            <QRCode value={getQrValue()} size={qrSize} fgColor={qrColor} />
          </div>
          <br />
          <br />
          <p>Contenido del QR:</p>
          <p>{getQrValue()}</p>
        </div>
        <br />
        <div className="buttondownload-container">
          <button onClick={handleDownload} className="buttondownload">
            PNG
          </button>
          <button onClick={handleDownload2} className="buttondownload">
            JPG
          </button>
          <button onClick={handleDownload3} className="buttondownload">
            SVG
          </button>
        </div>
        <CompaQr></CompaQr>
      </div>

      <VolverBoton />
      <Footer />

      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2>Instrucciones</h2>
        <p>Selecciona la pestaña correspondiente y sigue las instrucciones:</p>
        <ul>
          <li><b>URL:</b> Introduce la URL que deseas convertir en un código QR.</li>
          <li><b>Geolocalización:</b> Introduce las coordenadas de latitud y longitud para generar un QR de ubicación.</li>
          <li><b>Texto:</b> Introduce el texto que deseas convertir en un código QR.</li>
        </ul>
        <p>Luego, selecciona el color y tamaño del QR utilizando las opciones disponibles.</p>
        <p>Haz clic en los botones de descarga para obtener el QR en el formato deseado (PNG, JPG, SVG).</p>
        <p>Para compartir tu QR, utiliza los botones de las redes sociales disponibles en la parte inferior de la página.</p>
      </Modal>

    </Layout>
  );
}

export default Crearqr;
