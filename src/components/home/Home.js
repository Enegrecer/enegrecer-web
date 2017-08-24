import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let userInfo;
        
        if(this.props.auth.logged){
            userInfo = <div>Meu usuário é: {this.props.auth.user.email} </div>
        }

        return (
            <div id="home">
                {userInfo}
                <h1>Enegrecer</h1>
                <Link to="/categorias">Categorias</Link>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(
    mapStateToProps
)(Home);
