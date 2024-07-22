import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import DeleteUserButton from "./deleteboton";
import ModalTandem from "./tandemmodal";
import ModificarUsuario from "./modificarusuarios";

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
    justifyContent: 'center',
  },
  userCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#FAEBD7',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: 'calc(25% - 40px)',
    boxSizing: 'border-box',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '16px',
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
    userCard: {
      width: 'calc(33.33% - 40px)',
    }
  },
  '@media (max-width: 768px)': {
    userCard: {
      width: 'calc(50% - 40px)',
    }
  },
  '@media (max-width: 480px)': {
    userCard: {
      width: 'calc(100% - 40px)',
    }
  }
};

function TablaUsuarios({ url, onUserEdit }) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({});

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

  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditUserData(user);
    onUserEdit(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUserData({ ...editUserData, [name]: value });
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`${url}/${editUserId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editUserData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedUser = await response.json();
      setUsers(users.map(user => user.id === editUserId ? updatedUser : user));
      setEditUserId(null);
      setEditUserData({});
    } catch (error) {
      console.log("Error al actualizar los datos del usuario", error);
      console.error("Stack trace:", error.stack);
    }
  };

  const handleDeleteClick = async (userId) => {
    try {
      const response = await fetch(`${url}/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setUsers(users.filter(user => user.id !== userId));
      console.log(`Usuario con ID ${userId} eliminado correctamente.`);
    } catch (error) {
      console.log("Error al eliminar usuario", error);
      console.error("Stack trace:", error.stack);
    }
  };

  return (
    <>
      <h2 style={styles.heading}>Listado de usuarios</h2>
      <div style={styles.container}>
        {users.map((user) => (
          <div key={user.id} style={styles.userCard}>
            <StaticImage
              src="../images/avatar.png"
              alt="avatar"
              className="avatar"
              style={{ width: '50px', height: '50px', a: 'center' }}
            />
            {editUserId === user.id ? (
              <>
                <div style={styles.userDetail}><strong>ID:</strong> {user.id}</div>
                <div style={styles.userDetail}><strong>Nombre:</strong> {user.nombre}</div>
                <div style={styles.userDetail}><strong>Email:</strong> {user.email}</div>
                <div style={styles.userDetail}><strong>Delegación:</strong> {user.delegacion}</div>
                <div style={styles.userDetail}><strong>Rol:</strong> {user.role}</div>
                <div style={styles.userDetail}>

                </div>
              </>
            ) : (
              <>
                <div style={styles.userDetail}><strong>ID:</strong> {user.id}</div>
                <div style={styles.userDetail}><strong>Nombre:</strong> {user.nombre}</div>
                <div style={styles.userDetail}><strong>Email:</strong> {user.email}</div>
                <div style={styles.userDetail}><strong>Delegación:</strong> {user.delegacion}</div>
                <div style={styles.userDetail}><strong>Rol:</strong> {user.role}</div>
                <div style={styles.userDetail}>
                  <button style={styles.button} onClick={() => handleEditClick(user)}>Modificar datos</button>
                  <button style={styles.deleteButton} onClick={() => handleDeleteClick(user.id)}>Eliminar</button>
                </div>
                <div>
                  <ModalTandem
                    boton="Borrar"
                    text={<DeleteUserButton email={user.email} />}

                  />
                  <ModalTandem 
                  
                    boton="Modificar"
                    text={<ModificarUsuario/>}
                  />
                </div>
              </>
            )}
          </div>
        ))}

      </div>
    </>
  );
}

export default TablaUsuarios;
