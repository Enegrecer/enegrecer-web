import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const renderizaInputComum = ({ classes, id, valor }) => (
  <div className={classes}>
    <p key={id}>
      <input name={id} type="radio" id={id} />
      <label htmlFor={id}>{valor}</label>
    </p>
  </div>
);

const botoesRadio = ({ classes, botoes, state }) => {
  if (state) {
    return (
      <div className={classes}>
        {botoes.map(botaoRadio => (
          <p key={botaoRadio.valor}>
            <Field
              id={botaoRadio.valor}
              name={state}
              component="input"
              type="radio"
              value={botaoRadio.valor}
            />
            <label htmlFor={botaoRadio.valor}>{botaoRadio.label}</label>
          </p>
        ))}
      </div>
    );
  }
  return (
    <div className={classes}>
      {botoes.map(botaoRadio => (renderizaInputComum(classes, botaoRadio.id, botaoRadio.valor)))}
    </div>
  );
};

botoesRadio.propTypes = {
  classes: PropTypes.string,
  botoes: PropTypes.arrayOf(PropTypes.object),
  state: PropTypes.string
};

botoesRadio.defaultProps = {
  classes: '',
  botoes: [],
  state: undefined
};

renderizaInputComum.propTypes = {
  classes: PropTypes.string,
  valor: PropTypes.string,
  id: PropTypes.string
};

renderizaInputComum.defaultProps = {
  classes: '',
  id: '',
  valor: ''
};

export default botoesRadio;
