import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TotalDeDenuncia from './TotalDeDenuncia';

describe('Total De Denuncia', () => {
  it('deve construir a pagina corretamente ', () => {
    const totalDeDenuncia = shallow(<TotalDeDenuncia />);
    const totalDeDenunciaJson = toJson(totalDeDenuncia);
    expect(totalDeDenunciaJson).toMatchSnapshot();
  });
});
