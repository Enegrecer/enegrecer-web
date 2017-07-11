import React from 'react';
import Signin from './signin/Signin.js'
import Signup from './signup/Signup.js'
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
                    onClick={() => this.onSignupPress(false)}
                    fullWidth={true}
                    icon={<ChevronRight />}
                >
                    {"Registre-se"}
                </FlatButton>
            );
            loginElement = (<Signin />);
        } else {
            button = (
                <FlatButton
                    onClick={() => this.onSignupPress(true)}
                    fullWidth={true}
                    icon={<ChevronLeft />}
                >
                    {"Fazer Login"}
                </FlatButton>
            );
            loginElement = (<Signup />);
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

    onSignupPress(show) {
        this.setState({ isLogging: show });
    }

}
