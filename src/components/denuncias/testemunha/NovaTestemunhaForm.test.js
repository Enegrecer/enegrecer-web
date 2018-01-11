import React from 'react'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import NovaTestemunhaForm from './NovaTestemunhaForm';

describe('validacoesCamposTestemunha', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<NovaTestemunhaForm />);
    expect(wrapper.exists()).toBe(true);
  });

  it('deve iniciar o state corretamente', () => {
    const wrapper = shallow(<NovaTestemunhaForm />)
    const expectedState = {
      nome: '',
      genero: '',
      raca: '',
      dataNascimento: '',
      telefone: '',
      caracteristicas: '',
    };
    expect(wrapper.instance().state).toEqual(expectedState)
  });

  describe('quando o valor do campo for alterado', () => {
    const handleChangeSpy = spy();
    const wrapper = shallow(<NovaTestemunhaForm handleChange={handleChangeSpy} />);

    it('deve cortar o nome se tiver mais de 40 caracteres', async () => {
      const eventMock = {
        target: {
          value: 'Coletivo nacional de Juventude Enegrecer é uma expressão do movimento social',
        },
      };

      wrapper.find('#nome-testemunha').simulate('change', eventMock);
      expect(wrapper.state().nome).toEqual('Coletivo nacional de Juventude Enegrecer');
    });

    it('deve cortar o gênero se tiver mais de 15 caracteres', async () => {
      const eventMock = {
        target: {
          value: 'Coletivo nacional de Juventude Enegrecer',
        },
      };

      wrapper.find('#genero-testemunha').simulate('change', eventMock);
      expect(wrapper.state().genero).toEqual('Coletivo nacion');
    });

    it('deve cortar o caracteristicas da testemunha se tiver mais de 255 caracteres', async () => {
      const eventMock = {
        target: {
          value: 'O coletivo nacional de Juventude Enegrecer é uma expressão do movimento social negro, de âmbito nacional, que se constitui como espaço autônomo de articulação e formação política, anti-capitalista, anti-racista,anti-patriarcal não lesbofóbica e não homofóbica objetivando organizar jovens negros e negras,visando a busca da efetiva cidadania da juventude negra brasileira. É um movimento que se soma a todos os demais movimentos sociais progressistas que lutam por outro mundo possível.',
        },
      };

      wrapper.find('#caracteristicas-testemunha').simulate('change', eventMock);
      expect(wrapper.state().caracteristicas).toEqual('O coletivo nacional de Juventude Enegrecer é uma expressão do movimento social negro, de âmbito nacional, que se constitui como espaço autônomo de articulação e formação política, anti-capitalista, anti-racista,anti-patriarcal não lesbofóbica e não homofó');
    });

    it('deve chamar o handleChange prop quando o component montar', () => {
      wrapper.instance().componentDidMount()
      expect(handleChangeSpy.called).toBeTruthy();
    })
  });
});
