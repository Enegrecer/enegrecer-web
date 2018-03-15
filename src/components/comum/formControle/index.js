
import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const adicionaFormAoRedux = (formulario, nomeFormulario) => (
  reduxForm({
    form: nomeFormulario,
  })(formulario)
);
