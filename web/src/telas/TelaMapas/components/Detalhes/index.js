import React, { Component, useCallback } from 'react';

import { Botao } from 'globalComponents/Botoes/styles.js';

import { useHistory } from 'react-router-dom';

import { Container, Portrait, Info, Entrar } from './styles';

const Detalhes = ({ mapaSelecionado }) => {
    const history = useHistory();

    const entrarMapa = useCallback( (e)  => {
        e.preventDefault();

        if (!mapaSelecionado){
            return;
        }
        
        const dispatcher = {
            type: 'SELECT_MAP',
            map:  mapaSelecionado
        }

        history.push('/mapa');
    }, [history, mapaSelecionado]);

    const buttonStyle = {
        margin: ' 0 auto 15px',
        size: [60,6],
        fontSize: '20px',
    }

    return (
        <Container>
            <Portrait />
            <Info>
                <div>
                    {  mapaSelecionado.nome  && <h2>Estágio: {  mapaSelecionado.nome }</h2>}
                </div>
                <div>
                    {  mapaSelecionado.nivel  && <h2>Nível: {  mapaSelecionado.nivel }</h2>}
                </div>
                <div>
                    
                </div>
            </Info>
            <Botao theme={buttonStyle} onClick={ entrarMapa.bind(this)}> Entrar </Botao>
        </Container>
    )
    
};

export default Detalhes;