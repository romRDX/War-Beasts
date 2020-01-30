import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TelaArena extends React.Component {
    render() {
        return (
            <div>
                <h1>ARENA</h1>
                <Link to="/main">Voltar</Link>
            </div>
        )
    }
};