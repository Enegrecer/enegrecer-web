import React from 'react';
import { SignIn } from './SignIn';
import { shallow } from 'enzyme';

jest.mock('../../../utils/firebaseUtils');

describe('SignIn Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.exists()).toBe(true);
    });

    it('initialize the state object properly', () => {
        const wrapper = shallow(<SignIn />);
        const expetctedState = {
            logged: false,
            login: '',
            password: '',
            loginError: null,
            loginErrorMessage: ''
        };
        expect(wrapper.state()).toEqual(expetctedState);
    });

    describe('setProperty method', () => {
        it('set a property in the state', () => {
            const wrapper = shallow(<SignIn />);
            const simulatedEvent = {
                target: {
                    value: true
                }
            };
            const propertyToSet = 'logged';
            wrapper.instance().setProperty(simulatedEvent, propertyToSet);
            expect(wrapper.state(propertyToSet)).toBe(simulatedEvent.target.value);
        });

        it('does not override other properties of the state', () => {
            const wrapper = shallow(<SignIn />);
            const propertyToSet = 'logged';
            const simulatedEvent = {
                target: {
                    value: true
                }
            };

            let expetctedState = wrapper.state();
            expetctedState[propertyToSet] = simulatedEvent.target.value;

            wrapper.instance().setProperty(simulatedEvent, propertyToSet);
            expect(wrapper.state()).toEqual(expetctedState);
        });
    });

    describe('onPressLoginButton method', () => {
        it('sets the state with "logged" to true when login is sucessfull', async () => {
            const wrapper = shallow(<SignIn />);
            wrapper.setState({
                login: 'pass',
                password: 'any'
            });
            await wrapper.instance().onPressLoginButton();
            expect(wrapper.state('logged')).toBeTruthy();
        });

        it('sets the state with the error variables when the login fails', async () => {
            const wrapper = shallow(<SignIn />);
            wrapper.setState({
                login: 'error',
                password: 'wrongPassword'
            });
            await wrapper.instance().onPressLoginButton();
            expect(wrapper.state('loginErrorMessage')).toEqual('Senha errada');
            expect(wrapper.state('loginError')).toEqual('auth/wrong-password');
            expect(wrapper.state('logged')).toBe(false);
            expect(wrapper.state('login')).toEqual('');
            expect(wrapper.state('password')).toEqual('');
        });
    });
});
