import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';
import * as firebase from '../../utils/firebaseUtils';
import { setProperty } from '../../modules/auth';
import { mock } from 'sinon'
import NovaDenunciaForm from '../denuncias/NovaDenunciaForm';

jest.mock('../../utils/firebaseUtils');

describe('SignUp component', () => {
  it('Teste de renderização', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Inicializa o state corretamente', () => {
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
    it('Set uma propriedade no state', () => {
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

    it('Não sobrescreve outras propriedades no state', () => {
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

    it('Deveria retornar o status logado "logged = true" do usuário após o cadastro', async () => {
      const wrapper = shallow(<SignUp />);
      wrapper.setState({
        login: 'pass',
        password: 'any',
      });
      await wrapper.instance().onPressRegisterButton();
      expect(wrapper.state('logged')).toBe(true);
    });

    it('Seta as variáreis de erro do state quando o cadastro falhar', async () => {
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

    it('Deveria chamar o método "sendEmailVerification" ao criar um usuário', async () => {
      const wrapper = shallow(<SignUp />);
      wrapper.setState({
        login: 'pass',
        password: 'any',
      });
      await wrapper.instance().onPressRegisterButton();
      expect(firebase.userObj.sendEmailVerification.mock.calls.length).toBe(1);
    });
  });


    describe("Testes de funcionalidade para o registro de usuários", () => {
      it('Deveria redirecionar para a página de denúncia quando um usário for cadastrado com sucesso', () => {
        const wrapper = shallow(<SignUp />);
        wrapper.setState({
          firstName: 'firstName',
          lastName: 'lastName',
          login: 'b@b.com',
          password: 'senhaComMaisDe6Caracteres',
          logged: false,
        });
        wrapper.instance().onPressRegisterButton();
        const tela = shallow(<NovaDenunciaForm salvarDenuncia={mock()} />);
        expect(tela.find('NovaTestemunhaForm')).toHaveLength(1)
      });
    });

});
