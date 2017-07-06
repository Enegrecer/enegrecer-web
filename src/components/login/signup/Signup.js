import React from 'react';
import firebaseApp from '../../../utils/firebaseUtils';
import styles from '../Login.style';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Check from 'material-ui/svg-icons/navigation/check';

export default class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            logged: false,
            login: "",
            password: "",
            firstName: "",
            lastName: ""
        };
    }

    render() {
        return (
            <div style={styles.wrapper}>
                {"Cadastro"}
                <TextField
                    id="firstName"
                    floatingLabelText="Nome"
                    value={this.state.firstName}
                    onChange={(e) => this.setProperty(e, 'firstName')}
                />
                <TextField
                    id="lastName"
                    floatingLabelText="Sobrenome"
                    value={this.state.lastName}
                    onChange={(e) => this.setProperty(e, 'lastName')}
                />
                <TextField
                    id="login"
                    floatingLabelText="Email"
                    value={this.state.login}
                    onChange={(e) => this.setProperty(e, 'login')}
                />
                <TextField
                    id="password"
                    floatingLabelText="Senha"
                    value={this.state.password}
                    onChange={(e) => this.setProperty(e, 'password')}
                    type="password"
                />
                <RaisedButton
                    label="Registrar"
                    labelPosition="before"
                    primary={true}
                    icon={<Check />}
                    disabled={this.state.logged}
                    fullWidth={true}
                    onTouchTap={() => this.onPressRegisterButton()}
                    style={styles.input}
                />
            </div>
        )
    }

    setProperty(event, property) {
        const currentState = this.state;
        this.setState({
            ...currentState,
            [property]: event.target.value
        })
    }

    onPressRegisterButton() {
        const login = this.state.login;
        const password = this.state.password;
        firebaseApp.auth().createUserWithEmailAndPassword(login, password)
            .then(() => {
                this.setState({
                    ...this.state,
                    logged: true
                });
                const user = firebaseApp.auth().currentUser;
                user.sendEmailVerification();
            }).then((error) => {
            });
    }

}
