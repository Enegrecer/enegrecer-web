import React from 'react';
import { shallow } from 'enzyme';

import Social from './Social';

describe('Social', () => {
  const networks = [
    { icon: 'facebook-square', title: 'Facebook', href: '#' },
    { icon: 'twitter', title: 'Twitter', href: '#' },
  ];
  const wrapper = shallow(
    <Social networks={networks} />,
  );

  it('tem a classe en-social', () => {
    expect(wrapper.hasClass('en-social')).toBeTruthy();
  });

  it('tem link para facebook', () => {
    expect(wrapper.find('a[title="Facebook"][href="#"] .fa-facebook-square').exists()).toBeTruthy();
  });

  it('tem link para o twitter', () => {
    expect(wrapper.find('a[title="Twitter"][href="#"] .fa-twitter').exists()).toBeTruthy();
  });
});
