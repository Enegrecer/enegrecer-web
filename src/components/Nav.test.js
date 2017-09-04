import React from 'react';
import { shallow } from 'enzyme';

import Nav from './Nav';

describe('Nav', () => {
  const wrapper = shallow(<Nav />);

  it('tem a classe en-nav', () => {
    expect(wrapper.hasClass('en-nav')).toBeTruthy();
  });

  it('tem o link de sobre', () => {
    expect(wrapper.find('[href="/sobre"]').exists()).toBeTruthy();
  });

  it('tem o link de registrar/entrar', () => {
    expect(wrapper.find('[href="/entrar"]').exists()).toBeTruthy();
  });
});
