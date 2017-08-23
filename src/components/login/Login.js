import React from 'react';
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import Paper from 'material-ui/Paper';
import styles from './Login.style';
import FlatButton from 'material-ui/FlatButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';

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
            button = (
                <FlatButton
                    onClick={() => this.onSignUpPress(false)}
                    fullWidth={true}
                    icon={<ChevronRight />}
                >
                    {"Registre-se"}
                </FlatButton>
            );
            loginElement = (<SignIn />);
        } else {
            button = (
                <FlatButton
                    onClick={() => this.onSignUpPress(true)}
                    fullWidth={true}
                    icon={<ChevronLeft />}
                >
                    {"Fazer Login"}
                </FlatButton>
            );
            loginElement = (<SignUp />);
        }

        return (
            <div style={styles.wrapper}>
                <Paper style={{ margin: "20px", padding: "20px" }} elevation={4}>
                    {loginElement}
                    {button}
                </Paper>
            </div>
        );
    }

    onSignUpPress(show) {
        this.setState({ isLogging: show });
    }

}
