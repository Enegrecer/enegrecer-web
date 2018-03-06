import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Estado from '../comboEstado'
import estados from './estados'

describe('Combo Estado', () => {
    it('não deve possuir estrutura definida ', () => {
      const onChange = jest.fn();
      const estado = mount(<Estado id={'13'} onChange={onChange} />);
      const estadoTextoJson = toJson(estado);
      expect(estadoTextoJson).toMatchSnapshot();
    });
});