import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './SignIn';
import { setProperty } from '../../modules/auth';

describe('SignIn Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.exists()).toBe(true);
  });

  it('initialize the state object properly', () => {
    const wrapper = shallow(<SignIn />);
    const expetctedState = {
      login: '',
      password: '',
      loginMessage: null,
    };
    expect(wrapper.state()).toEqual(expetctedState);
  });

  describe('setProperty method', () => {
    it('set a property in the state', () => {
      const wrapper = shallow(<SignIn />);
      const simulatedEvent = {
        target: {
          value: true,
        },
      };
      const propertyToSet = 'logged';
      setProperty(simulatedEvent, propertyToSet, wrapper.instance());
      expect(wrapper.state(propertyToSet)).toBe(simulatedEvent.target.value);
    });

    it('does not override other properties of the state', () => {
      const wrapper = shallow(<SignIn />);
      const propertyToSet = 'logged';
      const simulatedEvent = {
        target: {
          value: true,
        },
      };

      const expetctedState = wrapper.state();
      expetctedState[propertyToSet] = simulatedEvent.target.value;

      setProperty(simulatedEvent, propertyToSet, wrapper.instance());
      expect(wrapper.state()).toEqual(expetctedState);
    });
  });

  describe('onPressLoginButton method', () => {
    it('calls the onPressLoginButton function passed as props with email and password', () => {
      const mockLoginPress = jest.fn();
      const wrapper = shallow(<SignIn onPressLoginButton={mockLoginPress} />);
      const mockLoginAndPassword = {
        login: 'any',
        password: 'any',
      };

      wrapper.setState(mockLoginAndPassword);
      wrapper
        .instance()
        .props
        .onPressLoginButton(mockLoginAndPassword.login, mockLoginAndPassword.password);

      expect(mockLoginPress.mock.calls.length)
        .toBe(1);
      expect(mockLoginPress.mock.calls[0])
        .toEqual([mockLoginAndPassword.login, mockLoginAndPassword.password]);
    });
  });
});
