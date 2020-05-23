import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles';
import { Container } from './styles';

import TracosPersonagemContext from './context/TracosPersonagemContext';

import Detalhes from './components/Detalhes';
import Habilidades from './components/Habilidades';

const TelaPersonagemTracos = (props) => {
    const [ tracoSelecionado, setTracoSelecionado ] = useState({});

    useEffect( ()=> {

        return () => {

        };

    }, [tracoSelecionado]);

    return (
        <Container>
            <BotaoVoltar ><Link  to="/personagem">Voltar</Link></BotaoVoltar>
            <TracosPersonagemContext.Provider value={{ tracoSelecionado, setTracoSelecionado }} >
                <Detalhes />
                <Habilidades />
            </TracosPersonagemContext.Provider>
        </Container>
    )
};

export default TelaPersonagemTracos;