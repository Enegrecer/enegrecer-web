import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from './Footer';

describe('Footer', () => {
  const wrapper = shallow(
    <Footer>
      <div id="footer-content" />
    </Footer>,
  );

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

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
