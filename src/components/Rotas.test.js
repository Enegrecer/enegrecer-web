import React from 'react';
import { shallow } from 'enzyme';
import Rotas from './Rotas';
import HomePage from './home/Home';
import CategoriesList from './categories/list/CategoriesList';
import Login from './login/Login';

function possuiRotaComComponente(rotas, rota, componente) {
  it(`possui rota "${rota}" com componente correto`, () => {
    const seletor = `[path="${rota}"]`;

    expect(rotas.find(seletor).prop('component')).toEqual(componente);
  });
}

describe('Rotas', () => {
  const rotas = shallow(<Rotas />);

  possuiRotaComComponente(rotas, '/', HomePage);
  possuiRotaComComponente(rotas, '/painel/categorias', CategoriesList);
  possuiRotaComComponente(rotas, '/painel/login', Login);
});
