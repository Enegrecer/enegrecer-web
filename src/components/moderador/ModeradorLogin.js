import React, { Component } from 'react';
import './moderador-login.css'
export default class ModeradorLogin extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="row login_moderador">
        <form className="col s4 formulario_login_moderador">
          <div className="input-field col s12">
            <input id="login_moderador" type="text" class="validate" />
            <label for="login_moderador">Login Moderador</label>
          </div>
          <div className="input-field col s12">
            <input id="senha_moderador" type="password" className="validate" />
            <label for="senha_moderador">Senha Moderador</label>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
