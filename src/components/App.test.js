import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('tem um componente de Rotas', () => {
    wrapper.setState({ loading: false });
    expect(wrapper.find('Rotas').exists()).toBeTruthy();
  });
});
