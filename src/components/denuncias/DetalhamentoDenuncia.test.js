import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DetalhamentoDenuncia from './DetalhamentoDenuncia';

describe('DetalhamentoDenuncia Component', () => {
  it('deve possuir estrutura definida ', () => {
    const detalhamentoDenuncia = shallow(<DetalhamentoDenuncia />);
    const detalhamentoDenunciaJson = toJson(detalhamentoDenuncia);
    expect(detalhamentoDenunciaJson).toMatchSnapshot();
  });
});

