import React, { useState, useEffect } from 'react'

import { Conteiner } from './styles';

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
        <Conteiner>
            <TracosPersonagemContext.Provider value={{ tracoSelecionado, setTracoSelecionado }} >
                <Detalhes />
                <Habilidades />
            </TracosPersonagemContext.Provider>
        </Conteiner>
    )
};

export default TelaPersonagemTracos;