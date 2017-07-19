import React, { Component } from 'react';
import Home from './home/Home';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CategoriesList from './categories/list/CategoriesList';


class App extends Component {
    render() {
        return (
            <BrowserRouter>         
                <Switch>       
                    <Route exact path="/" component={Home} />
                    <Route path="/categorias" component={CategoriesList} />
                </Switch>            
            </BrowserRouter>
        );
    }
}

export default App;
