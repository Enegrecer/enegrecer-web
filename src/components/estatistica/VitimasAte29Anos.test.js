import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import VitimasAte29Anos from './VitimasAte29Anos';

describe('Vitimas ate 29 Anos', () => {
  it('deve construir a pagina corretamente ', () => {
    const vitimasAte29Anos = shallow(<VitimasAte29Anos />);
    const json = toJson(vitimasAte29Anos);
    expect(json).toMatchSnapshot();
  });
});
