import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';
import HomePage from '../components/home/Home';
import Login from '../components/login/Login';
import NovaDenuncia from '../containers/denuncias/NovaDenunciaContainer';

function possuiRotaComComponente(rotas, rota, componente) {
  it(`possui rota "${rota}" com componente correto`, () => {
    const seletor = `[path="${rota}"]`;
    expect(rotas.find(seletor).prop('component')).toEqual(componente);
  });
}

describe('Routes', () => {
  const authed = true;
  const uid = '123456';
  const routes = shallow(<Routes authed={authed} currentUserUID={uid} />);
  possuiRotaComComponente(routes, '/', HomePage);
  possuiRotaComComponente(routes, '/painel/login', Login);
  possuiRotaComComponente(routes, '/painel/denuncias/nova', NovaDenuncia);
});

