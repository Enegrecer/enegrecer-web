import React, { Component } from 'react';
import { auth } from '../../utils/firebaseUtils';
import Modal from '../comum/modal/modal'

import './moderador-login.css'

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const ESTADO_INICIAL = {
  email: '',
  senha: '',
  error: null,
};

export default class ModeradorLogin extends Component {
  constructor(props) {
    super(props);
    
    this.state = { ...ESTADO_INICIAL }
  }

  trataMensagemDeErro = (error) => {
    if(error.code === 'auth/invalid-email') {
      error.message = 'O email é inválido!'
    } else if (error.code === 'auth/wrong-password') {
      error.message = 'A senha está incorreta!'
    } else if (error.code === 'auth/user-not-found') {
      error.message = 'Usuário não encontrado!'
    }

    return error;
  }

  onSubmit = (event) => {
    const {
      email,
      senha,
    } = this.state;

    auth.signInWithEmailAndPassword(email, senha).then(() => {
      this.setState(() => ({ ...ESTADO_INICIAL }));
      alert("Logado!");
      window.location.href = '/moderador/painel'
    })
    .catch(error => {
      this.trataMensagemDeErro(error);
      this.setState(updateByPropertyName('error', error));
      
      var element = document.getElementById("confirm-button");
      element.classList.add("modal-trigger");
      element.click();
    
      var element = document.getElementById("confirm-button");
      element.classList.remove("modal-trigger");  
    });
    
    event.preventDefault();
  }
  
  componentDidMount() {
    window.$(document).ready(function(){
      window.$('.modal').modal();
    });
  }

  render() {
    const {
      email,
      senha,
      error,
    } = this.state;

    const isInvalid =
      senha === '' ||
      email === '';

    return (
      <div className="row login_moderador">
        <form className="col s4 formulario_login_moderador" onSubmit={this.onSubmit}>
          <div className="input-field col s12">
            <input id="login_moderador" type="text" className="validate" value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} />
            <label htmlFor="login_moderador">Login Moderador</label>
          </div>
          <div className="input-field col s12">
            <input id="senha_moderador" type="password" className="validate" value={senha} onChange={event => this.setState(updateByPropertyName('senha', event.target.value))} />
            <label htmlFor="senha_moderador">Senha Moderador</label>
          </div>
            <button id="confirm-button" className="waves-effect waves-light btn" data-target="modal_erro" disabled={isInvalid} type="submit" name="action" >
              Entrar
            </button>
            
            <Modal id='modal_erro' tituloModal='Erro ao logar' textoModal={error && error.message} textoBotao="FECHAR" />
        </form>
      </div>
    );
  }
}
