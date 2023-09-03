import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles.js';

import MapsContext from './context/MapsContext';

import Mapas from './components/Mapas';
import Detalhes from './components/Detalhes';

import { Container } from './styles';

const TelaMapas = () => {

    const [ mapaSelecionado, setMapaSelecionado ] = useState('');

    const  selecionarMapa = useCallback( (estagio) => {
        setMapaSelecionado(estagio);
    },[]);

    const buttonStyle = {
        margin: 'auto',
        pos: [0,0 ],
    }
    
    return (
        <Container>
            <BotaoVoltar theme={ buttonStyle } ><Link  to="/principal">Voltar</Link></BotaoVoltar>
            <MapsContext.Provider value={{ selecionarMapa, mapaSelecionado }}>
                <Detalhes mapaSelecionado={ mapaSelecionado } />
                <Mapas />
            </MapsContext.Provider>
        </Container>
    )
    
};

export default TelaMapas;