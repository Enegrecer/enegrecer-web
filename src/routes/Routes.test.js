import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Routes from './Routes';

describe('Routes', () => {
  it('não deve possuir estrutura definida ', () => {
    const routes = shallow(<Routes />);
    const campoTextoJson = toJson(routes);
    expect(campoTextoJson).toMatchSnapshot();
  });
});
