import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ComboboxRaca from '../comboboxRaca';

describe('Combobox Raça', () => {
  it('deve conter todas as raças quando somenteRacasVitima é false ', () => {
    const onChange = jest.fn();
    const comboboxRacaTestemunha = mount(<ComboboxRaca id={'raca-testemunha'} onChange={onChange} classes={'racas'} somenteRacasVitima={false} />);
    const comboboxRacaTestemunhaTextoJson = toJson(comboboxRacaTestemunha);
    expect(comboboxRacaTestemunhaTextoJson).toMatchSnapshot();
  });

  it('deve conter somente as raças Pardo e Negro quando somenteRacasVitima é true ', () => {
    const onChange = jest.fn();
    const comboboxRacaVitima = mount(<ComboboxRaca id={'raca-vitma'} onChange={onChange} classes={'racas'} somenteRacasVitima />);
    const comboboxRacaVitimaTextoJson = toJson(comboboxRacaVitima);
    expect(comboboxRacaVitimaTextoJson).toMatchSnapshot();
  });
});
