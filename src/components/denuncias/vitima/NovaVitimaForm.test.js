import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import NovaVitimaForm from './NovaVitimaForm';


describe('NovaVitimaForm Component', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<NovaVitimaForm />);
    expect(wrapper.exists()).toBe(true);
  });

  it('deve iniciar o state corretamente', () => {
    const wrapper = shallow(<NovaVitimaForm />)
    const expectedState = {
      pessoaIdentificada: false,
      souAVitima: false,
      conhecoAVitima: false,
      nome: '',
      genero: '',
      raca: '',
      dataNascimento: '',
      endereco: '',
      estado: '',
      telefone: '',
      email: '',
      naturalidade: '',
      caracteristicasVitima: '',
    };
    expect(wrapper.instance().state).toEqual(expectedState)
  });

  describe('quando o valor do campo for alterado', () => {
    const handleChangeSpy = spy();
    const wrapper = shallow(<NovaVitimaForm handleChange={handleChangeSpy} />);

    it('altera o valor correspondente no estado', () => {
      const eventMock = {
        target: {
          value: 'Coletivo nacional de Juventude Enegrecer é uma expressão do movimento social',
        },
      };

      wrapper.find('#nome-vitima').simulate('change', eventMock);
      expect(wrapper.state().nome).toEqual('Coletivo nacional de Juventude Enegrecer');
    });

    it('deve chamar o handleChange prop quando o component montar', () => {
      wrapper.instance().componentDidMount()
      expect(handleChangeSpy.called).toBeTruthy();
    })
  });
})
