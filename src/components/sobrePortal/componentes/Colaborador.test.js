import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Colaborador from './Colaborador';

describe('Colaborador', () => {
  const propsParaColaborador = {
    nome: 'Pessoa Colaboradora',
    papel: 'Trabalhadora',
    foto: 'http://google.com',
  };

  const wrapper = shallow(<Colaborador {...propsParaColaborador} />);

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
