import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { BsAlignCenter } from "react-icons/bs";

// Estilos CSS
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
    justifyContent: 'center', // Center the cards horizontally
  },
  userCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#FAEBD7',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: 'calc(25% - 40px)', // Four cards per row with gaps
    boxSizing: 'border-box', // Include padding and border in the element's total width and height
  },
  userDetail: {
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
    userCard: {
      width: 'calc(33.33% - 40px)', 
    }
  },
  '@media (max-width: 768px)': {
    userCard: {
      width: 'calc(50% - 40px)', // Two cards per row
    }
  },
  '@media (max-width: 480px)': {
    userCard: {
      width: 'calc(100% - 40px)', // One card per row
    }
  }
};

function TablaUsuarios({ url }) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
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
        setUsers(data.users);
        setMessage("Esta es la lista de usuarios");
      } catch (error) {
        console.log("Error al buscar la lista de usuarios", error);
        console.error("Stack trace:", error.stack);
        setMessage("Error al buscar la lista de usuarios");
      }
    };
    fetchUsers();
  }, [url]);

  return (
    <>
      <h2 style={styles.container}>Listado de usuarios</h2>
      <div style={styles.container}>
        {users.map((user) => (
          <div key={user.id} style={styles.userCard}>
            <div style={styles.userDetail}><strong>ID:</strong> {user.id}</div>
            <div style={styles.userDetail}><strong>Nombre:</strong> {user.nombre}</div>
            <div style={styles.userDetail}><strong>Email:</strong> {user.email}</div>
            <div style={styles.userDetail}><strong>Delegación:</strong> {user.delegacion}</div>
            <div style={styles.userDetail}><strong>Rol:</strong> {user.role}</div>
            <div style={styles.userDetail}>
              <button style={styles.button}>Modificar datos</button>
              <button style={styles.button}>Cambiar rol</button>
              <button style={styles.deleteButton}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AdminUsuarios() {
  return (
    <Layout>
      <TablaUsuarios url="http://localhost/api-qr-tandem/v1/list-users.php" />
    </Layout>
  );
}

export default AdminUsuarios;
