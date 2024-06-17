import React, { useState } from 'react';
import "../components/layout.css"
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import VolverBoton from '../components/volverboton';
import Header from '../components/header';
import Footer from '../components/footer';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('http://tu-dominio/endpoints/register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre,
                    email,
                    password
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error registrando usuario', error);
        }
    };

    return (
      <Layout>
        <Header/>
        <div className="login-form-container">
         
          <form className="login-form"> 
        
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        width={60} 
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="Logo PN"
    
      />
      <h1 style={{ textAlign:'center' }}>{}Registro</h1> {}
      
          <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                placeholder="Nombre"
                id="name"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
             <label htmlFor="password">Contraseña:</label>
            <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}  style={{ color: 'white' }}>Registrar</button>
            </form>
        </div>
        <VolverBoton/>
        <Footer/>
        </Layout>
    );
};

export default Register;