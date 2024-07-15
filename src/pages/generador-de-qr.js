import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/layout";
import "../components/layout.css";
import MyComponent from "../components/select";
import QRCode from "qrcode.react";
import { toPng, toJpeg, toSvg } from "html-to-image";
import download from "downloadjs";
import CompaQr from "../components/share";
import { FaQuestionCircle } from "react-icons/fa";
import Modal from "../components/modal";
import Tabs from "../components/tabs";
import MapaConMarcador from "../components/mapa";
import Footer from "../components/footer";
import Header from "../components/header";
import VolverBoton from "../components/volverboton";
import QrDisplay from "../components/qrdisplay.js";
import ScrollToTopButton from '../components/scroll';
import CerrarSesion from "../components/cerrarsesion.js";
import AlertModal from "../components/alertmodal.js";
import SaveDb from "../components/saveqr.js";
import { Link } from "gatsby";
import Button from '@mui/material/Button';

function Crearqr() {
  const [latLng, setLatLng] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [qrColor, setQrColor] = useState("black");
  const [qrSize, setQrSize] = useState(100);
  const [activeTab, setActiveTab] = useState('url');
  const [showModal, setShowModal] = useState(false);
  const qrRef = useRef(null);
  const [descargado, setDescargado] = useState(false);
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [qrName, setQrName] = useState("");
  const [qrDescription, setQrDescription] = useState("");
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (latLng) {
      setLatitude(latLng.lat.toFixed(6));
      setLongitude(latLng.lng.toFixed(6));
    }
  }, [latLng]);

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
      setDescargado(true);
    }
  };

  const handleDownload2 = async () => {
    if (qrRef.current) {
      const dataUrl = await toJpeg(qrRef.current);
      download(dataUrl, "qr-code.jpeg");
      setDescargado(true);
    }
  };

  const handleDownload3 = async () => {
    if (qrRef.current) {
      const dataUrl = await toSvg(qrRef.current);
      download(dataUrl, "qr-code.svg");
      setDescargado(true);
    }
  };

  const handleHelpClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseAlertModal = () => {
    setShowAlertModal(false);
  };

  const handleSaveQr = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://localhost/api-qr-tandem/v1/create-qr.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: getQrValue(),
            nombre_ref: qrName,
            description: qrDescription,
            created_by: 1,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error al guardar el código QR");
      }
      const data = await response.json();
      console.log("Response data:", data);
      setQrCode(data.qrCodeUrl);
      setAlertMessage("¡TU QR SE HA GUARDADO EN LA BASE DE DATOS CORRECTAMENTE!");
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setAlertMessage("Error al guardar el código QR");
    } finally {
      setLoading(false);
      setShowAlertModal(true);
    }
  };

  const containerStyle = {
    padding: "5px",
    textAlign: "center",
    width: "80%",
    height: "80%",
    margin: "auto",
    marginTop: ".5em",
    justifyContent: "center",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "7px",
    border: "2px solid #ccc",
    fontSize: "16px",
    width: "50%",
    marginBottom: "5px",
  };

  const textAreaStyle = {
    ...inputStyle,
    resize: "none",
    marginBottom: "5px",
  };

  const helpIconStyle = {
    marginLeft: "20px",
    cursor: "pointer",
  };

  const titleContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const colorOptions = [
    "black", "blue", "red", "green", "yellow", "purple", "orange", "pink", "magenta"
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
            <p>Coloca la manita en la ubicación deseada</p>
            <p>{getQrValue()}</p>
            <MapaConMarcador setLatLng={setLatLng} />
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
      <Button
      component={Link}
      to='/admin-usuarios'
      variant='contained'
      style={{ margin: '0 1rem', marginTop:'2em', background: '#AC8859', }}
    >
      Listado usuarios
    </Button>
    <Button
      component={Link}
      to='/admin-qr'
      variant='contained'
      style={{ margin: '0 1rem', marginTop:'2em', background: '#AC8859', }}
    >
      Listado de QR
    </Button>
      <CerrarSesion />
      <div className="infoinst">
        <p>¡Bienvenido {localStorage.getItem('tandem_nombre')}!</p>
        <div style={containerStyle}>
          <div style={titleContainerStyle}>
            <h1 className="tituloqr">GENERADOR DE QR</h1>
            <FaQuestionCircle style={helpIconStyle} onClick={handleHelpClick} />
          </div>
          <br />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <br />
          {renderInputField()}
          <br />
          <p>Nombre</p>
          <input
            type="text"
            placeholder="Nombre del QR"
            value={qrName}
            onChange={(e) => setQrName(e.target.value)}
            style={inputStyle}
          />
          <br />
          <p>Descripción</p>
          <textarea
            placeholder="Descripción del QR"
            value={qrDescription}
            onChange={(e) => setQrDescription(e.target.value)}
            style={textAreaStyle}
          />
          <br />
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
            <p className="tituloqr">Contenido del QR:</p>
            <p>{getQrValue()}</p>
          </div>
          <br />
          <div>
            <h3>DESCARGAR</h3>
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
          </div>
          <h3>GUARDAR</h3>
          <button onClick={handleSaveQr} className="buttondownloaddb">Guardar QR</button>
          <Modal show={showModal} handleClose={handleCloseModal} />
          <AlertModal show={showAlertModal} message={alertMessage} onClose={handleCloseAlertModal} />
          <CompaQr />
        </div>
      </div>
      <VolverBoton />
      <ScrollToTopButton />
      <Footer />
    </Layout>
  );
}

export default Crearqr;
