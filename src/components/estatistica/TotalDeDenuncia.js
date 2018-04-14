import React, { Component } from 'react';
import firebaseApp from '../../utils/firebaseUtils';
import TipoDeEstatistica from './TipoDeEstatistica';

export default class TotalDeDenuncia extends Component {
  constructor(props) {
    super(props);
    this.state = { totalDeDenuncia: '0' };
  }

  componentDidMount() {
    const ref = firebaseApp.database().ref();
    ref.child('denuncias').once('value', (snapshot) => {
      this.setState({ totalDeDenuncia: snapshot.numChildren() });
    });
  }

  render() {
    return (<TipoDeEstatistica
      id="cinzaClaro"
      numero={this.state.totalDeDenuncia}
      categoria="Total de Denúncia"
    />
    );
  }
}
