import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '../components/home/Home';
import Painel from './Painel';
import NovaDenuncia from '../containers/denuncias/NovaDenunciaContainer';
import ProximosPassos from '../components/denuncias/proximosPassos';
import Menu from '../components/menu/Menu';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Menu} />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
