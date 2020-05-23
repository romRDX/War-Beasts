import React, { useContext } from 'react'

import { Container } from './styles.js';

import Logo from './components/Logo';
import Descricao from './components/Descricao';
import Botao from './components/Botao';
import TriboContext from 'telas/TelaPersonagensNovo/context/TriboContext.js';

const Detalhes = () => {
    const { triboSelecionada } = useContext(TriboContext);

    return (
        <Container>
            <h1>{ triboSelecionada.nome }</h1>
            <Logo />
    
            <Descricao descricao={ triboSelecionada.descricao} />
            <Botao />
        </Container>
    )
    
};

export default Detalhes;
