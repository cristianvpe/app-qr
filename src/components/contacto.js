import React from 'react';
import '../components/layout.css';

const Contacto = () => {
  return (
    <div className="contacto">
      <h1>CONTACTO</h1>
      <h3>GENERAL</h3>
      <table>
        <tbody>
          <tr>
            <td>Información general al público</td>
            <td><a href="mailto:info@patrimonionacional.es">info@patrimonionacional.es</a></td>
          </tr>
          <tr>
            <td>Biblioteca Real</td>
            <td><a href="mailto:real.biblioteca@patrimonionacional.es">real.biblioteca@patrimonionacional.es</a></td>
          </tr>
          <tr>
            <td>Archivo General de Palacio</td>
            <td><a href="mailto:agp@patrimonionacional.es">agp@patrimonionacional.es</a></td>
          </tr>
          <tr>
            <td>Departamento de comunicación</td>
            <td><a href="mailto:comunicacion@patrimonionacional.es">comunicacion@patrimonionacional.es</a></td>
          </tr>
          <tr>
            <td>Departamento de educación</td>
            <td><a href="mailto:educacion@patrimonionacional.es">educacion@patrimonionacional.es</a></td>
          </tr>
        </tbody>
      </table>

      <h3>DELEGACIONES</h3>
      <table>
        <tbody>
          <tr>
            <td>Delegación de La Almudaina (Palma)</td>
            <td>971 21 41 34</td>
            <td><a href="mailto:palaciorealalmudaina@patrimonionacional.es">palaciorealalmudaina@patrimonionacional.es</a></td>
          </tr>
          <tr>
            <td>Delegación de Aranjuez (Madrid)</td>
            <td>91 891 13 44</td>
            <td><a href="mailto:delegacion.aranjuez@patrimonionacional.es">delegacion.aranjuez@patrimonionacional.es</a></td>
          </tr>
          <tr>
            <td>Delegación de El Pardo (Madrid)</td>
            <td>91 376 21 50</td>
            <td><a href="mailto:elpardo@patrimonionacional.es">elpardo@patrimonionacional.es</a></td>
          </tr>
          <tr>
            <td>Delegación de San Ildefonso (Segovia)</td>
            <td>921 47 00 19</td>
            <td><a href="mailto:delegacion.lagranja@patrimonionacional.es">delegacion.lagranja@patrimonionacional.es</a></td>
          </tr>
          <tr>
            <td>Delegación de San Jerónimo de Yuste (Cáceres)</td>
            <td colSpan="2"><a href="mailto:delegacion.yuste@patrimonionacional.es">delegacion.yuste@patrimonionacional.es</a></td>
          </tr>
          <tr>
            <td>Delegación de San Lorenzo de El Escorial (Madrid)</td>
            <td>91 890 59 02 / 91 890 59 03</td>
            <td><a href="mailto:secretaria.escorial@patrimonionacional.es">secretaria.escorial@patrimonionacional.es</a></td>
          </tr>
          <tr>
            <td>Delegación para Reales Patronatos</td>
            <td>91 108 17 41</td>
            <td><a href="mailto:delegacion.realespatronatos@patrimonionacional.es">delegacion.realespatronatos@patrimonionacional.es</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contacto;
