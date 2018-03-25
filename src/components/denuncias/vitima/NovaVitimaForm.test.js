import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import NovaVitimaForm from './NovaVitimaForm';

describe('NovaVitimaForm Component', () => {
  it('deve possuir estrutura definida ', () => {
    const detalhamentoDenuncia = shallow(<NovaVitimaForm />);
    const detalhamentoDenunciaJson = toJson(detalhamentoDenuncia);
    expect(detalhamentoDenunciaJson).toMatchSnapshot();
  });
});
