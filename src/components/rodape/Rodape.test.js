import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Rodape from './Rodape';

describe('Rodape', () => {
  it('deve construir a pagina corretamente ', () => {
    const rodape = shallow(<Rodape />);
    const rodapeJson = toJson(rodape);
    expect(rodapeJson).toMatchSnapshot();
  });
});
