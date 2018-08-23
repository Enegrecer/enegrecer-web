import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';
import { racasVitima } from './racasVitima';
import { racasTestemunha } from './racasTestemunha';

const comboRaca = ({
  id, state, divClasse, somenteRacasVitima = true
}) => (
  <Combobox
    state={state}
    id={id}
    itens={(somenteRacasVitima) ? racasVitima : racasTestemunha}
    divClasse={divClasse}
    label="Raça"
    valorPadrao="Selecione"
  />
);

comboRaca.propTypes = {
  id: PropTypes.string,
  state: PropTypes.string,
  divClasse: PropTypes.string,
  somenteRacasVitima: PropTypes.bool
};

comboRaca.defaultProps = {
  id: '',
  divClasse: '',
  state: '',
  somenteRacasVitima: true
};

export default comboRaca;

