import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Check from 'material-ui/svg-icons/navigation/check';
import firebaseApp from '../../utils/firebaseUtils';
import { setProperty } from '../../modules/auth';
import styles from './Login.style';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      login: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  }

  onPressRegisterButton() {
    return firebaseApp.auth().createUserWithEmailAndPassword(this.state.login, this.state.password)
      .then((user) => {
        this.setState({
          ...this.state,
          logged: true,
        });
        user.sendEmailVerification();
      }).catch((error) => {
        this.setState({
          ...this.state,
          loginError: error.code,
          loginErrorMessage: error.message,
          logged: false,
          password: '',
        });
      });
  }
  generateTextField(id, text, value, property, type) {
    return (
      <TextField
        id={id}
        floatingLabelText={text}
        value={value}
        onChange={e => setProperty(e, property, this)}
        type={type || 'text'}
      />
    );
  }

  render() {
    return (
      <div style={styles.wrapper}>
        {'Cadastro'}
        {this.generateTextField('firstName', 'Nome', this.state.firstName, 'firstName')}
        {this.generateTextField('lastName', 'Sobrenome', this.state.lastName, 'lastName')}
        {this.generateTextField('login', 'Email', this.state.login, 'login')}
        {this.generateTextField('password', 'Senha', this.state.password, 'password', 'password')}
        <RaisedButton
          label="Registrar"
          labelPosition="before"
          primary
          icon={<Check />}
          disabled={this.state.logged}
          fullWidth
          onTouchTap={() => this.onPressRegisterButton()}
          style={styles.input}
        />
      </div>
    );
  }
}
