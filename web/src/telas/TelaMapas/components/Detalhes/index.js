import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from 'store';
import history from 'services/history';

import {  } from './styles';
import { Conteiner, Portrait, Info, Entrar } from './styles';

const Detalhes = (props) => {

    const entrarMapa = (e) => {
        e.preventDefault();

        if (!props.info){
            return;
        }
        
        const dispatcher = {
            type: 'SELECT_MAP',
            map:  props.info
        }

        store.dispatch(dispatcher);
        history.push('/mapa');
    }

    return (
        <Conteiner>
            <Link className="voltar" to="/principal">Voltar</Link>
            <Portrait />
            <Info>
                <div>
                    {  props.info.nome  && <h2>Estágio: {  props.info.nome }</h2>}
                </div>
                <div>
                    {  props.info.nivel  && <h2>Nível: {  props.info.nivel }</h2>}
                </div>
                <div>
                    
                </div>
            </Info>
            <Entrar onClick={ entrarMapa.bind(this)}> Entrar </Entrar>
        </Conteiner>
    )
    
};

export default Detalhes;