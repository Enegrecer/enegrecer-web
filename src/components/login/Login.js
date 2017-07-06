import React from 'react';
import Signin from './signin/Signin.js'
import Signup from './signup/Signup.js'

const signupText = "Signup";
const backText = "Back";

export default class Login extends React.Component {

    constructor(){
      super()
      this.state={
        isLogging: true
      };
    }
    render() {
      let button;
      let loginElement;
      
      if (this.state.isLogging){
        button = (
          <div>
            <button onClick={() => this.onSignupPress(false)}>{signupText}</button>
          </div>
        );
        loginElement = (<Signin/>);
      } else {
        button = (
          <div>
            <button onClick={() => this.onSignupPress(true)}>{backText}</button>
          </div>
        );
        loginElement = (<Signup/>);
      }

        return (
          <div>
            {loginElement}
            {button}
          </div>
        );
    }

    onSignupPress(show){
        this.setState({isLogging : show});
    }

}
