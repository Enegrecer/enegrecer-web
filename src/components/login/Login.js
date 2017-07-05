import React from 'react';
import styles from './Login.style';

export default class Login extends React.Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.input}>
                    <p>Login</p>
                    <input id="login"></input>
                </div>
                <div style={styles.input}>
                    <p>Password</p>
                    <input id="password" type="password"></input>
                </div>
            </div>
        )
    }
}