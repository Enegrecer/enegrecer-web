import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Routes from './Routes';

describe('Routes', () => {
  it('deve construir a pagina corretamente ', () => {
    const routes = shallow(<Routes />);
    const routesJson = toJson(routes);
    expect(routesJson).toMatchSnapshot();
  });
});
