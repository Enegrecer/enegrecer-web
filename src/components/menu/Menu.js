import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagens/logo.svg';
import './menu.css';

export default class Menu extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="menu">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo Verdade Seja Dita" />
          </Link>
        </div>
        <div className="links">
          <Link to="/sobre">SOBRE</Link>
          <Link to="/depoisdenuncia">E DEPOIS DA DENÚNCIA?</Link>
          <Link to="/coletivo-enegrecer">O COLETIVO ENEGRECER</Link>
          <Link to="/painel/denuncias/nova">DENUNCIAR</Link>
        </div>
      </div>
    );
  }
}
