import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { IconButton, Drawer, MenuItem } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import HomePage from './home/Home';
import CategoriesList from './categories/list/CategoriesList';
import Login from './login/Login';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() { this.setState({ open: !this.state.open }); }

  render() {
    return (
      <BrowserRouter hideNavBar>
        <div>
          <AppBar
            title="Enegrecer"
            onLeftIconButtonTouchTap={this.handleToggle}
          />

          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={open => this.setState({ open })}
          >
            <AppBar
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              title="Enegrecer"
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            <Link to="/"><MenuItem>Home</MenuItem></Link>
            <Link to="/categorias"><MenuItem>Categorias</MenuItem></Link>
            <Link to="/login"><MenuItem>Login</MenuItem></Link>
          </Drawer>


          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/categorias" component={CategoriesList} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
