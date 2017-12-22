import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '../components/home/Home';
import Login from '../components/login/Login';
import Painel from '../components/layouts/Painel';
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
const Routes = props => (
  <BrowserRouter>
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
   </BrowserRouter>
);

Routes.propTypes = {
  authed: PropTypes.bool.isRequired,
  currentUserUID: PropTypes.string.isRequired,
};

export default Routes;
