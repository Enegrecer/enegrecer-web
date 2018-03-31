import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagens/logo.svg';
import './menu.css';

export default class Menu extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="col s12 menu">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo Verdade Seja Dita" />
          </Link>
        </div>
        <div className="links">
          <Link to="/sobre">SOBRE</Link>
          <Link to="/depois-denuncia">E DEPOIS DA DENÚNCIA?</Link>
          <Link to="/coletivo-enegrecer">O COLETIVO ENEGRECER</Link>
          <Link to="/denunciar">DENUNCIAR</Link>
        </div>
      </div>
    );
  }
}
