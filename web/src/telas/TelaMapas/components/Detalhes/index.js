import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from 'store';
import history from 'services/history';

import {  } from './styles';
import { Conteiner, Portrait, Info, Entrar, Desbloquear } from './styles';


export default class Detalhes extends Component {

    entrarEstagio(e){

        e.preventDefault();

        if (!this.props.info){
            return;
        }
        
        const dispatcher = {
            type: 'SELECT_MAP',
            map: this.props.info
        }

        store.dispatch(dispatcher);
    
        history.push('/mapa');
    }

    render() {
        return (
            <Conteiner>
                <Link className="voltar" to="/principal">Voltar</Link>
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
            </Conteiner>
        )
    }
};