import React, { Component } from 'react';
import Home from './home/Home';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CategoriesList from './categories/list/CategoriesList'
import Login from './login/Login'
import AppBar from 'material-ui/AppBar'
import { IconButton, Drawer, MenuItem } from 'material-ui'
import { Link } from 'react-router-dom'
import NavigationClose from 'material-ui/svg-icons/navigation/close'


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

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
            
                   
                <Switch>       
                    <Route exact path="/" component={Home} />
                    <Route path="/categorias" component={CategoriesList} />
                    <Route path="/login" component={Login} />
                </Switch>                        
            </div>
        </BrowserRouter>
        );
    }
}
