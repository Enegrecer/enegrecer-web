import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Check from 'material-ui/svg-icons/navigation/check';
import { connect } from 'react-redux';
import styles from './Login.style';
import { requestSignIn } from '../../actions';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  onPressLoginButton() {
    this.props.onLoginPress(this.state.login, this.state.password);
  }

  setProperty(event, property) {
    const currentState = this.state;
    this.setState({
      ...currentState,
      [property]: event.target.value,
    });
  }

  render() {
    return (
      <div style={styles.wrapper}>
        {'Acesso'}
        <TextField
          id="login"
          hintText="exemplo@email.com"
          errorText={this.props.auth && this.props.auth.loginError && ' '}
          floatingLabelText="Email"
          value={this.state.login}
          onChange={e => this.setProperty(e, 'login')}
        />
        <TextField
          id="password"
          errorText={this.props.auth && this.props.auth.loginError && ' '}
          floatingLabelText="Senha"
          value={this.state.password}
          onChange={e => this.setProperty(e, 'password')}
          type="password"
        />
        <br />
        {this.props.auth && this.props.auth.loginError && <div className="alert alert-danger" role="alert">{this.props.auth.loginErrorMessage}</div>}
        <RaisedButton
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

SignIn.propTypes = {
  onLoginPress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  onLoginPress: (login, password) => {
    dispatch(requestSignIn({
      email: login,
      password,
    }));
  },
});

const reduxSignIn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

export default reduxSignIn;
