import React, { Component } from 'react';

import store from 'store';
import history from 'services/history';

import {  } from './styles';
import { Box, Portrait, Info, Entrar } from './styles';


export default class Detalhes extends Component {

    entrarEstagio(){

        const dispatcher = {
            type: 'ENTER_STAGE',
            stage: this.props.info.nome,
            nome: this.props.info.nome
        }

        store.dispatch(dispatcher);

        history.push('/batalha-A');
    }

    render() {
        return (
            <Box>
                <Portrait />
                <Info>
                    <div>
                        { this.props.info.nome  && <h2>Estágio: { this.props.info.nome }</h2>}
                    </div>
                    <div>
                        { this.props.info.nivel  && <h2>Nível: { this.props.info.nivel }</h2>}
                    </div>
                    <div>
                        
                    </div>
                </Info>
                <Entrar onClick={this.entrarEstagio.bind(this)}> Entrar </Entrar>
            </Box>
        )
    }
};