import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Injuria from './Injuria';

describe('Injuria', () => {
  it('deve construir a pagina corretamente ', () => {
    const injuria = shallow(<Injuria />);
    const json = toJson(injuria);
    expect(json).toMatchSnapshot();
  });
});
