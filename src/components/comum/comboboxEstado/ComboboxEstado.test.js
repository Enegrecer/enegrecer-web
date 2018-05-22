import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Estado from '../comboboxEstado';

describe('Combo Estado', () => {
  it('deve possuir estrutura definida ', () => {
    const estado = shallow(<Estado id="13" state="estado" lasses="estado" />);
    const estadoTextoJson = toJson(estado);
    expect(estadoTextoJson).toMatchSnapshot();
  });
});

