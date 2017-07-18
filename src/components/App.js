import React, { Component } from 'react';
import Login from './login/Login';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CategoriesList from './categories/list/CategoriesList';


class App extends Component {
    render() {
        return (
            <BrowserRouter>         
                <Switch>       
                    <Route exact path="/" component={Login} />
                    <Route path="/categorias" component={CategoriesList} />
                </Switch>            
            </BrowserRouter>
        );
    }
}

export default App;
