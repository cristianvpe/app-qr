import React from 'react';
import PropTypes from 'prop-types';

const VolverAtras = ({ href }) => {
  return (
    <div className="volverboton">
      <a href={href} role="button" className="button">Volver atrás</a>
    </div>
  );
};


VolverAtras.propTypes = {
  href: PropTypes.string,
};

VolverAtras.defaultProps = {
  href: '/generador-de-qr',
};

export default VolverAtras;
