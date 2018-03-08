import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto'
import { CLASSES_DIV_INPUT, CLASSES_INPUT } from 
  '../../../components/denuncias/ConstantesCss';
import cortarPalavra from '../../../utils/helpers'  

export default function Genero(props) {
    return (
      <div className={props.divClasse}>
      <CampoTexto
        id={props.id}
        label={'Gênero (máximo de 15 caracteres)'}
        maxLen={15}
        divClasse={`${CLASSES_DIV_INPUT} col s6`}
        inputClasse={CLASSES_INPUT}
        onChange={(e) => { this.handleChange(cortarPalavra(e.target.value, 15), 'genero') }}
        placeholder={'Ex.: Feminino, Masculino, Não Binário...'}
        type={'text'} />
      </div>
    );
  }
  
  Genero.propTypes = {
    id: PropTypes.string,
    divClasse: PropTypes.string,
  };
  
  Genero.defaultProps = {
    id: '',
    divClasse: ''
  };
  
  


 