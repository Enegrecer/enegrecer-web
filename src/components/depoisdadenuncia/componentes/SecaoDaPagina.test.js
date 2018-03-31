import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SecaoDaPagina from './SecaoDaPagina';

describe('Secao da pagina depois da denuncia', () => {
  const wrapper = shallow(<SecaoDaPagina
    nomeDaClasse="classe-teste"
    textoDoBloco="texto-teste"
    imagemSecao="imagem-teste"
    ladoTexto="lado-teste"
    nomeFoto="nome-teste"
  />);

  it('possui a mesma estrutura', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
