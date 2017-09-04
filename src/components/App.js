<<<<<<< HEAD
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './Rotas';
=======
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import { IconButton, Drawer, MenuItem } from 'material-ui'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import RouterSwitcher from './RouterSwitcher'
>>>>>>> 4f2095316116dcd807774bb4e77eb5e107276aa9

const App = () => (
  <BrowserRouter hideNavBar>
    <Rotas />
  </BrowserRouter>
);

<<<<<<< HEAD
export default App;
=======
    handleToggle() { this.setState({open: !this.state.open}); }

    render() {
        return (
        <BrowserRouter hideNavBar={true}>  
            <div>
                <AppBar
          title="Enegrecer"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)} 
          />

                <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>    
                    <AppBar 
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        title="Enegrecer"
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)} 
                        />               
                    <Link to="/"><MenuItem>Home</MenuItem></Link>
                    <Link to="/categorias"><MenuItem>Categorias</MenuItem></Link>
                    <Link to="/login"><MenuItem>Login</MenuItem></Link>
                </Drawer>
            
                <RouterSwitcher />   
                                    
            </div>
        </BrowserRouter>
        );
    }
}
>>>>>>> 4f2095316116dcd807774bb4e77eb5e107276aa9
