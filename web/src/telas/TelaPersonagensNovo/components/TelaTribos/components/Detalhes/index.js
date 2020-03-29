import React, { useContext } from 'react'

import { Conteiner } from './styles.js';

import Logo from './components/Logo';
import Descricao from './components/Descricao';
import Botao from './components/Botao';
import TriboContext from 'telas/TelaPersonagensNovo/context/TriboContext.js';

const Detalhes = ( props ) => {
    const { selecionada } = useContext(TriboContext);

    return (
        <Conteiner>
            <h1>{ selecionada.nome }</h1>
            <Logo />
    
            <Descricao descricao={ selecionada.descricao} />
            <Botao />
        </Conteiner>
    )
    
};

export default Detalhes;
