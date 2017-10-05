import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './home/Home';
import Login from './login/Login';
import Painel from './layouts/Painel';
import NovaDenuncia from '../containers/denuncias/NovaDenunciaContainer';

function PrivateRoute({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={props => (authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/painel/login', state: { from: props.location } }} />)}
    />
  );
}

function PublicRoute({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={props => (authed === false
        ? <Component {...props} />
        : <Redirect to="/painel/denuncias/nova" />)}
    />
  );
}

const Rotas = props => (
  <Switch>
    <Route exact path="/" component={HomePage} />

    <Painel>
      <PublicRoute authed={props.authed} path="/painel/login" component={Login} />
      <PrivateRoute authed={props.authed} path="/painel/denuncias/nova" component={NovaDenuncia} />
    </Painel>
  </Switch>
);

export default Rotas;
