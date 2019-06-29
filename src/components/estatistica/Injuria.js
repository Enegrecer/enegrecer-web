import React, { Component } from 'react';
import firebaseApp from '../../utils/firebaseUtils';
import TipoDeEstatistica from './TipoDeEstatistica';

export default class Injuria extends Component {
  constructor(props) {
    super(props);
    this.state = { totalDeDenunciaPorInjuria: '0' };
  }

  componentDidMount() {     
    const ref = firebaseApp.database().ref();     
    ref.child('denuncias').orderByChild('idCategoria').equalTo('injuria')       
    .once('value', (snapshot) => {         
      this.setState({ totalDeDenunciaPorInjuria: snapshot.numChildren() });       
    }, (err) => 
    {         
      console.error("Erro de requisição"); 
  });   
}

  render() {
    return (<TipoDeEstatistica
      id="amarelo"
      numero={this.state.totalDeDenunciaPorInjuria}
      categoria="Injúria Racial"
    />);
  }
}
