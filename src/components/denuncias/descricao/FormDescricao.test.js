import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Descricao from './FormDescricao';

describe('Form Descrição', () => {
  it('deve seguir a estrutura definida ', () => {
    const desricao = shallow(<Descricao />);
    const desricaoJson = toJson(desricao);
    expect(desricaoJson).toMatchSnapshot();
  });
});
