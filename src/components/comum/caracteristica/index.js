import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';
import { CLASSES_TEXTAREA, CLASSES_DIV_INPUT } from '../../../components/denuncias/ConstantesCss';

const caracteristica = ({ id, label, validacoes, state }) => (<CampoTexto
  id={id}
  label={label}
  maxLen={255}
  type={'text'}
  inputClasse={CLASSES_TEXTAREA}
  divClasse={`${CLASSES_DIV_INPUT} col s12`}
  placeholder={'Ex.: Era uma mulher negra, com aproximadamente 40 anos, magra, alta com cabelo curto...'}
  validacoes={validacoes}
  state={state}
/>);

caracteristica.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
};

caracteristica.defaultProps = {
  id: '',
  label: ''
};

export default caracteristica;

