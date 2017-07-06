import React from 'react';
import Signin from './signin/Signin.js'
import Signup from './signup/Signup.js'
import Paper from 'material-ui/Paper';
import styles from './Login.style';

const signupText = "Signup";
const backText = "Back";

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      isLogging: true
    };
  }
  render() {
    let button;
    let loginElement;

    if (this.state.isLogging) {
      button = (<button onClick={() => this.onSignupPress(false)}>{signupText}</button>);
      loginElement = (<Signin />);
    } else {
      button = (<button onClick={() => this.onSignupPress(true)}>{backText}</button>);
      loginElement = (<Signup />);
    }

    return (
      <div style={styles.wrapper}>
        <Paper style={{margin: "20px", padding: "20px"}} elevation={4}>
          {loginElement}
          {button}
        </Paper>
      </div>
    );
  }

  onSignupPress(show) {
    this.setState({ isLogging: show });
  }

}
