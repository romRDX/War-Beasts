import React, { useState, useCallback } from 'react';

import PersonagensContext from './context/PersonagensContext';

import { Selecao } from "./styles.js";
import Miniaturas from './components/Miniaturas';
import Personagem from './components/Personagem';

const TelaPersonagens = () => {
    const [ personagemSelecionado, setarPersonagemSelecionado ] = useState(null);
    const [myCharacters, setMyCharacters] = useState(null);

    const selecionarPersonagem = useCallback( (personagemSelecionado) => {
        setarPersonagemSelecionado(personagemSelecionado);
    },[personagemSelecionado]);

    return (
        <Selecao>
            <PersonagensContext.Provider value={{ selecionarPersonagem, personagemSelecionado }}>
                <Miniaturas setSelectedChar={setarPersonagemSelecionado} setMyCharacters={setMyCharacters} myCharacters={myCharacters} />
                <Personagem setMyCharacters={setMyCharacters} />
            </PersonagensContext.Provider>
        </Selecao>
    )

}

export default TelaPersonagens;