import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TelaArena extends Component {
    render() {
        return (
            <div>
                <h1>ARENA</h1>
                <Link to="/principal">Voltar</Link>
            </div>
        )
    }
};