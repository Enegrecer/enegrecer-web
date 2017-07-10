import React, { Component } from 'react';
import CategoriesList from './categories/list/CategoriesList';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CategoriesList />
            </div>
        );
    }
}

export default App;
