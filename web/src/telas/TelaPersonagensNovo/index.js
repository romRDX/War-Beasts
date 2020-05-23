import React, { useState, useEffect, useCallback } from 'react';

import TriboContext from './context/TriboContext';

import TelaRacas from './components/TelaRacas';
import TelaTribos from './components/TelaTribos';
import { Container } from "./styles.js";

const TelaPersonagensNovo = () => {
    const [ tribo, setTribo ] = useState('');
    const [ triboSelecionada , setTriboSelecionada] = useState('');

    const selecionarTribo = useCallback( (tribo) => {
        setTriboSelecionada(tribo);
    },[]);

    const confirmarTribo = useCallback( (tribo) => {
        setTribo(tribo);
    },[]);

    useEffect( ()=> {

        return () => {

        };

    }, [tribo]);

    return (
        <Container>
            <TriboContext.Provider value={{ tribo, triboSelecionada, confirmarTribo, selecionarTribo }}>
            {
                tribo ? 
                    <TelaRacas /> :
                    <TelaTribos />
            }
            </TriboContext.Provider>
        </Container>
    )

}

export default TelaPersonagensNovo;