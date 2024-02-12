import React, { useContext, useEffect, useState } from 'react'

import { Container } from './styles.js';

import Logo from './components/Logo';
import Descricao from './components/Descricao';
import Botao from './components/Botao';
import TriboContext from 'telas/TelaPersonagensNovo/context/raceContext.js';


const Detalhes = () => {
    const { selectedRace } = useContext(TriboContext);
    
    return (
        <Container>
            <h1>{ selectedRace.name }</h1>
            <Logo img={selectedRace.wallpaper} />
    
            <Descricao descricao={ selectedRace.description} />
            <Botao />
        </Container>
    )
    
};

export default Detalhes;
