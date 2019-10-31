import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import logo from '../../imagens/logo.svg';
import './navbar.css';

class Navbar extends Component {
  componentDidMount() {
    const elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    });
  }

  navigationLinks() {
    const links = [
      { id: 1, to: '/sobre', label: 'SOBRE' },
      { id: 2, to: '/depois-denuncia', label: 'E DEPOIS DA DENÚNCIA?' },
      { id: 3, to: '/coletivo-enegrecer', label: 'O COLETIVO ENEGRECER' },
      {
        id: 4,
        to: '/denunciar',
        label: 'DENUNCIAR',
        className: 'denunciar'
      }
    ];

    return (
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <Link
              className={link.className}
              to={link.to}
              onClick={this.escondeMenu}
              onKeyDown={this.escondeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <Link href="/" to="/" className="logo-desktop brand-logo">
                <img src={logo} alt="Logo Verdade Seja Dita" />
              </Link>
              <a href="#!" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <div key={7} className="links">
                  {this.navigationLinks()}
                </div>
              </ul>
            </div>
          </nav>
        </div>

        <ul id="slide-out" className="sidenav">
          <div className="logo-wrapper">
            <div className="logo-mobile">
              <Link href="/" to="/">
                <img src={logo} alt="Logo Verdade Seja Dita" />
              </Link>
            </div>
          </div>
          <li>
            <a className="waves-effect botao-denunciar" href="/denunciar">
              <i className="material-icons">add_comment</i>Denunciar
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/depois-denuncia">
              <i className="material-icons">help</i>E depois da denúncia?
            </a>
          </li>
          <li>
            <a className="waves-effect" href="coletivo-enegrecer">
              <i className="material-icons">supervisor_account</i>Coletivo Enegrecer
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/sobre">
              <i className="material-icons">info</i>Sobre
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
