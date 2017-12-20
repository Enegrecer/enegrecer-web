import React from 'react';
import { shallow } from 'enzyme';
import { mock } from 'sinon'
import NovaDenunciaForm from './NovaDenunciaForm';

describe('NovaDenunciaForm Component', () => {
  it('deve renderizar o componente sem erros', () => {
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('deve renderizar o componente NovaVitimaForm', () => {
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={mock()} />);

    expect(wrapper.find('NovaVitimaForm')).toHaveLength(1)
  });
  it('deve renderizar o componente NovaTestemunhaForm.js', () => {
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={mock()} />);

    expect(wrapper.find('NovaTestemunhaForm')).toHaveLength(1)
  });
  it('deve renderizar o componente DetalhamentoDenuncia', () => {
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={mock()} />);

    expect(wrapper.find('DetalhamentoDenuncia')).toHaveLength(1)
  });

  describe('quando o form for submetido', () => {
    const salvarDenunciaSpy = jest.fn();
    const alterarDenunciaFormSpy = jest.fn();
    const wrapper = shallow(
      <NovaDenunciaForm
        alterarDenunciaForm={alterarDenunciaFormSpy}
        salvarDenuncia={salvarDenunciaSpy}
      />);
    const stateMock = {
      detalhamento: 'valor detalhamento',
      idCategoria: 'valor categoria',
    };


    it('deve ter o state atualizado com os dados corretos', () => {
      wrapper.instance().handleChange(stateMock);

      const expectedState = {
        detalhamento: 'valor detalhamento',
        dataOcorrencia: '',
        horaOcorrencia: '',
        idCategoria: 'valor categoria',
        endereco: '',
        estado: '',
        vitima: {},
        testemunha: {}
      };

      expect(wrapper.state()).toEqual(expectedState);
    });

    it('deve chamar alterarDenunciaForm prop func com os dados corretos', () => {
      const expectedParams = {
        detalhamento: 'valor detalhamento',
        dataOcorrencia: '',
        horaOcorrencia: '',
        idCategoria: 'valor categoria',
        endereco: '',
        estado: '',
        vitima: {},
        testemunha: {}
      };
      expect(alterarDenunciaFormSpy).toBeCalledWith(expectedParams);
    });

    it('deve chamar salvar denúncia com os dados corretos', () => {
      wrapper.find('form').simulate('submit');
      expect(salvarDenunciaSpy).toBeCalled();
    });
  });
});
