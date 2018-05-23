import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BotoesRadio from './index';

describe('Botões Rádio', () => {
  const botoes = [
    { id: 'radioInjuria', valor: 'injuria', label: 'Injúria' },
    { id: 'radioRacismo', valor: 'racismo', label: 'Racismo' }];

  it('deve possuir estrutura definida ', () => {
    const onChange = jest.fn();
    const botoesRadio = shallow(<BotoesRadio
      state="idOcorrencia"
      classes="col s3"
      id="id"
      onChange={onChange}
      botoes={botoes}
    />);
    const botoesRadioTextoJson = toJson(botoesRadio);
    expect(botoesRadioTextoJson).toMatchSnapshot();
  });
});

