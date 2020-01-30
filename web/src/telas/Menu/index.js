import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <>
            <div>
                <h1>MENU</h1>
                <Link to="/personagem">Personagem</Link>
                <Link to="/mapa">Mapa</Link>
                <Link to="/Arena">Arena</Link>
                <Link to="/personagens">Escolher personagem</Link>
            </div>

            </>
        )
    }
};