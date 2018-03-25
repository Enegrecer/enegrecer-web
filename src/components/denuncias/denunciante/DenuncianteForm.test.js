import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Denunciante from './DenuncianteForm';

describe('DenuncianteForm', () => {
  it('deve seguir a estrutura definida ', () => {
    const handleChange = jest.fn();
    const denunciante = shallow(<Denunciante handleChange={handleChange} />);
    const denuncianteJson = toJson(denunciante);
    expect(denuncianteJson).toMatchSnapshot();
  });
});
