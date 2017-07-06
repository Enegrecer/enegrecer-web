import React from 'react';
import App from './App';
import Login from './login/Login';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
});
