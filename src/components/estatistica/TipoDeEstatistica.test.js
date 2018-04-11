import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TipoDeEstatistica from './TipoDeEstatistica';

describe('TipoDeEstatistica', () => {
  const propsParaTipoDeEstatistica = {
    id: 'vermelho',
    numero: '2345',
    categoria: 'Racismo',
  };

  const wrapper = shallow(<TipoDeEstatistica {...propsParaTipoDeEstatistica} />);

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
