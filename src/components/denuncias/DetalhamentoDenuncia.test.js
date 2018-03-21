import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import DetalhamentoDenuncia from './DetalhamentoDenuncia';

describe('DetalhamentoDenuncia Component', () => {
  it('deve possuir estrutura definida ', () => {
    const detalhamentoDenuncia = mount(<DetalhamentoDenuncia />);
    const detalhamentoDenunciaJson = toJson(detalhamentoDenuncia);
    expect(detalhamentoDenunciaJson).toMatchSnapshot();
  });
});

