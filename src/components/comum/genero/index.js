import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';

const genero = ({ id, divClasse, state }) => (
  <CampoTexto
    state={state}
    id={id}
    label="Gênero"
    divClasse={divClasse}
    maxLen={40}
    placeholder="Insira seu gênero ou deixe em branco caso prefira não exibi-lo"
    type="text"
  />
);

genero.propTypes = {
  id: PropTypes.string,
  divClasse: PropTypes.string,
  state: PropTypes.string
};

genero.defaultProps = {
  id: '',
  divClasse: '',
  state: ''
};

export default genero;
