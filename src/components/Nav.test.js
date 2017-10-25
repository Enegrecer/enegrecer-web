import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav from './Nav';

describe('Nav', () => {
  const historyMock = { push: jest.fn() };
  const wrapper = shallow(
    <Nav history={historyMock} />,
  );

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('tem a classe en-nav', () => {
    expect(wrapper.hasClass('en-nav')).toBeTruthy();
  });

  it('tem o link de sobre', () => {
    expect(wrapper.find('[href="/sobre"]').exists()).toBeTruthy();
  });

  describe('quando clicar no botão de registrar/entrar', () => {
    beforeEach(() => {
      wrapper.find('Botao[outline]').simulate('click');
    });

    it('deve chamar a função push com /painel/login', () => {
      expect(historyMock.push).toBeCalledWith('/painel/login');
    });
  });
});
