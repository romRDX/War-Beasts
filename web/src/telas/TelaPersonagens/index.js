import React, { useState, useEffect } from 'react';

import PersonagensContext from './context/PersonagensContext';

import { Selecao } from "./styles.js";
import Miniaturas from './components/Miniaturas';
import PersonagemInfo from './components/PersonagemInfo';

const TelaPersonagens = (props) => {
    const [ personagemSelecionado, setarPersonagemSelecionado ] = useState({});

    const selecionarPersonagem = (personagemSelecionado) => {
        setarPersonagemSelecionado(personagemSelecionado);
    }

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