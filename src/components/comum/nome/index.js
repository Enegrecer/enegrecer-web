import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';
import { temNumeroNoNome, nomeMaiorQue40Caracteres, nomeNaoPodeTerCaracterEspecial } from './validacoes';

const nome = ({ id, state, onChange }) => (<CampoTexto
  id={id}
  label={'Nome (máximo de 40 caracteres)'}
  maxLen={40}
  placeholder={'Nome (máximo de 40 caracteres)'}
  type={'text'}
  divClasse={'input-field col s6'}
  onChange={onChange}
  state={state}
  validacoes={[temNumeroNoNome, nomeMaiorQue40Caracteres, nomeNaoPodeTerCaracterEspecial]}
/>)

nome.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  state: PropTypes.string
};

nome.defaultProps = {
  id: '',
  onChange: () => {},
  state: ''
};

export default nome;

