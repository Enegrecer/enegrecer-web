import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import Logo from './../Logo';
import Nav from './../Nav';

describe('Home', () => {
  const historyMock = { push: jest.fn() };
  const wrapper = shallow(<Home history={historyMock} />);

  it('tem um topbar', () => {
    expect(wrapper.find('Topbar').exists()).toBeTruthy();
  });

  it('tem um topbar com a logo na esquerda', () => {
    expect(wrapper.find('Topbar').props().leftComponent).toEqual(<Logo />);
  });

  it('tem um topbar com uma nav na direita com rota definida', () => {
    expect(wrapper.find('Topbar').props().rightComponent).toEqual(<Nav history={historyMock} />);
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
