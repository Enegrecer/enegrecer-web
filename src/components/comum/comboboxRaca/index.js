import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';
import { racasVitima } from './racasVitima';
import { racasTestemunha } from './racasTestemunha';

const comboRaca = ({ id, state, classes, somenteRacasVitima = true }) => (
  <Combobox
    state={state}
    id={id}
    itens={(somenteRacasVitima) ? racasVitima : racasTestemunha}
    divClasse={classes}
    label={'Selecione a Raça:'}
    valorPadrao={'Selecione a Raça:'}
  />
);

comboRaca.propTypes = {
  id: PropTypes.string,
  state: PropTypes.string,
  classes: PropTypes.string,
  somenteRacasVitima: PropTypes.bool
};

comboRaca.defaultProps = {
  id: '',
  classes: '',
  state: '',
  somenteRacasVitima: true
};

export default comboRaca;

