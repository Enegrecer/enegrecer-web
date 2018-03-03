import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '../components/home/Home';
import Painel from '../components/layouts/Painel';
import NovaDenuncia from '../containers/denuncias/NovaDenunciaContainer';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Painel>
        <Route path="/painel/denuncias/nova" component={NovaDenuncia} />
      </Painel>
    </Switch>
  </BrowserRouter>
);

export default Routes;
