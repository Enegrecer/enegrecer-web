import React from 'react';
import { shallow } from 'enzyme';

import Logo from './Logo';

describe('Logo', () => {
  const wrapper = shallow(<Logo />);

  it('tem a classe en-logo', () => {
    expect(wrapper.hasClass('en-logo')).toBeTruthy();
  });
});
