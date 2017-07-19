import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <h1>Enegrecer</h1>
                <Link to="/categorias">Categorias</Link>
            </div>
            
        );
    }
}

