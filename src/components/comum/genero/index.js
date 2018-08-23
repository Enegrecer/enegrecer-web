import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';

const genero = ({ id, divClasse, state }) => (
  <Combobox
    state={state}
    id={id}
    label="Gênero"
    divClasse={divClasse}
    itens={['Feminino', 'Masculino']}
    valorPadrao="Selecione"
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
