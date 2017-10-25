import React, { Component } from 'react';
import Rotas from './Rotas';
import { firebaseAuth } from '../utils/firebaseUtils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      loading: true,
      currentUserUID: '',
    };
  }

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          currentUserUID: user.uid,
        });
      } else {
        this.setState({
          authed: false,
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return this.state.loading === true ? <h1>Loading...</h1> : (
      <div>
        <Rotas authed={this.state.authed} currentUserUID={this.state.currentUserUID} />
      </div>
    );
  }
}
