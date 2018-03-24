import React from 'react';
import PropTypes from 'prop-types';

const Colaborador = props => (
  <div className="colaborador">
    <span>{ props.foto }</span>
    <span>{ props.nome }</span>
    <span>{ props.papel }</span>
  </div>
);

Colaborador.propTypes = {
  nome: PropTypes.string.isRequired,
  papel: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
};

export default Colaborador;
