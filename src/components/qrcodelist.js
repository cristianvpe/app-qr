import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import Layout from './layout';

const QrCodeList = () => {
  const [qrCodes, setQrCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQrCodes = async () => {
      try {
        const response = await fetch('https://cristian.tandempatrimonionacional.eu/api-qr-tandem/v1/list-qr.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQrCodes(data.qr_codes);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQrCodes();
  }, []);

  const handleDeleteQrCode = async (qrId) => {
    try {
      const response = await fetch(`http://localhost/api-qr-tandem/v1/delete-qr.php?id=${qrId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete QR code');
      }
      // Remove the deleted QR code from the state
      setQrCodes(qrCodes.filter((qrCode) => qrCode.qr_id !== qrId));
    } catch (error) {
      setError(error);
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <Layout>
      <div className="tablaqr">
        <h2>Listado de Códigos QR</h2>
        <table>
          <thead>
            <tr>
              <th>QR</th>
              <th>ID</th>
              <th>Data</th>
              <th>Nombre Referencia</th>
              <th>Descripción</th>
              <th>Fecha Creación</th>
              <th>ID Usuario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {qrCodes.map((qrCode) => (
              <tr key={qrCode.qr_id}>
                <td className="qr-code-cell">
                  <QRCode
                    value={qrCode.qr_data}
                    size={100}
                  />
                </td>
                <td>{qrCode.qr_id}</td>
                <td>{qrCode.qr_data}</td>
                <td>{qrCode.qr_nombre_ref}</td>
                <td>{qrCode.qr_description}</td>
                <td>{qrCode.qr_created_at}</td>
                <td>{qrCode.user_id}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteQrCode(qrCode.qr_id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default QrCodeList;



