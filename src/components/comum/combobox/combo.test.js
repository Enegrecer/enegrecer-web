import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Combo from './index'

describe('Combobox', () => {
  const dados = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  it('não deve possuir estrutura definida ', () => {
    const onChange = jest.fn();
    const combo = mount(<Combo itens={dados} onChange={onChange} />);
    const comboTextoJson = toJson(combo);
    expect(comboTextoJson).toMatchSnapshot();
  });
});
