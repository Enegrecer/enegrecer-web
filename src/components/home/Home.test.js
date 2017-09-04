import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import Logo from './../Logo';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  it('tem um topbar', () => {
    expect(wrapper.find('Topbar').exists()).toBeTruthy();
  });

  it('tem um topbar com a logo na esquerda', () => {
    expect(wrapper.find('Topbar').props().leftComponent).toEqual(<Logo />);
  });
});
