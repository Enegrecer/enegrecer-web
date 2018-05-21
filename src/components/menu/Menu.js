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
    if (!this.state.mobileNavVisible) {
      this.setState({ mobileNavVisible: true });
    } else {
      this.setState({ mobileNavVisible: false });
    }
  }

  escondeMenu() {
    this.setState({ mobileNavVisible: false });
  }

/* eslint-disable */
  navigationLinks() {
    return (
      <ul>
        <li key={1}><Link to="/sobre" onClick={this.escondeMenu}>SOBRE</Link></li>
        <li key={2}><Link to="/depois-denuncia" onClick={this.escondeMenu}>E DEPOIS DA DENÚNCIA?</Link></li>
        <li key={3}><Link to="/coletivo-enegrecer" onClick={this.escondeMenu}>O COLETIVO ENEGRECER</Link></li>
        <li key={4}><Link className="denunciar" to="/denunciar" onClick={this.escondeMenu}>DENUNCIAR</Link></li>
      </ul>
    );
  }
    /* eslint-enable */

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
          <a
            role="button"
            tabIndex="0"
            onClick={elementClicked => this.handleNavClick(elementClicked)}
          >
            <i className="material-icons icon-white">menu</i></a>
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
          <Link to="/"><img src={logo} alt="Logo Verdade Seja Dita" /></Link>
        </div>
        {this.renderNavigation()}
      </div>
    );
  }
}
