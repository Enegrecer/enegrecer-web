import React from 'react';
import { shallow } from 'enzyme';

import Botao from './Botao';

describe('Botao', () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(
    <Botao onClick={onClickSpy}>
      Clique aqui
    </Botao>,
  );

  it('tem a classe en-btn', () => {
    expect(wrapper.hasClass('en-btn')).toBeTruthy();
  });

  it('tem o texto "Clique aqui"', () => {
    expect(wrapper.text()).toEqual('Clique aqui');
  });

  it('não deve ter a classe en-btn--outline por padrão', () => {
    expect(wrapper.hasClass('en-btn--outline')).not.toBeTruthy();
  });

  it('não deve ter a classe en-btn--primary por padrão', () => {
    expect(wrapper.hasClass('en-btn--primary')).not.toBeTruthy();
  });

  describe('quando clica no botao', () => {
    beforeEach(() => {
      wrapper.simulate('click');
    });

    it('chama a funcao de onClick', () => {
      expect(onClickSpy).toBeCalled();
    });
  });

  describe('quando for outline', () => {
    beforeEach(() => {
      wrapper.setProps({ outline: true });
    });

    it('tem a classe en-btn--outline', () => {
      expect(wrapper.hasClass('en-btn--outline')).toBeTruthy();
    });
  });

  describe('quando for primary', () => {
    beforeEach(() => {
      wrapper.setProps({ primary: true });
    });

    it('tem a classe en-btn--primary', () => {
      expect(wrapper.hasClass('en-btn--primary')).toBeTruthy();
    });
  });

  describe('quando for colored', () => {
    beforeEach(() => {
      wrapper.setProps({ colored: true });
    });

    it('tem a classe en-btn--colored', () => {
      expect(wrapper.hasClass('en-btn--colored')).toBeTruthy();
    });
  });
});
