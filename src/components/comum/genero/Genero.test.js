import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Genero from '../genero';

describe('Genero', () => {
  it('deve possuir estrutura definida ', () => {
    const genero = shallow(<Genero state="genero" id="13" divClasses="estado" />);
    const generoTextoJson = toJson(genero);
    expect(generoTextoJson).toMatchSnapshot();
  });
});

