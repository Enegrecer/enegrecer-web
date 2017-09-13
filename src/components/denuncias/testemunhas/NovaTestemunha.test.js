import React from 'react';
import { shallow } from 'enzyme';
import NovaTestemunha from './NovaTestemunha';

describe('NovaTestemunha Component', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<NovaTestemunha />);
    expect(wrapper.exists()).toBe(true);
  });

  describe('testa as renderizações dos inputs do componente', () => {
    it('renderiza sem erro o input de nome do componente', () => {
      const wrapper = shallow(<NovaTestemunha />);

      expect(wrapper.children('#nome').length).toBe(1);
    });

    it('renderiza sem erro o input de genero do componente', () => {
      const wrapper = shallow(<NovaTestemunha />);

      expect(wrapper.children('#genero').length).toBe(1);
    });

    it('renderiza sem erro o input de raça do componente', () => {
      const wrapper = shallow(<NovaTestemunha />);

      expect(wrapper.children('#raca').length).toBe(1);
    });

    it('renderiza sem erro o input de data de nascimento do componente', () => {
      const wrapper = shallow(<NovaTestemunha />);

      expect(wrapper.children('#dataNascimento').length).toBe(1);
    });

    it('renderiza sem erro o input de informações complementares do componente', () => {
      const wrapper = shallow(<NovaTestemunha />);

      expect(wrapper.children('#informacoesComplementares').length).toBe(1);
    });

    it('renderiza sem erro o input de email do componente', () => {
      const wrapper = shallow(<NovaTestemunha />);

      expect(wrapper.children('#email').length).toBe(1);
    });

    it('renderiza sem erro o input de telefone do componente', () => {
      const wrapper = shallow(<NovaTestemunha />);

      expect(wrapper.children('#telefone').length).toBe(1);
    });

    it('renderiza sem erro o input de endereco do componente', () => {
      const wrapper = shallow(<NovaTestemunha />);

      expect(wrapper.children('#endereco').length).toBe(1);
    });
  });
});
