import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';
import { CLASSES_INPUT } from
'../../../components/denuncias/ConstantesCss';

const data = ({ id, label, divClasse, onChange }) => (
    <CampoTexto
        id={id}
        label={label}
        inputClasse={'datepicker'}
        divClasse={divClasse}
        maxLen={0}
        type={'text'}
        onChange={onChange}
    />
);

data.propTypes = {
    id: PropTypes.string,
    divClasse: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string
  };
  
  data.defaultProps = {
    id: '',
    divClasse: '',
    onChange: () => {},
    label: PropTypes.string
  };
  


export default data;