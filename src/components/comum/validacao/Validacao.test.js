import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nome from '../../comum/nome';
import { aplicarValidacao, validaCampo } from './index'

describe('Validações', () => {
  let formulario;

  beforeEach(() => {
    formulario = (props) => {
      const { onSubmit } = props;
      return (
        <form onSubmit={onSubmit}>
          <button type="submit">Submit</button>
        </form>
      )
    };
  });

  it('deve criar campo de validacão',  () => {
    const onChange = jest.fn();
    let nome =  mount(<Nome id={'nome-vitima'} name={"teste"} onChange={onChange} />);
     nome = validaCampo(nome);
     const nomeToJson = toJson(nome);
     expect(nomeToJson).toMatchSnapshot();

  });



  xit('deve possuir mostrar mensagem de erro caso alguma validação de campo falhe ', () => {
    const onSubmit = jest.fn();
    const formulario = mount(<formulario />);
    console.log(formulario.props);
    formulario.simulate('submit');
    expect(formulario.find('div.span')).to.have.length(1);
  });
});
