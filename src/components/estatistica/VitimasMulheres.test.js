import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import VitimasMulheres from './VitimasMulheres';

describe('Vitimas Mulheres', () => {
  it('deve construir a pagina corretamente ', () => {
    const vitimasMulheres = shallow(<VitimasMulheres />);
    const json = toJson(vitimasMulheres);
    expect(json).toMatchSnapshot();
  });
});
