import React, { Component } from 'react'

import { PersonagemMiniatura } from "./styles.js";

export default class Miniatura extends Component {

    render() {
        return (
            <PersonagemMiniatura onClick={() => this.props.func(this.props.char)}>
                <div className="info" >
                    <h2>{this.props.char.nome}</h2>
                    <h3>{this.props.char.classe}</h3>
                    <h4> Guild </h4>
                    <h5> Nv. {this.props.char.nivel}</h5>
                </div>
                <div className="image"></div>
            </PersonagemMiniatura>
        )
    }
}
