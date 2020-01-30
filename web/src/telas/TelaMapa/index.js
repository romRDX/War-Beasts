import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TelaMapa extends React.Component {
    render() {
        return (
            <div>
                <h1>MAPA</h1>
                <Link to="/main">Voltar</Link>
            </div>
        )
    }
};