import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from './Home';

describe('Home', () => {
  const historyMock = { push: jest.fn() };
  const wrapper = shallow(<Home history={historyMock} />);

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('tem um menu', () => {
    expect(wrapper.find('Menu').exists()).toBeTruthy();
  });

  it('tem um rodapé', () => {
    expect(wrapper.find('Footer').exists()).toBeTruthy();
  });

  it('tem links sociais', () => {
    const social = wrapper.find('Social');

    expect(social.props().networks[0].title).toEqual('Facebook');
    expect(social.props().networks[1].title).toEqual('Twitter');
    expect(social.props().networks[2].title).toEqual('Instagram');
  });
});
