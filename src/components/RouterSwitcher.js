import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './home/Home';
import CategoriesList from './categories/list/CategoriesList'
import ComplaintsList from '../containers/complaints/NewComplaintContainer'
import Login from './login/Login'

const RouterSwitcher = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categorias" component={CategoriesList} />
        <Route path="/login" component={Login} />
        <Route path="/newComplaint" component={ComplaintsList} /> 
    </Switch>
);

export default RouterSwitcher;