import React, { useState, useEffect } from 'react';

import TriboContext from './context/TriboContext';

import TelaRacas from './components/TelaRacas';
import TelaTribos from './components/TelaTribos';
import { Conteiner } from "./styles.js";

const TelaPersonagensNovo = (props) => {
    const [ tribo, setTribo ] = useState('');
    const [ selecionada , setSelecionada] = useState('');

    const selecionarTribo = (select) => {
        setSelecionada(select);
    }

    const confirmarTribo = (select) => {
        setTribo(select);
    }

    useEffect( ()=> {

        return () => {

        };

    }, [tribo]);

    return (
        <Conteiner>
            <TriboContext.Provider value={{ tribo, selecionada, confirmarTribo, selecionarTribo }}>
            {
                tribo ? 
                    <TelaRacas /> :
                    <TelaTribos />
            }
            </TriboContext.Provider>
        </Conteiner>
    )

}

export default TelaPersonagensNovo;