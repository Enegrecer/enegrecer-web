import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagens/logo.svg';
import './menu.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', screenSize => this.handleResize(screenSize));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', screenSize => this.handleResize(screenSize));
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  handleNavClick() {
    this.setState({ mobileNavVisible: !this.state.mobileNavVisible });
  }

  escondeMenu() {
    this.setState({ mobileNavVisible: false });
  }

/* eslint-disable */
  navigationLinks() {
    const links = [
      { id: 1, to: '/sobre', label: "SOBRE" },
      { id: 2, to: '/depois-denuncia', label: "E DEPOIS DA DENÚNCIA?" },
      { id: 3, to: '/coletivo-enegrecer', label: "O COLETIVO ENEGRECER" },
      { id: 4, to: '/denunciar', label: "DENUNCIAR", className: "denunciar"}
    ]

    return (
      <ul>
        {links.map(link => (
          <li key={link.id}><Link className={link.className} to={link.to} onClick={this.escondeMenu} onKeyDown={this.escondeMenu}>{link.label}</Link></li>
        ))}
      </ul>
    );
  }
  renderMobileNav() {
    if (this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
    return null;
  }

  renderNavigation() {
    if (this.state.windowWidth <= 1080) {
      return [
        <div key={7} className="mobile_nav">
          <div
            role="button"
            tabIndex="0"
            onClick={elementClicked => this.handleNavClick(elementClicked)}
            onKeyDown={elementClicked => this.handleNavClick(elementClicked)}
          >
            <i className="material-icons icon-white">menu</i>
          </div>
          {this.renderMobileNav()}
        </div>
      ];
    }
    return [
      <div key={7} className="links">
        {this.navigationLinks()}
      </div>
    ];
  }

  render() {
    return (
      <div className="col s12 m6 menu">
        <div className="logo">
          <Link href="/" to="/"><img src={logo} alt="Logo Verdade Seja Dita" /></Link>
        </div>
        {this.renderNavigation()}
      </div>
    );
  }
}
