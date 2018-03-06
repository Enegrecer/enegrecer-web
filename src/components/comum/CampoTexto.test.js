import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import CampoTexto from './CampoTexto'

describe('CampoTexto', () => {
  it('não deve possuir estrutura definida ', () => {
    const onChange = jest.fn();
    const campoTexto = mount(<CampoTexto maxLen={3} onChange={onChange} />);
    const campoTextoJson = toJson(campoTexto);
    expect(campoTextoJson).toMatchSnapshot();
  });
});
