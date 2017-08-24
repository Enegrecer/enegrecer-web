import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Home extends Component {
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

Home.propTypes = {
    auth: PropTypes.shape({
        logged : PropTypes.bool,
        user : PropTypes.shape({
            email : PropTypes.string
        })
    })
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(
    mapStateToProps
)(Home);
