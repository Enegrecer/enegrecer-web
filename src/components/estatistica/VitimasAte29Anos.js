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
          if (vitima
              && vitima.dataNascimento
              && this.temMenosDe29Anos(vitima.dataNascimento)) {
            total += 1;
          }
        });
        this.setState({ totalDeDenunciaPorVitimasAte29Anos: total });
      });
  }

  temMenosDe29Anos(dataNascimento) {
    if(this.calculaIdade(dataNascimento)<=29){
      return true;
    }
    return false;
  }

  calculaIdade(dataNascimento) {
    var today = new Date();
    var birthDate = new Date(dataNascimento);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
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
