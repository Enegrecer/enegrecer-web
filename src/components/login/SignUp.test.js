import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';
import * as firebase from '../../utils/firebaseUtils';
import { setProperty } from '../../modules/auth';

jest.mock('../../utils/firebaseUtils');

describe('SignUp component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.exists()).toBe(true);
  });

  it('initializes the state properly', () => {
    const wrapper = shallow(<SignUp />);
    const expectedState = {
      logged: false,
      login: '',
      password: '',
      firstName: '',
      lastName: '',
    };
    expect(wrapper.state()).toEqual(expectedState);
  });

  describe('setProperty method', () => {
    it('set a property in the state', () => {
      const wrapper = shallow(<SignUp />);
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
      const wrapper = shallow(<SignUp />);
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

  describe('onPressRegisterButton method', () => {
    beforeEach(() => {
      firebase.userObj.sendEmailVerification.mockClear();
    });

    it('sets the state with "logged" to true when registration is sucessfull', async () => {
      const wrapper = shallow(<SignUp />);
      wrapper.setState({
        login: 'pass',
        password: 'any',
      });
      await wrapper.instance().onPressRegisterButton();
      expect(wrapper.state('logged')).toBe(true);
    });

    it('sets the state with the error variables when the login fails', async () => {
      const wrapper = shallow(<SignUp />);
      wrapper.setState({
        login: 'error',
        password: 'weak',
      });
      await wrapper.instance().onPressRegisterButton();
      expect(wrapper.state('loginErrorMessage')).toEqual('Senha deve ter no mínimo 6 caracteres');
      expect(wrapper.state('loginError')).toEqual('auth/weak-password');
      expect(wrapper.state('logged')).toBe(false);
      expect(wrapper.state('password')).toEqual('');
    });

    it('should call the "sendEmailVerification" method when creating a user', async () => {
      const wrapper = shallow(<SignUp />);
      wrapper.setState({
        login: 'pass',
        password: 'any',
      });
      await wrapper.instance().onPressRegisterButton();
      expect(firebase.userObj.sendEmailVerification.mock.calls.length).toBe(1);
    });
  });
});
