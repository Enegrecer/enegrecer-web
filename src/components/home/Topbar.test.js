import React from 'react';
import { shallow } from 'enzyme';

import Topbar from './Topbar';

describe('Topbar', () => {
  const wrapper = shallow(<Topbar
    leftComponent={<div className="spec-left" />}
    rightComponent={<div className="spec-right" />}
  />);

  it('tem a classe en-topbar', () => {
    expect(wrapper.hasClass('en-topbar')).toBeTruthy();
  });

  it('tem o elemento .spec-left a esquerda', () => {
    expect(wrapper.find('.en-topbar__left .spec-left').exists()).toBeTruthy();
  });

  it('tem o elemento .spec-right a direita', () => {
    expect(wrapper.find('.en-topbar__right .spec-right').exists()).toBeTruthy();
  });
});
