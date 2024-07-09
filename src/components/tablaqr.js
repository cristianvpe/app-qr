import React, { useEffect, useState } from "react";
import Layout from "./layout";
import { StaticImage } from "gatsby-plugin-image";

// Estilos CSS
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
    justifyContent: 'center', // Centrar las tarjetas horizontalmente
  },
  qrCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#FAEBD7',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: 'calc(25% - 40px)', // Cuatro tarjetas por fila con espacio
    boxSizing: 'border-box', // Incluir padding y border en el ancho y alto total del elemento
  },
  qrImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '16px',
  },
  qrDetail: {
    margin: '4px 0',
  },
  button: {
    marginRight: '8px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#A59A80',
    color: 'white',
  },
  saveButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#28a745',
    color: 'white',
  },
  deleteButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#dc3545',
    color: 'white',
  },
  heading: {
    textAlign: 'center',
  },
  '@media (max-width: 1200px)': {
    qrCard: {
      width: 'calc(33.33% - 40px)', 
    }
  },
  '@media (max-width: 768px)': {
    qrCard: {
      width: 'calc(50% - 40px)', // Dos tarjetas por fila
    }
  },
  '@media (max-width: 480px)': {
    qrCard: {
      width: 'calc(100% - 40px)', // Una tarjeta por fila
    }
  }
};

const AdminQR = ({ url }) => {
  const [qrs, setQrs] = useState([]);

  useEffect(() => {
    const fetchQrs = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQrs(data.qrs || []); // Verificar si 'data.qrs' existe y es un array
      } catch (error) {
        console.error("Error al buscar la lista de códigos QR", error);
      }
    };
    fetchQrs();
  }, [url]);

  const handleEditClick = (qr) => {
    // Implementa la lógica para editar un código QR
  };

  const handleInputChange = (e) => {
    // Implementa la lógica para manejar cambios en los inputs de edición
  };

  const handleSaveClick = async () => {
    // Implementa la lógica para guardar cambios en un código QR
  };

  const handleDeleteClick = async (qrId) => {
    // Implementa la lógica para eliminar un código QR
  };

  return (
    <>
      <h2 style={styles.heading}>Listado de códigos QR</h2>
      <div style={styles.container}>
        {qrs.length === 0 ? (
          <p>No hay códigos QR disponibles.</p>
        ) : (
          qrs.map((qr) => (
            <div key={qr.id} style={styles.qrCard}>
              <StaticImage
                src="../images/qr-placeholder.png"
                alt="QR"
                className="qrImage"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              {/* Implementa la lógica para mostrar la información del código QR */}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AdminQR;
