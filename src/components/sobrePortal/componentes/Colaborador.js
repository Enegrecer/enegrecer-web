import React from 'react';
import PropTypes from 'prop-types';

const Colaborador = props => (
  <div className="col s12 m4 person">
    <div className="conteudo">
      <img alt={`Foto de ${props.nome}`} src={props.foto} />
      <div>
        <h5>{ props.nome }</h5>
        <p>{ props.papel }</p>
      </div>
    </div>
  </div>
);

Colaborador.propTypes = {
  nome: PropTypes.string.isRequired,
  papel: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
};

export default Colaborador;
