import React from 'react';
import PropTypes from 'prop-types';

const VolverBoton = ({ href }) => {
  return (
    <div className="volverboton">
      <a href={href} role="button" className="button">Volver a inicio</a>
    </div>
  );
};

VolverBoton.propTypes = {
  href: PropTypes.string,
};

VolverBoton.defaultProps = {
  href: '/',
};

export default VolverBoton;
