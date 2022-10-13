import React, { useState, useEffect, useCallback } from 'react';

import PersonagensContext from './context/PersonagensContext';

import { Selecao } from "./styles.js";
import Miniaturas from './components/Miniaturas';
import PersonagemInfo from './components/PersonagemInfo';
import { useAuth } from 'hooks/useAuth';
import { apiWB } from 'services/axios';

const TelaPersonagens = () => {
    const [ personagemSelecionado, setarPersonagemSelecionado ] = useState({});
    const [myCharacters, setMyCharacters] = useState(null);

    const selecionarPersonagem = useCallback( (personagemSelecionado) => {
        setarPersonagemSelecionado(personagemSelecionado);
    },[personagemSelecionado]);

    // useEffect( ()=> {

    //     return () => {

    //     };

    // }, [personagemSelecionado]);

    // const { authData } = useAuth();

    // useEffect(() => {
    //     if(authData){
    //         console.log("XX: ", authData.id);
    //         apiWB.get('/characters', {
    //             params: JSON.stringify({
    //             userId: authData.id
    //             })
    //         }).then((resp) => {
    //             console.log("ZZZx: ", resp);
    //             setMyCharacters(resp.data.userCharacters);
    //         });
    //     }
    // }, [authData]);

    return (
        <Selecao>
            <PersonagensContext.Provider value={{ selecionarPersonagem, personagemSelecionado }}>
                <Miniaturas setSelectedChar={setarPersonagemSelecionado} />
                <PersonagemInfo />
            </PersonagensContext.Provider>
        </Selecao>
    )

}

export default TelaPersonagens;