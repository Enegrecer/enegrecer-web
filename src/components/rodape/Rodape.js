import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagens/logo-rodape.svg';
import facebook from '../../imagens/facebook.svg';
import instagram from '../../imagens/instagram.svg';
import './rodape.css';

export default class Rodape extends Component {
  componentWillMount() {
  }
  
  render() {
    return (
      <div className="rodape">
        <div>
          <img src={logo} alt="Logo Verdade Seja Dita" />          
        </div>
        <div className="direitos">
          <label>© 2018 - Verdade Seja Dita todos os direitos reservados</label>
        </div>
        <div className="redes-sociais">
          <div className="facebook">
            <a href="https://pt-br.facebook.com/Enegrecer/" target="_blank">
              <img src={facebook} alt="Logo Facebook" />
            </a>
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/coletivoenegrecer/" target="_blank">
              <img src={instagram} alt="Logo Instagram" />
            </a>
          </div>
        </div>        
      </div>  
    );
  }
}
