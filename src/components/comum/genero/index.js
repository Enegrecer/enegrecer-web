import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';
import { CLASSES_INPUT } from '../../../components/denuncias/ConstantesCss';

const genero = ({ id, state, divClasse }) => (
  <CampoTexto
    state={state}
    id={id}
    label={'Gênero (máximo de 15 caracteres)'}
    maxLen={15}
    divClasse={divClasse}
    inputClasse={CLASSES_INPUT}
    placeholder={'Ex.: Feminino, Masculino, Não Binário...'}
    type={'text'}
  />
);

genero.propTypes = {
  id: PropTypes.string,
  divClasse: PropTypes.string,
  state: PropTypes.string,
};

genero.defaultProps = {
  id: '',
  divClasse: '',
  state: '',
};

export default genero;

