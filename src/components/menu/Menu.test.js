import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Menu from './Menu';

describe('Menu', () => {
  it('deve construir a pagina corretamente ', () => {
    const menu = shallow(<Menu />);
    const menuJson = toJson(menu);
    expect(menuJson).toMatchSnapshot();
  });
});
