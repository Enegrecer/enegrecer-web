import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';
import { racasVitima } from './racasVitima';
import { racasTestemunha } from './racasTestemunha';
import TIPO from './tipos'; 


const comboRaca = ({ id, onChange, classes, tipo = TIPO.VITIMA  }) => (
  
  <Combobox
    id={id}
    itens={(tipo === TIPO.VITIMA) ? racasVitima : racasTestemunha }
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
  tipo: PropTypes.string
};

comboRaca.defaultProps = {
  id: '',
  onChange: () => {},
  classes: '',
  tipo: TIPO.VITIMA
};

export default comboRaca;

