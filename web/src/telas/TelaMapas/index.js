import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles.js';

import MapasContext from './context/MapasContext';

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
            <MapasContext.Provider value={{ selecionarMapa }}>
                <Detalhes mapaSelecionado={ mapaSelecionado } />
                <Mapas />
            </MapasContext.Provider>
        </Container>
    )
    
};

export default TelaMapas;