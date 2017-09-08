import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {
  const wrapper = shallow(
    <Footer>
      <div id="footer-content" />
    </Footer>,
  );

  it('tem a classe en-footer', () => {
    expect(wrapper.hasClass('en-footer')).toBeTruthy();
  });

  it('tem um container', () => {
    expect(wrapper.find('.container').exists()).toBeTruthy();
  });

  it('tem o filho #footer-content', () => {
    expect(wrapper.find('#footer-content').exists()).toBeTruthy();
  });
});
