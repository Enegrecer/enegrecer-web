import React, { Component } from 'react';
import './css/estatistica.css';
import TipoDeEstatistica from './TipoDeEstatistica';
import * as estatisticaRepositorio from '../../utils/estatisticaRepositorio';

export default class Estatistica extends Component {
  constructor(props) {
    super(props);
    this.state = { totalDeDenunciaPorRacismo: '0',
                   totalDeDenunciaPorInjuria: '0',
                   totalDeDenuncia: '0',
                   totalDeVitimasMulheres: '0'
    };
  }

  componentDidMount() {
    this.setState({totalDeDenunciaPorRacismo : estatisticaRepositorio.totalDenunciaPorRacismo()});
    this.setState({totalDeDenunciaPorInjuria : estatisticaRepositorio.totalDenunciaPorInjuria()});
    this.setState({totalDeDenuncia : estatisticaRepositorio.totalDeDenuncia()});
    this.setState({totalDeVitimasMulheres : estatisticaRepositorio.totalDeVitimasMulheres()});
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
        numero={this.state.totalDeDenunciaPorRacismo}
        categoria="Racismo"
      />

      <div id="rectangle2">
        <div id="rectangle21">
          <TipoDeEstatistica
            key="amarelo"
            id="amarelo"
            numero={this.state.totalDeDenunciaPorInjuria}
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
