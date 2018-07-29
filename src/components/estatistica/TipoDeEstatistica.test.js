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

  it('possibilita a renderização com a propriedade `numero` como valor numérico', () => {
    const renderWrapper = shallow(<TipoDeEstatistica
      id="render-com-numero"
      numero={12345}
      categoria="Render com número"
    />);

    const renderAsJson = toJson(renderWrapper);

    expect(renderAsJson).toMatchSnapshot();
  });
});
