import React from 'react';
import { shallow } from 'enzyme';

import Topbar from './Topbar';

describe('Topbar', () => {
  const wrapper = shallow(
    <Topbar
      leftComponent={<div className="spec-left" />}
      rightComponent={<div className="spec-right" />}
    />,
  );

  it('tem a classe black', () => {
    expect(wrapper.hasClass('black')).toBeTruthy();
  });

});
