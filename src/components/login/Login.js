import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import SignInPage from './SignIn';
import SignUp from './SignUp';
import styles from './Login.style';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogging: true,
    };
  }

  onSignUpPress(show) {
    this.setState({ isLogging: show });
  }

  render() {
    let button;
    let loginElement;

    if (this.state.isLogging) {
      button = (
        <FlatButton
          onClick={() => this.onSignUpPress(false)}
          fullWidth
          icon={<ChevronRight />}
        >
          {'Registre-se'}
        </FlatButton>
      );
      loginElement = (<SignInPage />);
    } else {
      button = (
        <FlatButton
          onClick={() => this.onSignUpPress(true)}
          fullWidth
          icon={<ChevronLeft />}
        >
          {'Fazer Login'}
        </FlatButton>
      );
      loginElement = (<SignUp />);
    }

    return (
      <div style={styles.wrapper}>
        <Paper style={{ margin: '20px', padding: '20px' }} elevation={4}>
          {loginElement}
          {button}
        </Paper>
      </div>
    );
  }
}
