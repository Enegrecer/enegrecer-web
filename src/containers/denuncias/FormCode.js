import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { campoObrigatorio } from './../../components/comum/validacoes';
import CampoTexto from './../../components/comum/campoTexto';
import * as ConstantesCSS from '../../components/denuncias/ConstantesCss';
import { adicionaFormAoRedux } from './../../components/comum/formControle';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const FormCode = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
    <div className="row">
      <CampoTexto
        id={'detalhamento'}
        label={'* Detalhamento'}
        maxLen={255}
        type={'text'}
        inputClasse={ConstantesCSS.CLASSES_TEXTAREA}
        divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
        state={'detalhamento'}
        validacoes={[campoObrigatorio]}
      />
   </div>
    <br/>
    <br/>
    <button type="submit">Submit</button>
    </form>
  )
}


export default adicionaFormAoRedux(
  FormCode, 'contact');
