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
            <td>
              <a href="mailto:palaciorealalmudaina@patrimonionacional.es">971 21 41 34</a>
            </td>
          </tr>
          <tr>
            <td>Delegación de Aranjuez (Madrid)</td>
            <td>
              <a href="mailto:delegacion.aranjuez@patrimonionacional.es">91 891 13 44</a>
            </td>
          </tr>
          <tr>
            <td>Delegación de El Pardo (Madrid)</td>
            <td>
              <a href="mailto:elpardo@patrimonionacional.es">91 376 21 50</a>
            </td>
          </tr>
          <tr>
            <td>Delegación de San Ildefonso (Segovia)</td>
            <td>
              <a href="mailto:delegacion.lagranja@patrimonionacional.es">921 47 00 19</a>
            </td>
          </tr>
          <tr>
            <td>Delegación de San Jerónimo de Yuste (Cáceres)</td>
            <td>
              <a href="mailto:delegacion.yuste@patrimonionacional.es">927 17 28 58</a>
            </td>
          </tr>
          <tr>
            <td>Delegación de San Lorenzo de El Escorial (Madrid)</td>
            <td>
              <a href="mailto:secretaria.escorial@patrimonionacional.es">91 890 59 02 / 91 890 59 03</a>
            </td>
          </tr>
          <tr>
            <td>Delegación para Reales Patronatos</td>
            <td>
              <a href="mailto:delegacion.realespatronatos@patrimonionacional.es">91 108 17 41</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contacto;
