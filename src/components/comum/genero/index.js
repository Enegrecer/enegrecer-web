import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';

const genero = ({ id, divClasse, state }) => (
  <Combobox
    state={state}
    id={id}
    label="Gênero"
    divClasse={divClasse}
    itens={['Feminino', 'Masculino', 'Agênero', 'Andrógino', 'Bigênero', 'Cisgênero (Homem cisgênero)', 'Cisgênero (Mulher cisgênero)', 'Duplo espírito', 'Genderqueer', 'Gênero em Dúvida', 'Gênero Fluido', 'Gênero Não-conformista', 'Gênero Variante', 'Homem para Mulher (Male to Female – MTF)', 'Intersex', 'Mulher para homem (Female to Male – FTM)', 'Não-binário', 'Nenhum', 'Neutrois', 'Pangênero', 'Transgênero', 'Transexual (Mulher Transexual)', 'Transexual (Homem Transexual)', 'Transmasculino', 'Transfeminino']}
  />
);

genero.propTypes = {
  id: PropTypes.string,
  divClasse: PropTypes.string,
  state: PropTypes.string
};

genero.defaultProps = {
  id: '',
  divClasse: '',
  state: ''
};

export default genero;
