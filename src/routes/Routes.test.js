import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Routes from './Routes';
import HomePage from '../components/home/Home';
import NovaDenuncia from '../containers/denuncias/NovaDenunciaContainer';
import ProximosPassos from '../components/denuncias/proximosPassos';
import Sobre from '../components/sobre/Sobre';

describe('Routes', () => {
  it('deve construir a pagina corretamente ', () => {
    const routes = shallow(<Routes />);
    const routesJson = toJson(routes);
    expect(routesJson).toMatchSnapshot();
  });
});
