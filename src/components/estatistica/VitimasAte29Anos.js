import React, { Component } from 'react';
import firebaseApp from '../../utils/firebaseUtils';
import TipoDeEstatistica from './TipoDeEstatistica';

export default class VitimasAte29Anos extends Component {
  constructor(props) {
    super(props);
    this.state = { totalDeDenunciaPorVitimasAte29Anos: '0' };
  }

  componentDidMount() {
    const ref = firebaseApp.database().ref();
    let total = 0;
    const query = ref.child('pessoasEnvolvidas').orderByKey();
    query.once('value')
      .then((snapshot) => {
        snapshot.forEach((denunciaSnapshot) => {
          const vitima = denunciaSnapshot.val().vitima;
          if (vitima && vitima.genero === 'Feminino') {
            total += 1;
          }
        });
        this.setState({ totalDeDenunciaPorVitimasMulheres: total });
      });
  }

  render() {
    return (<TipoDeEstatistica
      id="cinza"
      numero={this.state.totalDeDenunciaPorVitimasAte29Anos}
      categoria="Vitimas até 29 Anos"
    />
    );
  }
}
