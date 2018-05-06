import React from 'react';
import { shallow } from 'enzyme';

import PaginaNaoEncontrada from './PaginaNaoEncontrada';

describe('PaginaNaoEncontrada', () => {
  it('tem o componente da mensagem página não encontrada', () => {
    const paginaNaoEncontradaComp = shallow(<PaginaNaoEncontrada />);

    expect(paginaNaoEncontradaComp.text()).toContain('Não encontramos a página que você requisitou.');
  });
});
