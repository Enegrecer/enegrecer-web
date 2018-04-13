import React, { Component } from 'react';
import firebaseApp from '../../utils/firebaseUtils';
import TipoDeEstatistica from './TipoDeEstatistica';

export default class VitimasMulheres extends Component {
  constructor(props) {
    super(props);
    this.state = { percentagem: '0' };
  }

  componentDidMount() {
    const ref = firebaseApp.database().ref();
    let totalVitimas = 0;
    let totalMulheresVitmas = 0;
    const query = ref.child('pessoasEnvolvidas').orderByKey();
    query.once('value')
      .then((snapshot) => {
        snapshot.forEach((denunciaSnapshot) => {
          const vitima = denunciaSnapshot.val().vitima;
          if (vitima) {
            totalVitimas += 1;
            if (vitima.genero === 'Feminino') {
              totalMulheresVitmas += 1;
            }
          }
        });
        let percentagem = (totalMulheresVitmas * 100) / totalVitimas;
        percentagem = parseFloat(percentagem.toFixed(2));
        this.setState({ percentagem: `${percentagem}%` });
      });
  }

  render() {
    return (<TipoDeEstatistica
      id="verde"
      numero={this.state.percentagem}
      categoria="Vitimas Mulheres"
    />
    );
  }
}
