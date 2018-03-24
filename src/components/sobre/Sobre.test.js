import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Sobre from './Sobre';

describe('Sobre', () => {
  const colaboradoresStub = {
    colaborador: {
      nome: 'Will Smith',
      papel: 'Desenvolvedor',
      foto: 'http://google.com',
    },
  };

  const wrapper = shallow(<Sobre colaboradores={colaboradoresStub} />);

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
