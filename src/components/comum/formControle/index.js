import { reduxForm } from 'redux-form';

export const adicionaFormAoRedux = (formulario, nomeFormulario) => (
  reduxForm({
    form: nomeFormulario,
  })(formulario)
);
