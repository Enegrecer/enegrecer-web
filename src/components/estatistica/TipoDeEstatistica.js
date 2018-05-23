import React from 'react';
import PropTypes from 'prop-types';

const TipoDeEstatistica = props => (
  <div id={props.id}>
    <h3 className="numero">{ props.numero } </h3>
    <h6 className="categoria">{ props.categoria } </h6>
  </div>
);

TipoDeEstatistica.propTypes = {
  id: PropTypes.string.isRequired,
  numero: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  categoria: PropTypes.string.isRequired,
};

export default TipoDeEstatistica;
