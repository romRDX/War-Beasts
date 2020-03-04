import React, { Component } from 'react';

import { Box } from './styles';

export default class Estagio extends Component {

    selecionado(){
        return ( this.props.selected.nome == this.props.est.nome ) ? 'red' : 'white';
    }

    render() {
        return (
            <Box posicao={this.props.est.posicao} onClick={ () => this.props.func(this.props.est) }  cor={ this.selecionado.bind(this) }/>
        )
    }
}
