import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { estaAutenticado } from '../utils/firebaseUtils';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      estaAutenticado() ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
