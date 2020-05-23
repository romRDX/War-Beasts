import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles';

import Mapa from './components/Mapa';
import Detalhes from './components/Detalhes';

import { Container } from './styles';
import MapaContext from 'telas/TelaMapa/context/MapaContext';

const TelaMapa = () => {

    const [ estagioSelecionado, setEstagioSelecionado ] = useState('');

    useEffect( ()=> {

        return () => {

        };

    }, [estagioSelecionado]);

    const selecionarEstagio = useCallback( (stage) => {
        setEstagioSelecionado(stage);
    }, [])
    
    return (
        <Container>
            <BotaoVoltar ><Link  to="/mapas">Voltar</Link></BotaoVoltar>
            <MapaContext.Provider value={{ selecionarEstagio, estagioSelecionado }}>
                <Detalhes estagioSelecionado={ estagioSelecionado } />
                <Mapa />
            </MapaContext.Provider>
            
        </Container>
    )
    
};

export default TelaMapa;