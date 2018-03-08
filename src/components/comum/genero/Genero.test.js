import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Genero from '../Genero';

describe('Genero', () => {
  it('deve possuir estrutura definida ', () => {
    const onChange = jest.fn();
    const genero = mount(<Genero id={'13'} onChange={onChange} divClasses={'estado'} />);
    const generoTextoJson = toJson(genero);
    expect(generoTextoJson).toMatchSnapshot();
  });
});