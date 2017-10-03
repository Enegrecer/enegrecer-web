import React, { Component } from 'react';
import Rotas from './Rotas';
import { firebaseAuth } from '../utils/firebaseUtils';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authed: false,
      loading: false,
      currentUser: null,
      nextState: null,
    };
  }

  shouldComponentUpdate() {
    this.setState({
      currentUser: firebaseAuth().currentUser,
    });
    if (this.state.currentUser !== this.state.nextState) {
      this.setState({
        authed: true,
        nextState: this.state.currentUser,
      });
    }
    return true;
  }

  componentWillUnmount() {
    this.removeListener();
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <div>
        <Rotas authed={this.state.authed} />
      </div>
    );
  }
}

/*const App = () => (
  <Rotas />
);

export default App;*/

