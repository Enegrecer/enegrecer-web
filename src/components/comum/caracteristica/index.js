import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';
import { CLASSES_TEXTAREA, CLASSES_DIV_INPUT } from '../../../components/denuncias/ConstantesCss';

const caracteristica = ({ id, onChange, label, validacoes, state }) => (<CampoTexto
  id={id}
  label={label}
  maxLen={255}
  type={'text'}
  inputClasse={CLASSES_TEXTAREA}
  divClasse={`${CLASSES_DIV_INPUT} col s12`}
  placeholder={'Ex.: Era uma mulher negra, com aproximadamente 40 anos, magra, alta com cabelo curto...'}
  onChange={onChange}
  validacoes={validacoes}
  state={state}
/>);

caracteristica.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string
};

caracteristica.defaultProps = {
  id: '',
  onChange: () => {},
  label: ''
};

export default caracteristica;

