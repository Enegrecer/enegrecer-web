import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ColetivoEnegrecer from './ColetivoEnegrecer';

describe('ColetivoEnegrecer', () => {
  it('deve construir a pagina corretamente', () => {
    const coletimoEnegrecer = shallow(<ColetivoEnegrecer />);
    const coletimoEnegrecerJson = toJson(coletimoEnegrecer);
    expect(coletimoEnegrecerJson).toMatchSnapshot();
  });
});
