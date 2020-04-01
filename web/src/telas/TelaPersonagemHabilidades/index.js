import React, { useState, useEffect } from 'react'

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
            <HabPersonagemContext.Provider value={{ habSelecionada, setHabSelecionada }} >
                <Detalhes />
                <Habilidades />
            </HabPersonagemContext.Provider>
        </Conteiner>
    )
};

export default TelaPersonagemHabilidades;