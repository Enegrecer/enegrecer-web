import React from 'react';
import { shallow, mount } from 'enzyme';
import DetalhamentoDenuncia from './DetalhamentoDenuncia';


describe('DetalhamentoDenuncia Component', () => {
  it('deve renderizar o componente sem erros', () => {
    const wrapper = shallow(<DetalhamentoDenuncia />);
    expect(wrapper.exists()).toBe(true);
  });
  describe('Renderizações dos campos do componente', () => {
    it('deve renderizar sem erro o campo de detalhamento do componente', () => {
      const wrapper = shallow(<DetalhamentoDenuncia />);
      expect(wrapper.find('#detalhamento').length).toEqual(1);
    });

    it('deve renderizar sem erro o campo de horaOcorrencia do componente', () => {
      const wrapper = shallow(<DetalhamentoDenuncia />);
      expect(wrapper.find('#horaOcorrencia').length).toEqual(1);
    });

    it('deve renderizar sem erro o campo de dataOcorrencia do componente', () => {
      const wrapper = shallow(<DetalhamentoDenuncia />);
      expect(wrapper.find('#dataOcorrencia').length).toEqual(1);
    });

    it('deve renderizar sem erro o campo de idCategoria do componente', () => {
      const wrapper = mount(<DetalhamentoDenuncia />);
      expect(wrapper.find('input#radioInjuria').length).toEqual(1);
      expect(wrapper.find('input#radioRacismo').length).toEqual(1);
    });

    it('deve renderizar sem erro o campo de endereco do componente', () => {
      const wrapper = shallow(<DetalhamentoDenuncia />);
      expect(wrapper.find('#endereco').length).toEqual(1);
    });

    it('deve renderizar sem erro o campo seletor de estados do componente', () => {
      const wrapper = shallow(<DetalhamentoDenuncia />);
      expect(wrapper.find('#estado').length).toEqual(1);
    });
  })

  describe('quando o valor do campo for alterado', () => {
    const wrapper = shallow(<DetalhamentoDenuncia />);

    beforeEach(() => {
      const eventMock = {
        target: {
          value: 'valor detalhamento',
        },
      };

      wrapper.find('#detalhamento').simulate('change', eventMock);
    });

    it('altera o valor correspondente no state', () => {
      expect(wrapper.state().detalhamento).toEqual('valor detalhamento');
    });
  });

  it('inicializa o componente com o valor padrao para state', () => {
    const wrapper = shallow(<DetalhamentoDenuncia />);

    const expectedState = {
      detalhamento: '',
      dataOcorrencia: '',
      horaOcorrencia: '',
      idCategoria: '',
      estado: '',
      endereco: '',
    };
    expect(wrapper.state()).toEqual(expectedState);
  });
});

