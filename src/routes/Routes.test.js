import React from 'react';
import { shallow, mount } from 'enzyme';
import Routes from './Routes';
import HomePage from '../components/home/Home';
import NovaDenuncia from '../containers/denuncias/NovaDenunciaContainer';
import $ from 'jquery';


function possuiRotaComComponente(rotas, rota, componente) {
  it(`possui rota "${rota}" com componente correto`, () => {
    const seletor = `[path="${rota}"]`;
    expect(rotas.find(seletor).prop('component')).toEqual(componente);
  });
}

describe('Routes', () => {
  const routes = shallow(<Routes />);
  possuiRotaComComponente(routes, '/', HomePage);
  possuiRotaComComponente(routes, '/painel/denuncias/nova', NovaDenuncia);
});

