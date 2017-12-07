import React from 'react';
import { shallow } from 'enzyme';
import NovaDenunciaForm from './NovaDenunciaForm';

describe('NovaDenunciaForm Component', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });
  describe('testa as renderizações dos campos do componente', () => {
    it('renderiza sem erro o campo de detalhamento do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);

      expect(wrapper.find('#detalhamento').length).toEqual(1);
    });

    it('renderiza sem erro o campo de horaOcorrencia do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
      expect(wrapper.find('#horaOcorrencia').length).toEqual(1);
    });

    it('renderiza sem erro o campo de dataOcorrencia do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
      expect(wrapper.find('#dataOcorrencia').length).toEqual(1);
    });

    it('renderiza sem erro o campo de idCategoria do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
      expect(wrapper.find('[name="idCategoria"]').length).toEqual(2);
    });

    it('renderiza sem erro o campo de endereco do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
      expect(wrapper.find('#endereco').length).toEqual(1);
    });

    it('renderiza sem erro o campo seletor de estados do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
      expect(wrapper.find('#estado').length).toEqual(1);
    });
  });

  it('inicializa o componente com o state esperado', () => {
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);

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

  describe('quando o valor do campo for alterado', () => {
    const wrapper = shallow(<NovaDenunciaForm
      salvarDenuncia={() => { }}
      alterarDenunciaForm={() => { }}
    />);

    beforeEach(() => {
      const eventMock = {
        target: {
          value: 'valor detalhamento',
        },
      };

      wrapper.find('#detalhamento').simulate('change', eventMock);
    });

    it('altera o valor correspondente no estado', () => {
      expect(wrapper.state().detalhamento).toEqual('valor detalhamento');
    });
  });

  describe('quando o form for submetido', () => {
    const salvarDenunciaSpy = jest.fn();
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={salvarDenunciaSpy} />);
    const stateMock = {
      detalhamento: 'valor detalhamento',
      idCategoria: 'valor categoria',
    };

    beforeEach(() => {
      wrapper.setState(stateMock);

      wrapper.find('form').simulate('submit');
    });

    it('deve chamar salvar denúncia com os dados corretos', () => {
      const expectedParams = {
        detalhamento: 'valor detalhamento',
        dataOcorrencia: '',
        horaOcorrencia: '',
        idCategoria: 'valor categoria',
        endereco: '',
        estado: '',
      };

      expect(salvarDenunciaSpy).toBeCalledWith(expectedParams);
    });
  });
});
