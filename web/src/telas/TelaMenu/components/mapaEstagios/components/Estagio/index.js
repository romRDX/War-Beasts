import React, { Component } from 'react';

import { Box, Cenario, Info } from './styles';

import store from 'store';

import history from 'services/history';

export default class Estagio extends Component {

    constructor(props) {
        super(props);
        this.goToMap = this.goToMap.bind(this);
    }

    goToMap(e) {
        e.preventDefault();

        // console.log(this.props.est.idMapa);
        const dispatcher = {
            type: 'SELECT_MAP',
            map: this.props.est
        }

        store.dispatch(dispatcher);
    
        history.push('/mapa');
      
    }

    render() {
        return (
            <Box onClick={this.goToMap}>
                <Cenario />
                <Info>
                    <h1>{this.props.est.nome}</h1>
                    <h2>Nv. {this.props.est.nivel}</h2>
                </Info>
            </Box>
        )
    }
}

 