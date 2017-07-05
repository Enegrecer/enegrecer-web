import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20" }}>
                <div style={{ marginTop: "20" }}>
                    <p>Login</p>
                    <input id="login"></input>
                </div>
                <div style={{ marginTop: "20" }}>
                    <p>Password</p>
                    <input id="password" type="password"></input>
                </div>
            </div>
        )
    }
}