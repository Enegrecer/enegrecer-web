import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('tem um componente de Rotas', () => {
    wrapper.setState({ loading: false });
    expect(wrapper.find('Rotas').exists()).toBeTruthy();
  });
  it('nao atualiza o status de authed', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().state.authed).toBe(false);
  });
  it('nao atualiza o status de currentUserUID', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().state.currentUserUID).toBe('');
  });
});
