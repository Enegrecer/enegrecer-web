import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './home/Home';
import Login from './login/Login';
import Painel from './layouts/Painel';
import NovaDenuncia from '../containers/denuncias/NovaDenunciaContainer';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={() => {
        return authed === true
          ? <Component />
          : <Redirect to='/painel/login' />;
      }}
    />
  );
}


const Rotas = (props) => (
  <Switch>
    <Route exact path="/" component={HomePage} />

    <Painel>
      <Route path="/painel/login" render={() => <Login />} />
      <PrivateRoute authed={props.authed} path="/painel/denuncias/nova" component={NovaDenuncia} />
    </Painel>
  </Switch>
);

export default Rotas;
