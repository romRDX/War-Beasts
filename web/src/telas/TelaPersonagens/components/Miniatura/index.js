import React, { Component } from 'react'

import { PersonagemMiniatura } from "./styles.js";

export default class Miniatura extends Component {

    render() {
        return (
            <PersonagemMiniatura onClick={() => this.props.func(this.props.info)}>
                <div className="info" >
                    <h2>{this.props.info.nome}</h2>
                    <h3>{this.props.info.classe}</h3>
                    <h4> Guild </h4>
                    <h5>Nv. {this.props.info.nivel}</h5>
                </div>
                <div className="image"></div>
            </PersonagemMiniatura>
        )
    }
}
