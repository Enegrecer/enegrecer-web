import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav from './Nav';

describe('Nav', () => {
  const historyMock = { push: jest.fn() };
  const wrapper = shallow(
    <Nav history={historyMock} />,
  );

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('tem a classe right hide-on-med-and-down', () => {
    expect(wrapper.hasClass('right hide-on-med-and-down')).toBeTruthy();
  });

  it('tem o link de sobre', () => {
    expect(wrapper.find('[href="/sobre"]').exists()).toBeTruthy();
  });
});
