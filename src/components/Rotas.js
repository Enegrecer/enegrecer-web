import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './home/Home';
import CategoriesList from './categories/list/CategoriesList';
import Login from './login/Login';
import Painel from './layouts/Painel';

const Rotas = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />

    <Route path="/painel">
      <Painel>
        <Route path="/painel/categorias" component={CategoriesList} />
        <Route path="/painel/login" component={Login} />
      </Painel>
    </Route>
  </Switch>
);

export default Rotas;
