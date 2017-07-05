import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.containsMatchingElement(<RaisedButton label="Default" />)).toBe(true);
});
