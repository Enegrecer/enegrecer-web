import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto'
import { CLASSES_INPUT } from 
  '../../../components/denuncias/ConstantesCss';

export default function Genero(props) {
    return (
      <CampoTexto
        id={props.id}
        label={'Gênero (máximo de 15 caracteres)'}
        maxLen={15}
        divClasse={props.divClasse}
        inputClasse={CLASSES_INPUT}
        onChange={props.onChange}
        placeholder={'Ex.: Feminino, Masculino, Não Binário...'}
        type={'text'} />
    );
  }

  Genero.propTypes = {
    id: PropTypes.string,
    divClasse: PropTypes.string,
    onChange: PropTypes.func
  };
  
  Genero.defaultProps = {
    id: '',
    divClasse: '',
    onChange: () => {}
  };
  
  


 