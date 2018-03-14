import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Caracteristica from '../caracteristica';

describe('Caracteristica', () => {
  it('deve possuir estrutura definida ', () => {
    const onChange = jest.fn();
    const caracteristica = mount(<Caracteristica id={'1'} onChange={onChange} label="Característica da Vítima" />);
    const caracteristicaTextoJson = toJson(caracteristica);
    expect(caracteristicaTextoJson).toMatchSnapshot();
  });
});

