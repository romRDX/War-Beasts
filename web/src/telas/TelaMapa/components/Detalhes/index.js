import React, { Component } from 'react';

import {  } from './styles';
import { Box, Portrait, Info, Entrar } from './styles';


export default class index extends Component {

    entrarEstagio(){

    }

    selecionarEstagio(){
        
    }

    render() {
        return (
            <Box>
                <Portrait />
                <Info>
                    <div>
                        Estágio: 1
                    </div>
                    <div>
                        Nível: 1
                    </div>
                    <div>
                        Inimigos: 
                    </div>
                </Info>
                <Entrar onClick={this.entrarEstagio}> Entrar </Entrar>
            </Box>
        )
    }
};
