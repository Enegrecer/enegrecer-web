import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Check from 'material-ui/svg-icons/navigation/check';
import styles from './Login.style';
import { login, resetPassword, setProperty } from '../../modules/auth';

function setErrorMsg(error) {
  return {
    loginMessage: error,
  };
}

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      loginMessage: null,
    };

    this.resetPassword = this.resetPassword.bind(this);
  }

  onPressLoginButton() {
    login(this.state.login, this.state.password)
      .catch(() => {
        this.setState(setErrorMsg('Invalid email/password.'));
      });
  }

  resetPassword() {
    resetPassword(this.state.login)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.state.login}.`)))
      .catch(() => this.setState(setErrorMsg('Email address not found.')));
  }

  render() {
    return (
      <div style={styles.wrapper}>
        {'Acesso'}
        <TextField
          id="login"
          hintText="exemplo@email.com"
          errorText={this.state.loginMessage && ' '}
          floatingLabelText="Email"
          value={this.state.login}
          onChange={e => setProperty(e, 'login', this)}
        />
        <TextField
          id="password"
          errorText={this.state.loginMessage && ' '}
          floatingLabelText="Senha"
          value={this.state.password}
          onChange={e => setProperty(e, 'password', this)}
          type="password"
        />
        <br />
        {
          this.state.loginMessage &&
          <div className="alert alert-danger" role="alert">
            <span className="sr-only">Error:</span>
            {this.state.loginMessage}<br />
            <a
              role="button"
              tabIndex="0"
              onClick={this.resetPassword}
              className="alert-link"
            >Esqueceu sua Senha?
            </a>
          </div>
        }
        <RaisedButton
          name="Entrar"
          label="Entrar"
          labelPosition="before"
          primary
          icon={<Check />}
          fullWidth
          disabled={this.state.logged}
          onTouchTap={() => this.onPressLoginButton()}
          style={styles.input}
        />
      </div>
    );
  }
}
