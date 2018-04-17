import React, { Component } from 'react';
import EstatisticaMobile from './EstatisticaMobile';
import EstatisticaWeb from './EstatisticaWeb';

export default class Estatistica extends Component {

  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  componentDidMount() {
    window.addEventListener('resize', screenSize => this.handleResize(screenSize));
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render () {
    if (this.state.windowWidth <= 1080) {
      return (<EstatisticaMobile />);
    }
      return (<EstatisticaWeb />);
  }
}
