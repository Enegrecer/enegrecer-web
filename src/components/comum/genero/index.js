import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';
import { CLASSES_INPUT } from '../../../components/denuncias/ConstantesCss';

const genero = ({ id, divClasse, onChange }) => (
  <CampoTexto
    id={id}
    label={'Gênero (máximo de 15 caracteres)'}
    maxLen={15}
    divClasse={divClasse}
    inputClasse={CLASSES_INPUT}
    onChange={onChange}
    placeholder={'Ex.: Feminino, Masculino, Não Binário...'}
    type={'text'}
  />
);

genero.propTypes = {
  id: PropTypes.string,
  divClasse: PropTypes.string,
  onChange: PropTypes.func
};

genero.defaultProps = {
  id: '',
  divClasse: '',
  onChange: () => { }
};

export default genero;

