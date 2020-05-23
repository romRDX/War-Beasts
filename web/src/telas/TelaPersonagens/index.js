import React, { useState, useEffect, useCallback } from 'react';

import PersonagensContext from './context/PersonagensContext';

import { Selecao } from "./styles.js";
import Miniaturas from './components/Miniaturas';
import PersonagemInfo from './components/PersonagemInfo';

const TelaPersonagens = () => {
    const [ personagemSelecionado, setarPersonagemSelecionado ] = useState({});

    const selecionarPersonagem = useCallback( (personagemSelecionado) => {
        setarPersonagemSelecionado(personagemSelecionado);
    },[personagemSelecionado]);

    useEffect( ()=> {

        return () => {

        };

    }, [personagemSelecionado]);

    return (
        <Selecao>
            <PersonagensContext.Provider value={{ selecionarPersonagem, personagemSelecionado }}>
                <Miniaturas />
                <PersonagemInfo />
            </PersonagensContext.Provider>
        </Selecao>
    )

}

export default TelaPersonagens;