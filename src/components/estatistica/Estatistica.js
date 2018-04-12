import React, { Component } from 'react';
import './css/estatistica.css';
import TipoDeEstatistica from './TipoDeEstatistica';
import firebaseApp from '../../utils/firebaseUtils';

export default class Estatistica extends Component {
  constructor(props) {
    super(props);
    this.state = { numeroDenunciaPorRacismo: '0',
      numeroDenunciaPorInjuria: '0',
      totalDeDenuncia: '0',
      totalDeVitimasMulheres: '0'
    };
  }

  componentDidMount() {
    const ref = firebaseApp.database().ref();
    this.totalDenunciaPorRacismo(ref);
    this.totalDenunciaPorInjuria(ref);
    this.totalDeDenuncia(ref);
    this.totalDeVitimasMulheres(ref);
  }

  totalDenunciaPorRacismo(ref) {
    ref.child('denuncias').orderByChild('idCategoria').equalTo('racismo')
      .once('value', (snapshot) => {
        const denuncias = snapshot.val();
        const totalDenunciaPorRacismo = Object.keys(denuncias).length;
        this.setState({ numeroDenunciaPorRacismo: totalDenunciaPorRacismo });
      });
  }

  totalDenunciaPorInjuria(ref) {
    ref.child('denuncias').orderByChild('idCategoria').equalTo('injuria')
      .once('value', (snapshot) => {
        const denuncias = snapshot.val();
        const totalDenunciaPorInjuria = Object.keys(denuncias).length;
        this.setState({ numeroDenunciaPorInjuria: totalDenunciaPorInjuria });
      });
  }

  totalDeDenuncia(ref) {
    ref.child('denuncias').once('value', (snapshot) => {
      const denuncias = snapshot.val();
      const total = Object.keys(denuncias).length;
      this.setState({ totalDeDenuncia: total });
    });
  }

  totalDeVitimasMulheres(ref) {
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
        this.setState({ totalDeVitimasMulheres: total });
      });
  }

  render() {
    return (<div id="estatistica">
      <div id="nosso-objetivo">
        <div className="retangular-bloco" />
        <h6>Nosso Objetivo </h6>
        <p>Buscamos dar visibilidade para crimes contra negros a partir de uma
      base de dados acessível, transparente e atualizada. </p>
      </div>

      <TipoDeEstatistica
        key="vermelho"
        id="vermelho"
        numero={this.state.numeroDenunciaPorRacismo}
        categoria="Racismo"
      />

      <div id="rectangle2">
        <div id="rectangle21">
          <TipoDeEstatistica
            key="amarelo"
            id="amarelo"
            numero={this.state.numeroDenunciaPorInjuria}
            categoria="Injúria Racial"
          />

          <TipoDeEstatistica
            key="verde"
            id="verde"
            numero={this.state.totalDeVitimasMulheres}
            categoria="Vítimas Mulheres"
          />
        </div>
        <div id="rectangle22">
          <TipoDeEstatistica
            key="cinza"
            id="cinza"
            numero="23"
            categoria="Vítima até 26 anos"
          />

          <TipoDeEstatistica
            key="cinzaClaro"
            id="cinzaClaro"
            numero={this.state.totalDeDenuncia}
            categoria="Total de Denúncia"
          />
        </div>
      </div>
    </div>
    );
  }
}
