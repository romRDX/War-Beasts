import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from "./styles.js";

export default class TelaMenu extends Component {
    render() {
        return (
            <>
                <Menu>
                    <h1>WAR BEAST</h1>
                    <Link className="menuLink" to="/personagem">Personagem</Link>
                    <Link className="menuLink" to="/mapa">Mapa</Link>
                    <Link className="menuLink" to="/Arena">Arena</Link>
                    <Link className="menuLink" to="/main">Teste</Link>
                    <Link className="menuLink" to="/personagens">Escolher personagem</Link>
                </Menu>
                <div>
                </div>
            </>
        )
    }
};