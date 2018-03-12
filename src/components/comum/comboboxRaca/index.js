import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';
import { racasVitima } from './racasVitima';
import { racasTestemunha } from './racasTestemunha';

const comboRaca = ({ id, onChange, classes, somenteRacasVitima = true }) => (
  <Combobox
    id={id}
    itens={(somenteRacasVitima) ? racasVitima : racasTestemunha}
    divClasse={classes}
    onChange={onChange}
    label={'Selecione a Raça:'}
    valorPadrao={'Selecione a Raça:'}
  />
);

comboRaca.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  classes: PropTypes.string,
  somenteRacasVitima: PropTypes.bool
};

comboRaca.defaultProps = {
  id: '',
  onChange: () => {},
  classes: '',
  somenteRacasVitima: true
};

export default comboRaca;
