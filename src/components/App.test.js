import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('tem um BrowserRouter', () => {
    expect(wrapper.find('BrowserRouter').exists()).toBe(true);
  });

  it('tem um componente de Rotas', () => {
    expect(wrapper.find('Rotas').exists()).toBeTruthy();
  });
});
