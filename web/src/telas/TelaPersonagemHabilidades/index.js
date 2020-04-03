import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles';
import { Conteiner } from './styles';

import HabPersonagemContext from './context/HabPersonagemContext';

import Detalhes from './components/Detalhes';
import Habilidades from './components/Habilidades';

const TelaPersonagemHabilidades = (props) => {
    const [ habSelecionada, setHabSelecionada ] = useState({});

    useEffect( ()=> {

        return () => {

        };

    }, [habSelecionada]);

    return (
        <Conteiner>
            <BotaoVoltar ><Link  to="/personagem">Voltar</Link></BotaoVoltar>
            <HabPersonagemContext.Provider value={{ habSelecionada, setHabSelecionada }} >
                <Detalhes />
                <Habilidades />
            </HabPersonagemContext.Provider>
        </Conteiner>
    )
};

export default TelaPersonagemHabilidades;