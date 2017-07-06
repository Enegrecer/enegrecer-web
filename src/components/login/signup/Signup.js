import React from 'react';
import firebaseApp from '../../../utils/firebaseUtils';

const loginText = "Login";
const registerText = "Register";
const passwordText = "Password";
const firstNameText = "First Name";
const lastNameText = "Last Name";

export default class Signup extends React.Component {

    constructor(props){
        super(props)
        this.state={
          logged: false,
          login: "",
          password: "",
          firstName: "",
          lastName: ""
        };
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px" }}>
                <div style={{ marginTop: "20px" }}>
                    <p>{firstNameText}</p>
                    <input id="first_name" value={this.state.firstName}
                    onChange={(event) => this.setProperty(event,"firstName")}></input>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>{lastNameText}</p>
                    <input id="last_name" value={this.state.lastName}
                    onChange={(event) => this.setProperty(event,"lastName")}></input>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>{loginText}</p>
                    <input id="login" value={this.state.login}
                    onChange={(event) => this.setProperty(event,"login")}></input>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>{passwordText}</p>
                    <input id="password" type="password" value={this.state.password}
                    onChange={(event) => this.setProperty(event,"password")}></input>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <button onClick={() => this.onPressRegisterButton()}>{registerText}</button>
                </div>
                {this.state.logged && <p>Uhuu</p>}
            </div>
        )
    }

    setProperty(event, property){
      const currentState = this.state;
      this.setState({
        ...currentState,
        [property]: event.target.value
      })
    }

    onPressRegisterButton(){
      const login = this.state.login;
      const password = this.state.password;
      firebaseApp.auth().createUserWithEmailAndPassword(login, password)
        .then(() => {
          this.setState({
            ...this.state,
            logged : true
          });
          const user = firebaseApp.auth().currentUser;
          user.sendEmailVerification();
        }).then((error) => {
      });
    }

}
