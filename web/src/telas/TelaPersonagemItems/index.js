import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles';
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
            <BotaoVoltar ><Link  to="/personagem">Voltar</Link></BotaoVoltar>
            <ItemsPersonagemContext.Provider value={{ itemSelecionado, setItemSelecionado }} >
                <Detalhes />
                <Habilidades />
            </ItemsPersonagemContext.Provider>
        </Conteiner>
    )
};

export default TelaPersonagemItems;