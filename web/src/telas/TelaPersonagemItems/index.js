import React, { useState, useEffect } from 'react'

import { Conteiner } from './styles';

import ItemsPersonagemContext from './context/ItemsPersonagemContext';

import Detalhes from './components/Detalhes';
import Habilidades from './components/Habilidades';

const TelaPersonagemItems = (props) => {
    const [ itemSelecionado, setItemSelecionado ] = useState({});

    useEffect( ()=> {

        return () => {

        };

    }, [itemSelecionado]);

    return (
        <Conteiner>
            <ItemsPersonagemContext.Provider value={{ itemSelecionado, setItemSelecionado }} >
                <Detalhes />
                <Habilidades />
            </ItemsPersonagemContext.Provider>
        </Conteiner>
    )
};

export default TelaPersonagemItems;