import { reduxForm } from 'redux-form';

export const adicionaFormAoRedux = (formulario, nomeFormulario, initialValues) => (
  reduxForm({
    form: nomeFormulario,
    initialValues
  })(formulario)
);
