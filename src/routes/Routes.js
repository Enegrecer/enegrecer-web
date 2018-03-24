import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '../components/home/Home';
import Menu from '../components/menu/Menu';
import ColetivoEnegrecer from '../components/coletivoEnegrecer/ColetivoEnegrecer';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Menu} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/coletivo-enegrecer" component={ColetivoEnegrecer} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
