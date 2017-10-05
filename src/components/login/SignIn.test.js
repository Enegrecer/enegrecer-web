import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from './SignIn';

describe('SignIn Component', () => {
  const auth = { loginError: false, loginErrorMessage: '' };

  it('renders without crashing', () => {
    const wrapper = shallow(<SignIn onLoginPress={() => {}} auth={auth} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('initialize the state object properly', () => {
    const wrapper = shallow(<SignIn onLoginPress={() => {}} auth={auth} />);
    const expetctedState = {
      login: '',
      password: '',
    };
    expect(wrapper.state()).toEqual(expetctedState);
  });

  describe('setProperty method', () => {
    it('set a property in the state', () => {
      const wrapper = shallow(<SignIn onLoginPress={() => {}} auth={auth} />);
      const simulatedEvent = {
        target: {
          value: true,
        },
      };
      const propertyToSet = 'logged';
      wrapper.instance().setProperty(simulatedEvent, propertyToSet);
      expect(wrapper.state(propertyToSet)).toBe(simulatedEvent.target.value);
    });

    it('does not override other properties of the state', () => {
      const wrapper = shallow(<SignIn onLoginPress={() => {}} auth={auth} />);
      const propertyToSet = 'logged';
      const simulatedEvent = {
        target: {
          value: true,
        },
      };

      const expetctedState = wrapper.state();
      expetctedState[propertyToSet] = simulatedEvent.target.value;

      wrapper.instance().setProperty(simulatedEvent, propertyToSet);
      expect(wrapper.state()).toEqual(expetctedState);
    });
  });

  describe('onPressLoginButton method', () => {
    it('calls the onPressLoginButton function passed as props with email and password', () => {
      const mockLoginPress = jest.fn();
      const wrapper = shallow(<SignIn onLoginPress={mockLoginPress} auth={auth} />);
      const mockLoginAndPassword = {
        login: 'any',
        password: 'any',
      };

      wrapper.setState(mockLoginAndPassword);
      wrapper.instance().onPressLoginButton();
      expect(mockLoginPress.mock.calls.length)
        .toBe(1);
      expect(mockLoginPress.mock.calls[0])
        .toEqual([mockLoginAndPassword.login, mockLoginAndPassword.password]);
    });
  });
});
