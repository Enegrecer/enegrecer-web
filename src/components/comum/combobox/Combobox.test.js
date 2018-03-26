import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Combo from './index';

describe('Combobox', () => {
  const dados = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  it('deve possuir estrutura definida ', () => {
    const combo = shallow(<Combo itens={dados} />);
    const comboTextoJson = toJson(combo);
    expect(comboTextoJson).toMatchSnapshot();
  });
});

