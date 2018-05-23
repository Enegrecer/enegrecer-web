import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Telefone from './../telefone';

describe('Telefone', () => {
  it('deve seguir a estrutura definida ', () => {
    const handleChange = jest.fn();
    const telefone = shallow(<Telefone
      id="telefone"
      handleChange={handleChange}
      label="Telefone"
      value=""
    />);
    const telefoneJson = toJson(telefone);
    expect(telefoneJson).toMatchSnapshot();
  });
});

