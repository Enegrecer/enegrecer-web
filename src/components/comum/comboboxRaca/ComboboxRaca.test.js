import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ComboboxRaca from '../comboboxRaca';
import TIPO from '../comboboxRaca/tipos';

describe('Combobox Raça', () => {
  it('deve possuir estrutura definida quando tipo igual testemunha ', () => {
    const onChange = jest.fn();
    const comboboxRacaTestemunha = mount(<ComboboxRaca id={'raca-testemunha'} onChange={onChange} classes={'racas'} tipo={TIPO.TESTEMUNHA} />);
    const comboboxRacaTestemunhaTextoJson = toJson(comboboxRacaTestemunha);
    expect(comboboxRacaTestemunhaTextoJson).toMatchSnapshot();
  });

  it('deve possuir estrutura definida quando tipo igual vítima ', () => {
    const onChange = jest.fn();
    const comboboxRacaVitima = mount(<ComboboxRaca id={'raca-vitma'} onChange={onChange} classes={'racas'} tipo={TIPO.VITIMA} />);
    const comboboxRacaVitimaTextoJson = toJson(comboboxRacaVitima);
    expect(comboboxRacaVitimaTextoJson).toMatchSnapshot();
  });
});
