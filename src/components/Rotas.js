import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './home/Home';
import Login from './login/Login';
import Painel from './layouts/Painel';
import NovaDenuncia from '../containers/denuncias/NovaDenunciaContainer';

/* eslint-disable */
function PrivateRoute({ component: Component, authed, ...rest }) {
  console.log("private");
  return (
    <Route
      {...rest}
      render={props => (authed === true
        ? <Component {...props} currentUserUID={rest.currentUserUID} />
        : <Redirect to={{ pathname: '/painel/login', state: { from: props.location } }} />)}
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (authed === false
        ? <Component {...props} />
        : <Redirect to="/painel/denuncias/nova" />)}
    />
  );
}

/* eslint-enable */
const Rotas = props => (
  <Switch>
    <Route exact path="/" component={HomePage} />

    <Painel>
      <PublicRoute authed={props.authed} path="/painel/login" component={Login} />
      <PrivateRoute
        currentUserUID={props.currentUserUID}
        authed={props.authed}
        path="/painel/denuncias/nova"
        component={NovaDenuncia}
      />
    </Painel>
  </Switch>
);

Rotas.propTypes = {
  authed: PropTypes.bool.isRequired,
  currentUserUID: PropTypes.string.isRequired,
};

export default Rotas;
