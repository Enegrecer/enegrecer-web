
import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const adicionaFormAoRedux = (formulario, nomeFormulario) => (
  reduxForm({
    form: nomeFormulario,
  })(formulario)
);

export const validaCampo = (campoTexto) => {
  const { type, label, validacoes } = campoTexto;
  return (<Field
    name={'Teste'}
    type={type}
    component={campoTexto}
    label={label}
    validate={validacoes}
  />)
}


/*
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'Required';

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
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required]}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'contact',
})(FormCode);

*/
