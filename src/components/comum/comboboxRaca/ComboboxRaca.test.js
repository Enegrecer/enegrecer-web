import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ComboboxRaca from '../comboboxRaca';

describe('Combobox Raça', () => {
  it('deve conter todas as raças quando somenteRacasVitima é false ', () => {
    const comboboxRacaTestemunha = shallow(<ComboboxRaca id="raca-testemunha" state="raca-testemunha" classes="racas" somenteRacasVitima={false} />);
    const comboboxRacaTestemunhaTextoJson = toJson(comboboxRacaTestemunha);
    expect(comboboxRacaTestemunhaTextoJson).toMatchSnapshot();
  });

  it('deve conter somente as raças Pardo e Negro quando somenteRacasVitima é true ', () => {
    const comboboxRacaVitima = shallow(<ComboboxRaca id="raca-vitma" classes="racas" state="raca-testemunha" somenteRacasVitima />);
    const comboboxRacaVitimaTextoJson = toJson(comboboxRacaVitima);
    expect(comboboxRacaVitimaTextoJson).toMatchSnapshot();
  });
});

