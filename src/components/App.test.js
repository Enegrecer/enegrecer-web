import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login/Login';
import { shallow, mount } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
});
